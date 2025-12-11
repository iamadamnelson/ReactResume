import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { ArrowLeft, Activity, Home as HomeIcon, AlertTriangle, CheckCircle, Thermometer, Users, Zap, Shield, Wifi, Lock, Gauge, Camera, Warehouse, Fan, Sun, Moon, Download, Unlock, Cpu, Video, Server, Key } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Edges, ContactShadows, Float, Html } from '@react-three/drei';
import * as THREE from 'three';

// Type augmentation for React Three Fiber elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      boxGeometry: any;
      meshPhysicalMaterial: any;
      ambientLight: any;
      pointLight: any;
    }
  }
}

// --- TYPES ---
interface HouseZone {
  id: string;
  name: string;
  type: 'Living' | 'Bedroom' | 'Utility' | 'Outdoor';
  sqFt: number;
  dimensions: [number, number, number]; 
  position: [number, number, number];
  temp: number;
  humidity: number;
  pressure: number; // hPa
  status: 'OK' | 'WARNING' | 'CRITICAL';
  deviceCount: number;
  occupancy: number;
  // MXChip Data
  hasMXChip: boolean;
  mxChipMonitorsGarage?: boolean; // Only true for garage chip
  garageDoorStatus?: 'OPEN' | 'CLOSED'; // Monitored by MXChip
  // Hub Data (Not MXChip)
  windowStatus?: 'LOCKED' | 'UNLOCKED';
  doorLockStatus?: 'LOCKED' | 'UNLOCKED'; // For porches
  lightStatus?: 'ON' | 'OFF';
  motionStatus?: 'ARMED' | 'DISARMED' | 'TRIGGERED';
  cameraStatus?: 'REC' | 'IDLE';
}

const INITIAL_ZONES: HouseZone[] = [
  { 
    id: "garage", 
    name: "Garage", 
    type: "Utility", 
    sqFt: 506, 
    dimensions: [23, 10, 22], 
    position: [11.5, 5, -11], 
    temp: 68, 
    humidity: 45,
    pressure: 1013,
    status: "OK",
    deviceCount: 3,
    occupancy: 0,
    hasMXChip: true,
    mxChipMonitorsGarage: true,
    garageDoorStatus: 'CLOSED',
    windowStatus: 'LOCKED',
    lightStatus: 'OFF'
  },
  { 
    id: "main_floor", 
    name: "Main Floor", 
    type: "Living", 
    sqFt: 1085, 
    dimensions: [35, 10, 31], 
    position: [40.5, 5, -15.5],
    temp: 72, 
    humidity: 40,
    pressure: 1013,
    status: "OK",
    deviceCount: 12,
    occupancy: 2,
    hasMXChip: true,
    windowStatus: 'LOCKED',
    lightStatus: 'ON',
    motionStatus: 'DISARMED'
  },
  { 
    id: "second_floor", 
    name: "Second Floor", 
    type: "Bedroom", 
    sqFt: 552, 
    dimensions: [23, 10, 24], 
    position: [11.5, 15, -12], 
    temp: 70, 
    humidity: 38,
    pressure: 1013,
    status: "OK",
    deviceCount: 6,
    occupancy: 1,
    hasMXChip: true,
    windowStatus: 'LOCKED',
    lightStatus: 'OFF'
  },
  { 
    id: "back_porch", 
    name: "Back Porch", 
    type: "Outdoor", 
    sqFt: 243, 
    dimensions: [27, 10, 9], 
    position: [44.5, 5, -35.5],
    temp: 78, 
    humidity: 60,
    pressure: 1013,
    status: "OK",
    deviceCount: 2,
    occupancy: 1,
    hasMXChip: false,
    cameraStatus: 'REC',
    doorLockStatus: 'LOCKED'
  },
  { 
    id: "front_porch", 
    name: "Front Porch", 
    type: "Outdoor", 
    sqFt: 108, 
    dimensions: [12, 10, 9], 
    position: [29, 5, 4.5],
    temp: 78, 
    humidity: 60,
    pressure: 1013,
    status: "OK",
    deviceCount: 2,
    occupancy: 0,
    hasMXChip: false,
    cameraStatus: 'REC',
    doorLockStatus: 'LOCKED'
  }
];

const COLORS = {
  OK: '#10b981',      // Emerald 500
  WARNING: '#f59e0b', // Amber 500
  CRITICAL: '#ef4444' // Red 500
};

