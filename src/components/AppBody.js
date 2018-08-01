import React, { Component } from 'react';
import Nav from 'components/Nav';

class AppBody extends Component {
  render() {
    return (
      <div>
        <div className="container bcg-lg">
          <Nav />
        </div>
        {this.props.children}

        <footer style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span>
            &copy;2018&nbsp;Akshay&nbsp;Agro&nbsp;services | All&nbsp;Rights&nbsp;Reserved
          </span>
        </footer>
      </div>
    );
  }
}
export default AppBody;
