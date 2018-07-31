import React, { Component } from 'react';

import 'css/App.css';

const routes = [
  // ['/', 'Home'],
  // ['/about_us', 'About Us'],
  ['/Other_Services', 'Other Services'],
  ['/Plant_Nurseries', 'Plant Nurseries'],
  ['/contact_us', 'Contact Us'],
];

class Nav extends Component {
  render() {
    var cls = Array(routes.length);
    if (typeof this.props.active === 'number') cls[this.props.active] = 'active';
    return (
      <div>
        <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">99802 90951</div>
            <div className="col-4 pt-1">&nbsp;</div>
            <div className="col-4 d-flex justify-content-end align-items-center">91080 10034</div>
          </div>
        </header>

        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between header-bar">
            <a className="blog-header-logo text-dark" href="#">
              <font className="header-text">Akshaya Agro Services</font>
            </a>
            <span style={{ display: 'flex', justifyContent: 'center' }}>
              {routes.map((r, i) => (
                <a className="p-2 text-muted" key={i} href={r[0]}>
                  {r[1]}
                </a>
              ))}
            </span>
          </nav>
        </div>
      </div>
    );
  }
}
export default Nav;

/* <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="#">
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
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
          <div>sdfsd</div>
        </div> */
/* <div id="navdiv" style={{ top: '0px', position: 'fixed', width: '100%' }}>
        <div style={{ top: '0px' }} id="example-menu">
          <nav className="bs hover-underline-menu" id="data-menu-underline-from-center">
            <ul className="menu align-center">
              {routes.map((r, i) => (
                <li key={i} className={cls[i]}>
                  <a className="txtcase" href={r[0]}>
                    {r[1]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div> */
// </nav>
