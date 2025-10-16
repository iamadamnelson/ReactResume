import React from 'react';
import { useForm } from '@formspree/react';

function Contact(props) {
  const [state, handleSubmit] = useForm("mrbykogv");

  if (state.succeeded) {
    return (
      <section id="contact">
        <div className="row">
          <div className="twelve columns">
            <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!<br />
            </div>
          </div>
        </div>
      </section>
    );
  }

  const { data } = props;
  const name = data ? data.name : '';
  const contactmessage = data ? data.contactmessage : '';
  const email = data ? data.email : '';

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1><span>Get In Touch.</span></h1>
        </div>
        <div className="ten columns">
          <p className="lead">{contactmessage}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form onSubmit={handleSubmit} method="POST" id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <label htmlFor="contactName">Name <span className="required">*</span></label>
                <input type="text" defaultValue="" size="35" id="contactName" name="contactName" />
              </div>
              
              <div>
                <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                <input type="email" defaultValue="" size="35" id="contactEmail" name="contactEmail" />
              </div>

              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" />
              </div>

              <div>
                <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
              </div>

              <div>
                <button className="submit" type="submit" disabled={state.submitting}>Submit</button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>

          <div id="message-warning"> Error</div>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Contact Details</h4>
            <p className="address">
              <span>{name}</span><br />
              <span>{email}</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Contact;