// --- DATA GENERATOR (For Power BI) ---
const generateHistoricalData = () => {
  const days = 100;
  const samplesPerDay = 3; 
  const data = [];
  const zonesToLog = ['garage', 'main_floor', 'second_floor', 'back_porch', 'front_porch'];
  
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - days);

  for (let i = 0; i < days; i++) {
    for (let s = 0; s < samplesPerDay; s++) {
      currentDate.setHours(currentDate.getHours() + 8);
      const timestamp = currentDate.toISOString();
      const timeOfDay = s === 0 ? 'MORNING' : s === 1 ? 'AFTERNOON' : 'NIGHT';

      zonesToLog.forEach(zoneId => {
        // Base randomization
        const isOutdoor = zoneId.includes('porch');
        const baseTemp = isOutdoor ? 75 : 70;
        const temp = (baseTemp + Math.random() * 15 - 5).toFixed(1);
        const humidity = (45 + Math.random() * 20 - 10).toFixed(0);
        const pressure = (1013 + Math.random() * 10 - 5).toFixed(0);
        
        // Occupancy Simulation
        let occupancy = 0;
        if (timeOfDay === 'NIGHT') {
           if (zoneId === 'second_floor') occupancy = 2; // Sleeping
        } else {
           if (zoneId === 'main_floor') occupancy = Math.floor(Math.random() * 4);
        }

        // Device Statuses
        const lightStatus = timeOfDay === 'NIGHT' && zoneId !== 'garage' ? 'ON' : 'OFF';
        const windowStatus = ['main_floor', 'second_floor', 'garage'].includes(zoneId) ? (Math.random() > 0.95 ? 'UNLOCKED' : 'LOCKED') : 'N/A';
        const doorLockStatus = ['front_porch', 'back_porch'].includes(zoneId) ? (Math.random() > 0.98 ? 'UNLOCKED' : 'LOCKED') : 'N/A';
        const motionStatus = timeOfDay === 'NIGHT' ? 'ARMED' : 'DISARMED';
        const garageDoorStatus = zoneId === 'garage' ? (Math.random() > 0.95 ? 'OPEN' : 'CLOSED') : 'N/A';
        const cameraStatus = isOutdoor ? 'REC' : 'N/A';

        // Source Type Identification for Power BI
        const sourceType = ['garage', 'main_floor', 'second_floor'].includes(zoneId) ? 'MXCHIP_AND_HUB' : 'HUB_ONLY';

        data.push({
          timestamp,
          zoneId,
          sourceType,
          temperature: temp,
          humidity,
          pressure,
          occupancy,
          deviceCount: isOutdoor ? 2 : 8,
          lightStatus,
          windowStatus,
          doorLockStatus,
          motionStatus: zoneId === 'main_floor' ? motionStatus : 'N/A',
          garageDoorStatus,
          cameraStatus
        });
      });
    }
  }

  // Convert to CSV
  const headers = [
    'timestamp', 'zoneId', 'sourceType', 'temperature', 'humidity', 'pressure', 
    'occupancy', 'deviceCount', 'lightStatus', 'windowStatus', 'doorLockStatus',
    'motionStatus', 'garageDoorStatus', 'cameraStatus'
  ];
  
  const csvContent = "data:text/csv;charset=utf-8," 
    + headers.join(",") + "\n" 
    + data.map(e => Object.values(e).join(",")).join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "full_home_telemetry_100days.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// --- 3D COMPONENTS ---

