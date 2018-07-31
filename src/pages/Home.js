import AppBody from 'components/AppBody';
import React, { Component } from 'react';
import { h_Captions } from 'components/Imgs';
import 'css/Home.css';
class Home extends Component {
  render() {
    return (
      <AppBody active={this.props.active}>
        <div style={{ height: '100%', textAlign: 'center' }}>
          {/* <img src={logo} className="homeLogo" alt="Akshaya Agro Services" /> */}
          {/* <div className="homediv">
            <span style={{ marginRight: '100px', padding: '50px' }}>
              <h1>&nbsp;Akshaya Agro Services&nbsp;</h1>
              <h3>&nbsp;Tagline&nbsp;</h3>
            </span>
          </div> */}
          <ul className="cb-slideshow">
            {h_Captions.map((caption, i) => (
              <li key={i}>
                <span>{caption}</span>
                {/* <div>
                  <h3>{caption}</h3>
                </div> */}
              </li>
            ))}
          </ul>
        </div>
      </AppBody>
    );
  }
}
export default Home;
