import AppBody from 'components/AppBody';
import React, { Component } from 'react';

class Services extends Component {
  render() {
    return (
      <AppBody active={this.props.active}>
        <div className="contbcg" style={{ width: '80%', textAlign: 'center' }}>
          <h1>Services we offer</h1>
          <article style={{ textAlign: 'justify' }}>
            <hr />
            <div id="consultancy">
              <h4> Consultancy and Project Report:</h4>
              DR. Ramachandra Hegde visits farmer’s field and guides them for greenhouse cultivation
              of Capsicum, Carnation, Gerbera and other crops. Even he takes up consultancy work on
              Turn-Key basis for high value horticulture crops, pomegranate, papaya, banana etc.
              Akshaya Agro Services prepares project reports for any agriculture related issues
              especially on horticulture projects which is essential for getting bank loan and
              various subsidies.
            </div>
            <hr />
            <div id="greenhouse">
              <h4>Greenhouse and Shade net House Construction: </h4>
              Akshaya Agro Services has a well-equipped workshop on the farm and an experienced team
              for the construction of poly house and shade net house. Akshaya Agro Services is
              empanelled fabricator under horticulture department of Karnataka. Akshaya had already
              constructed poly house and shade net house in more than 30 acres in nut & bolt system.
            </div>
            <hr />
            <div id="training">
              <h4>Training and Resource Person:</h4>
              DR. Hegde trains and guides the farmers who visit the farm on various aspects of
              horticulture. DR. Ramachandra Hegde participates as a resource person as SMS (subject
              matter specialist) in horticulture government departments and private organisations.
            </div>
            <hr />
            <div id="floriculture">
              <h4>Floriculture: </h4>
              Akshaya Agro farm has 4 acres of greenhouse cultivating Carnation, Gerbera, Gypsophila
              and Vegetables.
            </div>
            <hr />
          </article>
        </div>
      </AppBody>
    );
  }
}
export default Services;