const ZoneMesh = ({ 
  data, 
  isSelected, 
  onClick, 
  onHover 
}: { 
  data: HouseZone; 
  isSelected: boolean; 
  onClick: () => void; 
  onHover: (hovering: boolean) => void; 
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const color = COLORS[data.status];
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.MeshPhysicalMaterial;
      if (isSelected) {
        material.opacity = 0.8 + Math.sin(clock.getElapsedTime() * 2) * 0.1;
      } else if (data.status === 'CRITICAL') {
        material.color.setHex(parseInt(COLORS.CRITICAL.replace('#', '0x')));
        material.opacity = 0.6 + Math.sin(clock.getElapsedTime() * 10) * 0.2;
      } else if (data.lightStatus === 'ON') {
         material.emissive.setHex(0xffaa00);
         material.emissiveIntensity = 0.2;
      } else {
         material.emissiveIntensity = 0;
      }
    }
  });

  return (
    <group position={data.position as [number, number, number]}>
      <mesh
        ref={meshRef}
        onClick={(e) => { e.stopPropagation(); onClick(); }}
        onPointerOver={(e) => { e.stopPropagation(); onHover(true); document.body.style.cursor = 'pointer'; }}
        onPointerOut={() => { onHover(false); document.body.style.cursor = 'auto'; }}
      >
        <boxGeometry args={data.dimensions as [number, number, number]} />
        <meshPhysicalMaterial 
          color={isSelected ? '#ffffff' : color}
          transparent
          opacity={isSelected ? 0.8 : 0.3}
          metalness={0.1}
          roughness={0.1}
          transmission={0.5} 
          thickness={1}
          clearcoat={1}
        />
        <Edges 
          scale={1.0} 
          threshold={15} 
          color={isSelected ? "white" : (data.status === 'CRITICAL' ? "#ff0000" : "#3f3f46")}
        />
      </mesh>
      
      {/* Floating Label */}
      <Html position={[0, data.dimensions[1]/2 + 2, 0]} center distanceFactor={40} className="pointer-events-none">
        <div className={`flex flex-col items-center transition-all duration-300 ${isSelected ? 'scale-110 z-50' : 'scale-100 opacity-70'}`}>
          <div className={`px-2 py-1 rounded text-[10px] font-bold whitespace-nowrap border shadow-lg ${
            isSelected 
              ? 'bg-white text-black border-white' 
              : 'bg-black/60 text-white border-zinc-700 backdrop-blur-md'
          }`}>
            {data.name}
          </div>
          {isSelected && (
            <div className="mt-1 flex gap-1">
               <span className="px-1.5 py-0.5 bg-black/80 text-white text-[8px] rounded font-mono border border-zinc-700">{data.temp}°F</span>
               {data.hasMXChip && (
                   <span className="px-1.5 py-0.5 bg-blue-600 text-white text-[8px] rounded font-mono flex items-center gap-0.5">
                     MXCHIP
                   </span>
               )}
            </div>
          )}
        </div>
      </Html>
    </group>
  );
};

const SceneContent = ({ 
  zones, 
  selectedId, 
  onSelect 
}: { 
  zones: HouseZone[]; 
  selectedId: string | null; 
  onSelect: (id: string) => void;
}) => {
  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[50, 50, 50]} intensity={1} />
      <pointLight position={[-50, 20, -50]} intensity={0.5} color="#blue" />
      
      <group position={[-29, 0, 15]}>
        <Float speed={1} rotationIntensity={0.05} floatIntensity={0.2}>
          {zones.map((zone) => (
            <ZoneMesh 
              key={zone.id} 
              data={zone} 
              isSelected={zone.id === selectedId}
              onClick={() => onSelect(zone.id)}
              onHover={() => {}}
            />
          ))}
        </Float>
      </group>

      <ContactShadows position={[0, -1, 0]} opacity={0.4} scale={100} blur={2.5} far={4} color="#000000" />
      <OrbitControls 
        makeDefault
        enablePan={true} 
        minPolarAngle={0} 
        maxPolarAngle={Math.PI / 2.2} 
        minDistance={30}
        maxDistance={150}
      />
    </>
  );
};

// --- MAIN PAGE COMPONENT ---

