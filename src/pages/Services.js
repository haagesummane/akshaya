import AppBody from 'components/AppBody';
import React, { Component } from 'react';
import { services_imgs } from 'components/Imgs';
const contents = [
  [
    'greenhouse',
    'Greenhouse and Shade net House Construction',
    'Akshaya Agro Services has a well-equipped workshop on the farm and an experienced team for the construction of poly house and shade net house. Akshaya Agro Services is empanelled fabricator under horticulture department of Karnataka. Akshaya had already constructed poly house and shade net house in more than 30 acres in nut & bolt system.',
  ],
  [
    'consultancy',
    'Consultancy and Project Report',
    'DR. Ramachandra Hegde visits farmer’s field and guides them for greenhouse cultivation of Capsicum, Carnation, Gerbera and other crops. Even he takes up consultancy work on Turn-Key basis for high value horticulture crops, pomegranate, papaya, banana etc. Akshaya Agro Services prepares project reports for any agriculture related issues especially on horticulture projects which is essential for getting bank loan and various subsidies.',
  ],

  [
    'training',
    'Training and Resource Person',
    'DR. Hegde trains and guides the farmers who visit the farm on various aspects of horticulture. DR. Ramachandra Hegde participates as a resource person as SMS (subject matter specialist) in horticulture government departments and private organisations.',
  ],
  [
    'floriculture',
    'Floriculture',
    'Akshaya Agro farm has 4 acres of greenhouse cultivating Carnation, Gerbera, Gypsophila and Vegetables.',
  ],
];

class Services extends Component {
  render() {
    return (
      <AppBody active={this.props.active}>
        <div className="contbcg" style={{ width: '80%', textAlign: 'center' }}>
          <h1>Other Services we offer</h1>
          <div className="container" style={{ textAlign: 'justify' }}>
            <div className="row">
              {contents.map((content, i) => (
                <div key={i} className="col-md-12" id={content[0]}>
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <hr /> <h3 style={{ width: '100%', textAlign: 'center' }}> {content[1]}</h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-2 ">
                        <img style={{ width: '100%' }} src={services_imgs[i]} alt={content[1]} />
                      </div>
                      <div className="col-lg-10 ">{content[2]}</div>
                    </div>
                  </div>
                </div>
              ))}
              <hr />
            </div>
          </div>
        </div>
      </AppBody>
    );
  }
}
export default Services;
