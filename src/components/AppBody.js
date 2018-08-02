import React, { Component } from 'react';
import Nav from 'components/Nav';
import Footer from 'components/Footer';

class AppBody extends Component {
  render() {
    return (
      <div>
        <section id="header">
          <Nav active={this.props.active} />
        </section>
        <section
          id="cont"
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ...this.props.style,
          }}
        >
          {this.props.children}
        </section>
        <section>
          {!this.props.noUpArrow ? (
            <a style={{ textDecoration: 'none', color: 'white' }} href="#header">
              <div
                className="pink_bcg"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: '10',
                  position: 'fixed',
                  height: '40px',
                  width: '40px',
                  bottom: '45px',
                  right: '24px',
                  padding: '7px 5px 5px 5px',
                  borderRadius: '50%',
                  boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, .2)',
                }}
              >
                <i className="fa fa-arrow-up fa-2x rounded-0" />
              </div>
            </a>
          ) : (
            ''
          )}
          <Footer />
        </section>
      </div>
    );
  }
}
export default AppBody;
