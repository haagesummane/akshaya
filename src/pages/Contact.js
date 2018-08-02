import AppBody from 'components/AppBody';
import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <AppBody active={this.props.active}>
        <div
          className="contbcg"
          style={{
            width: '80%',
            padding: '5px',
            textAlign: 'center',
          }}
        >
          <h1> Contact Us</h1>
          <hr />
          <article
            style={{
              margin: '0 auto',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              flexWrap: 'wrap',
              padding: '20px',
            }}
          >
            <div style={{ flexDirection: 'column', marginRight: '5px', padding: '10px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.1996645177533!2d77.00785599740327!3d13.275459774883814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb02621aaaaaaab%3A0x73b61c2d570502b4!2sKaradigere+Kaaval!5e0!3m2!1sen!2sin!4v1533192930454"
                frameBorder="0"
                allowFullScreen
                title="Akshaya Agro Services"
                style={{
                  border: 0,
                  minHeight: '200px',
                  minWidth: '250px',
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
            <div
              style={{
                textAlign: 'left',

                flexDirection: 'column',
                width: '70%',
              }}
            >
              <address>
                <p>
                  Akshaya Agro Services At: Karadagere Kaval, Post: Chikkasarangi <br/>Ta & Dist: Tumakur
                  572118, Karnataka, India<br /> Phone: +91 9980290951, +91 9108010034 <br />Contact
                  Person: DR. Ramachandra Hegde <br />Email:&nbsp;
                  <a href="mailto:akshayaagro69@gmail.com"> akshayaagro69@gmail.com </a>
                  &nbsp;
                  <a href="mailto:akshayaagro69@gmail.com">rphegdeagri@gmail.com</a>
                </p>
              </address>
            </div>
          </article>
        </div>
      </AppBody>
    );
  }
}
export default Contact;
