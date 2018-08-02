import AppBody from 'components/AppBody';
import React, { Component } from 'react';
import { n_fruits } from 'components/Imgs';
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
      ['Coconut', ['Hybrid (TxD)', 'Tiptur Tall', 'COD', 'CGD']],
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

            <h4> The major plants and varieties available at Akshaya Agro are</h4>
            <div className="container-fluid mzpz">
              <div className="row">
                {n_fruits.map((fimg, i) => (
                  <div key={i} className="col-md-6 col-lg-4 pd">
                    <div className="card mzpz">
                      <div className="container-fluid mzpz">
                        <div className="row mzpz">
                          <div
                            className="col-sm-5 rectdiv mzpz"
                            style={{
                              background: 'url(' + fimg + ') ',
                              backgroundSize: 'cover',
                            }}
                          />
                          <div className="col-sm-7 mzpz">
                            <h4 className="th">{fruits_Text[i][0]}</h4>

                            <div className="smp sifs mr-auto">
                              {fruits_Text[i][1].map((t, j) => (
                                <div className="mr-auto" key={j}>
                                  <span>
                                    &nbsp;<i style={{ fontSize: '70%' }} className="fa fa-circle" />
                                    {t}
                                  </span>
                                </div>
                              ))}
                            </div>
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
              <h4>Other Plants:</h4> Papaya, Banana, Anjoor (Fig), Heralekai, Seetaphal, Ramphal,
              Lakshmanphal, Water apple, Butter fruit, Litchi, Apple ber, Tamarind (sweet and sour),
              Starfruit, Arecanut, Black Pepper, Allspice, Cardamom, Cashew nut etc.<hr />
            </div>
          </article>
          <PlantsImgs />
        </div>
      </AppBody>
    );
  }
}
export default Plants;
