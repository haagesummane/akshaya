import AppBody from 'components/AppBody';
import React, { Component } from 'react';
// import { h_Captions, h_Imgs } from 'components/Imgs';
// import { Carousel } from 'react-responsive-carousel';
import 'css/Home.css';
class Home extends Component {
  render() {
    return (
      <AppBody active={this.props.active}>
        <div style={{ width: '80%', textAlign: 'center' }}>
          <h1>Welcome</h1>
          <article style={{ textAlign: 'justify' }}>
            <p>
              Apart from routine nursery and landscaping activities, DR. Nagaraj Bhat is a
              well-known Horticulture Consultant guiding farmers across south India. He has an
              expert in making Project Reports too. He is an approved Valuator for the Court of Law
              and many commercial and cooperative banks.
            </p>
          </article>
        </div>
      </AppBody>
    );
  }
}
export default Home;
