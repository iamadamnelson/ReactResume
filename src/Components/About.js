import React, { Component } from 'react';

class About extends Component {
  render() {
    // Add a check to ensure data exists before trying to access its properties
    if (!this.props.data) {
      return null;
    }

    var profilepic = "images/" + this.props.data.image;
    var name = this.props.data.name;
    var bio = this.props.data.bio;
    var street = this.props.data.address.street;
    var city = this.props.data.address.city;
    var state = this.props.data.address.state;
    var zip = this.props.data.address.zip;
    var phone = this.props.data.phone;
    var email = this.props.data.email;
    var resumedownloadpdf = this.props.data.resumedownloadpdf;
    var resumedownloaddocx = this.props.data.resumedownloaddocx;

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={profilepic} alt="Profile Pic" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
            <div className="row">
{/*               <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span><br />
                  <span>{street}<br />
                    {city} {state}, {zip}
                  </span><br />
                  <span>{phone}</span><br />
                  <span>{email}</span>
                </p>
              </div> */}
              <div className="columns download">
                <p>
                  <a href={resumedownloadpdf} className="button" download>
                    <img src="images/adobe.png" alt="PDF Icon" style={{ width: '20px', verticalAlign: 'middle', marginRight: '5px' }} />
                    Download PDF
                  </a>
                  <a href={resumedownloaddocx} className="button" download style={{ marginLeft: '10px' }}>
                    <img src="images/word.png" alt="Word Icon" style={{ width: '20px', verticalAlign: 'middle', marginRight: '5px' }} />
                    Download DOCX
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;