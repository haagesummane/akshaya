import React, { Component } from 'react';
import { n_other_fruits, n_other_fruits_captions } from 'components/Imgs';

class PlantsImgs extends Component {
  render() {
    return (
      <div className="container">
        <div className={'row'}>
          {n_other_fruits.map((img, k) => (
            <div key={k} className="col-6 col-sm-4 col-lg-3 imgcol text-white">
              <img src={img} alt={n_other_fruits_captions[k]} style={{ width: '100%' }} />

              <h5
                style={{
                  background: 'rgba(0,0,0,1)',
                  width: '100%',
                }}
                className="mzpz text-center bw"
              >
                <strong> {n_other_fruits_captions[k]}</strong>
              </h5>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default PlantsImgs;
