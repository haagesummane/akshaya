import React, { Component } from 'react';
import { n_Imgs, n_Captions } from 'components/Imgs';

class PlantsImgs extends Component {
  render() {
    return (
      <div className="container">
        <div className={'row'}>
          {n_Imgs.map((img, k) => (
            <div key={k} className="col-6 col-sm-4 col-lg-3 imgcol text-white">
              <img src={img} alt={n_Captions[k]} style={{ width: '100%' }} />

              <h5
                style={{
                  background: 'rgba(0,0,0,1)',
                  width: '100%',
                }}
                className="mzpz text-center bw"
              >
                <strong> {n_Captions[k]}</strong>
              </h5>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default PlantsImgs;
