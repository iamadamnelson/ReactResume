import React from 'react';

const PowerBIResume = () => {
  return (
    <section id="resume">
      <div className="row">
        <div className="twelve columns">
          <div style={{ textAlign: 'center' }}>
            <iframe
              title="Resume"
              width="1000"
              height="550"
              src="https://app.powerbi.com/view?r=eyJrIjoiMGZiMDQxMDctZGRhOC00NzlmLWE3M2QtMWM3MWZlZThiNWUyIiwidCI6IjYzMGE3NGI0LWFmOWEtNDVlNi1iOTU3LWM0NGQ5YmE5ZTVkOCJ9"
              frameBorder="0"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerBIResume;