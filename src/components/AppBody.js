import React, { Component } from 'react';
import Nav from 'components/Nav';
import Footer from 'components/Footer';

class AppBody extends Component {
  render() {
    return (
      <div>
        <section>
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
          <Footer />
        </section>
      </div>
    );
  }
}
export default AppBody;
