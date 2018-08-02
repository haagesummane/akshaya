import AppBody from 'components/AppBody';
import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <AppBody active={this.props.active}>
        <div className="contbcg" style={{ width: '80%', textAlign: 'center' }}>
          <h1>About Us</h1>
          <hr />
          <article style={{ textAlign: 'justify' }}>
            <p>
              Akshaya Agro Services was established in the year 2008 by a renowned horticulture
              consultant DR. Ramachandra Hegde, M. Sc. (Horticulture). It started as Agri Clinic and
              Agri Business Centre at Karadagere Kaval, 15 kilometres away from Tumakur of
              Karnataka. Multiple activities are spread over 20 acres of farm here.
            </p>
            <p>
              DR. Ramachandra Hegde had his post-graduation with gold medal from University of
              Agricultural Sciences, Dharwad. He stays on the farm looking after all the activities
              of Akshaya Agro Services. He has the rich experience of 23 years in the field of
              high-tech horticulture like floriculture, vegetables, seed production etc. under poly
              house and also the open field cultivation of pomegranate, banana, mango, drumstick and
              many more crops.
            </p>
            <p>The main activities of Akshaya Agro Services</p>
            <ul>
              <li> Plant Nursery of Fruits and Plantation crops </li>
              <li> Horticulture Consultancy and Bankable Project Report Making</li>
              <li> Green House and Shade Net House Construction </li>
              <li> Training and Resource Person</li>
              <li> Floriculture Under Poly House </li>
            </ul>
          </article>
        </div>
      </AppBody>
    );
  }
}
export default About;
