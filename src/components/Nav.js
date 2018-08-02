import React, { Component } from 'react';

import 'css/App.css';
import logo from 'images/logo.png';
import routes from 'components/Routes';

class Nav extends Component {
  render() {
    var ln_classes = Array(routes.length);
    if (typeof this.props.active === 'number') ln_classes[this.props.active] = ' active';
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                  <a
                    style={{ textTransform: 'uppercase' }}
                    className={' nav-link ' + ln_classes[i]}
                    href={r[0]}
                  >
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