export const SmartHomeDashboard: React.FC = () => {
  const [zones, setZones] = useState<HouseZone[]>(INITIAL_ZONES);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  
  // Simulation Loop
  useEffect(() => {
    const interval = setInterval(() => {
      setZones(prevZones => {
        return prevZones.map((zone) => {
          let newTemp = zone.temp + (Math.random() * 0.4 - 0.2); 
          if (newTemp > 85) newTemp = 85;
          if (newTemp < 60) newTemp = 60;

          let newPressure = zone.pressure + (Math.random() * 0.2 - 0.1);

          let newStatus: 'OK' | 'WARNING' | 'CRITICAL' = 'OK';
          if (newTemp > 82) newStatus = 'WARNING';
          
          return { 
            ...zone, 
            temp: parseFloat(newTemp.toFixed(1)),
            pressure: parseFloat(newPressure.toFixed(1)),
            status: newStatus
          };
        });
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Control Handlers
  const toggleLight = (id: string) => {
    setZones(prev => prev.map(z => z.id === id ? { ...z, lightStatus: z.lightStatus === 'ON' ? 'OFF' : 'ON' } : z));
  };

  const toggleWindow = (id: string) => {
    setZones(prev => prev.map(z => z.id === id ? { ...z, windowStatus: z.windowStatus === 'LOCKED' ? 'UNLOCKED' : 'LOCKED' } : z));
  };

  const toggleDoorLock = (id: string) => {
    setZones(prev => prev.map(z => z.id === id ? { ...z, doorLockStatus: z.doorLockStatus === 'LOCKED' ? 'UNLOCKED' : 'LOCKED' } : z));
  };

  const toggleMotion = (id: string) => {
    setZones(prev => prev.map(z => z.id === id ? { ...z, motionStatus: z.motionStatus === 'ARMED' ? 'DISARMED' : 'ARMED' } : z));
  };

  const toggleCamera = (id: string) => {
    setZones(prev => prev.map(z => z.id === id ? { ...z, cameraStatus: z.cameraStatus === 'REC' ? 'IDLE' : 'REC' } : z));
  };

  const selectedZone = zones.find(z => z.id === selectedId) || zones[1]; 

  return (
    <PageTransition>
      <div className="relative pb-12 h-screen max-h-screen flex flex-col overflow-hidden bg-zinc-100 dark:bg-zinc-950">
        
        {/* Top Header Bar */}
        <div className="w-full flex justify-between items-center px-4 md:px-6 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md z-40 shadow-sm">
          <div className="flex items-center gap-4">
             <Link 
               to="/portfolio/project-2" 
               className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium text-sm px-3 py-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
             >
               <ArrowLeft size={16} /> <span className="hidden sm:inline">Back to Project</span>
             </Link>
             
             <div className="h-6 w-px bg-zinc-300 dark:bg-zinc-700"></div>

             <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                </div>
                <h1 className="text-sm md:text-base font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
                  Smart Home Digital Twin<span className="text-zinc-400 font-normal hidden sm:inline"></span>
                </h1>
             </div>
          </div>

          <div className="flex items-center gap-4">
{/*               <button 
                onClick={generateHistoricalData}
                className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold rounded hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
                title="Download 100 days of generated CSV data"
              >
                <Download size={14} /> Download History
              </button> */}
              <div className="hidden md:flex gap-6 text-[10px] md:text-xs font-mono text-zinc-500 font-bold">
                <span className="flex items-center gap-1.5 text-green-600 dark:text-green-500 bg-green-100 dark:bg-green-900/20 px-2 py-1 rounded"><Wifi size={12}/> WIFI: ONLINE</span>
                <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-500 bg-blue-100 dark:bg-blue-900/20 px-2 py-1 rounded"><Lock size={12}/> ALARM: STAY ARMED</span>
              </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 overflow-hidden relative">
          
          {/* 3D Canvas Area */}
          <div className="lg:col-span-2 relative bg-zinc-200 dark:bg-black">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
            
            <Canvas shadows camera={{ position: [40, 50, 40], fov: 35 }}>
              <SceneContent zones={zones} selectedId={selectedId} onSelect={setSelectedId} />
            </Canvas>

            <div className="absolute bottom-6 left-6 z-10 text-xs text-zinc-500 dark:text-zinc-500 font-mono pointer-events-none bg-white/50 dark:bg-black/50 p-2 rounded backdrop-blur-sm">
               <p>Interact: [Left Click] Select Room • [Left Hold] Pan</p>
            </div>
          </div>

          {/* HUD / Sidebar Panel */}
          <div className="lg:col-span-1 bg-white dark:bg-zinc-900 border-l border-zinc-200 dark:border-zinc-800 p-6 flex flex-col gap-6 overflow-y-auto z-20 shadow-2xl">
            
            {/* Header */}
            <div className="pb-4 border-b border-zinc-200 dark:border-zinc-800">
               <div className="flex justify-between items-start">
                 <div>
                   <h2 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Selected Zone</h2>
                   <h3 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                     {selectedZone.name}
                   </h3>
                 </div>
                 <div className={`px-2 py-1 rounded text-xs font-bold ${
                    selectedZone.status === 'OK' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 
                    selectedZone.status === 'WARNING' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                    'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                 }`}>
                    {selectedZone.status}
                 </div>
               </div>
               
               {/* Metrics Row */}
               <div className="grid grid-cols-3 gap-2 mt-4">
                  <div className="p-2 bg-zinc-50 dark:bg-zinc-800/50 rounded flex flex-col items-center">
                    <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider mb-1 flex items-center gap-1"><Warehouse size={10}/> Area</span>
                    <span className="text-sm font-mono font-bold text-zinc-900 dark:text-white">{selectedZone.sqFt} <span className="text-[10px] text-zinc-500">ft²</span></span>
                  </div>
                  <div className="p-2 bg-zinc-50 dark:bg-zinc-800/50 rounded flex flex-col items-center">
                    <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider mb-1 flex items-center gap-1"><Users size={10}/> Occupants</span>
                    <span className="text-sm font-mono font-bold text-zinc-900 dark:text-white">{selectedZone.occupancy}</span>
                  </div>
                  <div className="p-2 bg-zinc-50 dark:bg-zinc-800/50 rounded flex flex-col items-center">
                    <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider mb-1 flex items-center gap-1"><Wifi size={10}/> Devices</span>
                    <span className="text-sm font-mono font-bold text-zinc-900 dark:text-white">{selectedZone.deviceCount}</span>
                  </div>
               </div>
            </div>

            {/* SECTION: MXCHIP SENSORS (Only present if chip exists) */}
            {selectedZone.hasMXChip && (
              <div className="bg-blue-50/50 dark:bg-blue-900/10 rounded-xl p-4 border border-blue-100 dark:border-blue-900/30">
                 <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                   <Cpu size={16} className="text-blue-500"/> MXChip Telemetry
                 </h4>
                 <div className="grid grid-cols-2 gap-2 mb-3">
                   <MetricCard icon={<Thermometer size={14}/>} label="Temp" value={`${selectedZone.temp}°F`} />
                   <MetricCard icon={<Activity size={14}/>} label="Humidity" value={`${selectedZone.humidity}%`} />
                   <MetricCard icon={<Gauge size={14}/>} label="Pressure" value={`${selectedZone.pressure} hPa`} />
                   {selectedZone.mxChipMonitorsGarage && (
                     <div className="p-2 bg-white dark:bg-zinc-900 rounded border border-zinc-200 dark:border-zinc-700 flex flex-col justify-between">
                       <div className="text-[9px] text-zinc-500 font-bold uppercase mb-1">Door Status</div>
                       <div className={`font-mono font-bold text-sm ${selectedZone.garageDoorStatus === 'CLOSED' ? 'text-green-500' : 'text-red-500'}`}>
                         {selectedZone.garageDoorStatus}
                       </div>
                     </div>
                   )}
                 </div>
              </div>
            )}

            {/* INDEPENDENT CONTROL CARDS */}
            <div className="space-y-3">
                
                {/* Light Toggle */}
                {selectedZone.lightStatus && (
                  <div className="flex items-center justify-between p-3 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors">
                    <span className="text-sm font-medium flex items-center gap-3 text-zinc-700 dark:text-zinc-200">
                      <div className={`p-2 rounded-full ${selectedZone.lightStatus === 'ON' ? 'bg-amber-100 text-amber-600' : 'bg-zinc-100 text-zinc-500 dark:bg-zinc-800'}`}>
                        {selectedZone.lightStatus === 'ON' ? <Sun size={18} /> : <Moon size={18} />}
                      </div>
                      Smart Lights
                    </span>
                    <button 
                      onClick={() => toggleLight(selectedZone.id)}
                      className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${selectedZone.lightStatus === 'ON' ? 'bg-green-500' : 'bg-zinc-300 dark:bg-zinc-700'}`}
                    >
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all ${selectedZone.lightStatus === 'ON' ? 'right-1' : 'left-1'}`}></div>
                    </button>
                  </div>
                )}

                {/* Window Lock */}
                {selectedZone.windowStatus && (
                  <div className="flex items-center justify-between p-3 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors">
                    <span className="text-sm font-medium flex items-center gap-3 text-zinc-700 dark:text-zinc-200">
                      <div className={`p-2 rounded-full ${selectedZone.windowStatus === 'LOCKED' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                         {selectedZone.windowStatus === 'LOCKED' ? <Lock size={18} /> : <Unlock size={18} />}
                      </div>
                      Window Locks
                    </span>
                    <button 
                      onClick={() => toggleWindow(selectedZone.id)}
                      className={`px-4 py-1.5 text-xs font-bold rounded-lg border transition-colors ${
                        selectedZone.windowStatus === 'LOCKED' 
                          ? 'bg-zinc-100 text-zinc-600 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700' 
                          : 'bg-red-50 text-red-600 border-red-200 dark:bg-red-900/20 dark:border-red-900/50'
                      }`}
                    >
                      {selectedZone.windowStatus}
                    </button>
                  </div>
                )}

                {/* Door Lock (Porches) */}
                {selectedZone.doorLockStatus && (
                  <div className="flex items-center justify-between p-3 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors">
                    <span className="text-sm font-medium flex items-center gap-3 text-zinc-700 dark:text-zinc-200">
                      <div className={`p-2 rounded-full ${selectedZone.doorLockStatus === 'LOCKED' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                         <Key size={18} />
                      </div>
                      Door Lock
                    </span>
                    <button 
                      onClick={() => toggleDoorLock(selectedZone.id)}
                      className={`px-4 py-1.5 text-xs font-bold rounded-lg border transition-colors ${
                        selectedZone.doorLockStatus === 'LOCKED' 
                          ? 'bg-zinc-100 text-zinc-600 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700' 
                          : 'bg-red-50 text-red-600 border-red-200 dark:bg-red-900/20 dark:border-red-900/50'
                      }`}
                    >
                      {selectedZone.doorLockStatus}
                    </button>
                  </div>
                )}

                {/* Motion (Main Only) */}
                {selectedZone.motionStatus && (
                    <div className="flex items-center justify-between p-3 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors">
                      <span className="text-sm font-medium flex items-center gap-3 text-zinc-700 dark:text-zinc-200">
                        <div className={`p-2 rounded-full ${selectedZone.motionStatus === 'ARMED' ? 'bg-blue-100 text-blue-600' : 'bg-zinc-100 text-zinc-500 dark:bg-zinc-800'}`}>
                           <Activity size={18} />
                        </div>
                        Motion Sensor
                      </span>
                      <button 
                          onClick={() => toggleMotion(selectedZone.id)}
                          className={`px-4 py-1.5 text-xs font-bold rounded-lg border transition-colors ${
                            selectedZone.motionStatus === 'ARMED' 
                              ? 'bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-900/20 dark:border-blue-900/50' 
                              : 'bg-zinc-100 text-zinc-500 border-zinc-200 dark:bg-zinc-800 dark:border-zinc-700'
                          }`}
                      >
                          {selectedZone.motionStatus}
                      </button>
                    </div>
                )}
            </div>

            {/* SECURITY CAMERAS (Porches Only) */}
            {selectedZone.cameraStatus && (
                <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg border border-zinc-800 mt-2">
                   <div className="p-3 bg-zinc-950 flex justify-between items-center border-b border-zinc-800">
                      <h4 className="text-xs font-bold text-white flex items-center gap-2">
                        <Video size={14} className="text-red-500"/> Security Feed
                      </h4>
                      <button 
                           onClick={() => toggleCamera(selectedZone.id)}
                           className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase ${
                             selectedZone.cameraStatus === 'REC' 
                             ? 'bg-red-500 text-white animate-pulse' 
                             : 'bg-zinc-700 text-zinc-400'
                           }`}
                        >
                           {selectedZone.cameraStatus === 'REC' ? 'REC' : 'PAUSED'}
                        </button>
                   </div>
                   
                   {/* Fake feed placeholder */}
                   <div className="w-full aspect-video bg-zinc-900 relative group">
                      <div className="absolute inset-0 flex items-center justify-center">
                          <Video size={32} className="text-zinc-700" />
                      </div>
                      <div className="absolute bottom-2 left-2 text-[10px] font-mono text-zinc-500">
                        CAM_0{selectedZone.id === 'front_porch' ? '1' : '2'} // {selectedZone.name.toUpperCase()}
                      </div>
                   </div>
                </div>
            )}

          </div>
        </div>
      </div>
    </PageTransition>
  );
};

// Helper Components for Sidebar
const MetricCard = ({ icon, label, value, color = 'text-zinc-900 dark:text-white' }: any) => (
  <div className="p-2 bg-white dark:bg-zinc-900 rounded border border-zinc-200 dark:border-zinc-700 flex flex-col justify-between">
     <div className="flex items-center gap-1.5 text-zinc-500 mb-1">
       {icon} <span className="text-[9px] uppercase font-bold tracking-wider">{label}</span>
     </div>
     <div className={`text-sm font-mono font-bold ${color}`}>
       {value}
     </div>
  </div>
);