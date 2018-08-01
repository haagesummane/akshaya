import React, { Component } from 'react';
class Footer extends Component {
  render() {
    return (
      <div className="text-center footer_">
        &copy;{new Date().getFullYear()}&nbsp;Akshaya&nbsp;Agro&nbsp;Services |
        All&nbsp;Rights&nbsp;Reserved
      </div>
    );
  }
}
export default Footer;
