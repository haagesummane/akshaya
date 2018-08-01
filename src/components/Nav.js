import React, { Component } from 'react';

import 'css/App.css';
import logo from 'images/logo.png';
const routes = [
  ['/', 'Home'],
  ['/about_us', 'About Us'],
  ['/Other_Services', 'Other Services'],
  ['/Plant_Nurseries', 'Plant Nurseries'],
  ['/contact_us', 'Contact Us'],
];

class Nav extends Component {
  render() {
    var ln_classes = Array(routes.length);
    if (typeof this.props.active === 'number') ln_classes[this.props.active] = ' active';
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <a className="navbar-brand" href="/">
            <img src={logo} width="70" alt="Akshaya Agro Services" />
            Akshaya Agro Services
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
              {routes.map((r, i) => (
                <li key={i} className="nav-item">
                  <a className={' nav-link ' + ln_classes[i]} href={r[0]}>
                    {r[1]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Nav;
