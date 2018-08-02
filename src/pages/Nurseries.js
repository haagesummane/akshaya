import AppBody from 'components/AppBody';
import React, { Component } from 'react';
import { n_fruits, n_fruits_captions } from 'components/Imgs';
import PlantsImgs from 'components/PlantsImgs';
class Plants extends Component {
  render() {
    const fruits_Text = [
      ['Mango', ['Alphonso', 'Mallika', 'Kesar', 'Rasapuri', 'Baiganapalli', 'Taiwan mango']],
      ['Sapota', ['Cricket ball', 'Kalipatti']],
      ['Guava', ['Allahabad Safed', 'Taiwan Red', 'Lalith Red']],
      ['Jamun', ['Jambe Jamoon', 'Dhupadal']],
      ['Jackfruit', ['Yellow', 'Taiwan Red']],
      [
        'Lime',
        ['Balaji', 'Market Lime', 'Seedless Lime', 'Mosambi', 'Orange', 'Sweet Lime', 'Pomelo'],
      ],
    ];
    return (
      <AppBody active={this.props.active}>
        <div className="contbcg" style={{ width: '80%', textAlign: 'center' }}>
          <h1>Plant Nurseries</h1>
          <hr />
          <article style={{ textAlign: 'justify' }}>
            <p>
              Akshaya Agro Services is the single place in Tumakur where farmers get more than 30
              types of plants of fruit and plantation crops. It produces large number of graft
              plants of fruit and other plants and seedlings of various crop species of different
              varieties. It also buys many other plants from genuine sources of India.
            </p>
            <p>
              <h4> The major plants and varieties available at Akshaya Agro are</h4>
              <div className="container-fluid mzpz">
                <div className="row">
                  {n_fruits.map((fimg, i) => (
                    <div key={i} className="col-md-4 pd">
                      <div className="card">
                        <div className="container-fluid">
                          <div className="row">
                            <div
                              className="col-md-6 rectdiv"
                              style={{
                                background: 'url(' + fimg + ') ',
                                backgroundSize: 'cover',
                              }}
                            />
                            <div className="col-md-6 ">
                              <h3>{fruits_Text[i][0]}</h3>
                              <ul className="smp">
                                {fruits_Text[i][1].map((t, j) => <li key={j}>{t}</li>)}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <br />
                <hr />
                <br />
                <ul>
                  <li>
                    <strong>Other Plants:</strong> Papaya, Banana, Anjoor (Fig), Heralekai,
                    Seetaphal, Ramphal, Lakshmanphal, Water apple, Butter fruit, Litchi, Apple ber,
                    Tamarind (sweet and sour), Starfruit
                  </li>
                  <li>
                    <strong>Plantation Crops:</strong> Coconut: Hybrid (TxD), Tiptur Tall, COD, CGD
                    Arecanut, Black Pepper, Allspice, Cardamom, Cashew nut etc.
                  </li>
                </ul>
              </div>
            </p>
          </article>
          <PlantsImgs />
        </div>
      </AppBody>
    );
  }
}
export default Plants;
