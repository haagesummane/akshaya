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
          <article
            style={{
              margin: '0 auto',
              alignContent: 'center',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <div style={{ flexDirection: 'column', marginRight: '10px' }}>
              <iframe
                title="sasya nursery address"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1328.361175503047!2d74.83354772375083!3d14.62498663945312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbeaed391b1c6ef%3A0x473b235419d89d5d!2sShri+Nityananda+Temple!5e1!3m2!1sen!2sin!4v1532341493230"
                frameBorder="0"
                style={{
                  border: 0,
                  minHeight: '200px',
                  minWidth: '250px',
                  width: '100%',
                  height: '100%',
                }}
                allowFullScreen
              />
            </div>
            <div style={{ textAlign: 'left', flexDirection: 'column' }}>
              <address>
                <p>
                  Akshaya Agro Services At: Karadagere Kaval, Post: Chikkasarangi Ta & Dist: Tumakur
                  572118, Karnataka, India Phone: +91 9980290951, +91 9108010034 Contact Person: DR.
                  Ramachandra Hegde Email:{' '}
                  <a href="mailto:akshayaagro69@gmail.com"> akshayaagro69@gmail.com </a>,<a href="mailto:akshayaagro69@gmail.com">
                    {' '}
                    rphegdeagri@gmail.com
                  </a>
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
