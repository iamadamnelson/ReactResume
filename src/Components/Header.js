import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentHash: window.location.hash || '#home', // Initialize with current hash or #home
    };
    this.handleHashChange = this.handleHashChange.bind(this);
  }

  // Set up event listener when component mounts
  componentDidMount() {
    window.addEventListener('hashchange', this.handleHashChange);
  }

  // Clean up event listener when component unmounts
  componentWillUnmount() {
    window.removeEventListener('hashchange', this.handleHashChange);
  }

  // Event handler to update state on hash change
  handleHashChange() {
    this.setState({
      currentHash: window.location.hash || '#home',
    });
  }

  // Helper function to dynamically determine the class
  isSectionActive(sectionId) {
    // Check if the current hash matches the section's anchor, defaulting to #home if no hash exists
    return this.state.currentHash === sectionId ? 'current' : '';
  }

  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var description = this.props.data.description;
    }

    // List of navigation items
    const navItems = [
      { id: 'home', label: 'Home' },
      // { id: 'about', label: 'About' },
      { id: 'resume', label: 'Resume' },
      { id: 'contact', label: 'Contact' },
    ];

    return (
      <header id="home">
        <nav id="nav-wrap">
          {/* Mobile buttons remain static */}
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

          <ul id="nav" className="nav">
            {navItems.map(item => (
              <li 
                key={item.id} 
                className={this.isSectionActive(`#${item.id}`)} // Apply active class dynamically
              >
                <a className="smoothscroll" href={`#${item.id}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ... (rest of your component content) ... */}
{/*         <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I am {name}.</h1>
            <h3>{description}.</h3>
            <hr />
          </div>
        </div> */}

        {/* <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p> */}
      </header>
    );
  }
}

export default Header;