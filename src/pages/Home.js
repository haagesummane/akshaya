import AppBody from 'components/AppBody';
import React, { Component } from 'react';
// import { h_Captions, h_Imgs } from 'components/Imgs';
// import { Carousel } from 'react-responsive-carousel';
import boxImg1 from 'images/Home/PlantNursery.jpg';
import boxImg2 from 'images/Home/GreenHouse.jpg';
import boxImg3 from 'images/Home/Consultancy.jpg';
import boxImg4 from 'images/Home/Training.jpg';
import boxImg5 from 'images/Home/Floriculture.jpg';
import 'css/Home.css';
import logo from 'images/logo.png';

class Home extends Component {
  render() {
    const boxImages = [
      [boxImg1, '/Plant_Nurseries'],
      [boxImg2, '/Other_Services#greenhouse'],
      [boxImg3, '/Other_Services#consultancy'],
      [boxImg4, '/Other_Services#training'],
      [boxImg5, '/Other_Services#floriculture'],
    ];
    // const captions = ['Consultancy', 'Floriculture', 'GreenHouse', 'PlantNursery', 'Training'];
    return (
      <AppBody active={this.props.active}>
        <div
          style={{
            width: '80%',
            height: '100%',
            textAlign: 'center',
            textTransform: 'uppercase',
            marginBottom: '20%',
          }}
          className="contbcg"
        >
          <article style={{ textAlign: 'center', padding: '20px', width: '100%' }}>
            <h2>
              <img src={logo} alt="Akshaya Agro Services" height="200" />&nbsp; Akshaya Agro
              Services
            </h2>
          </article>
        </div>
        <div className="container-fluid homeservices">
          <div className="row">
            <div className="col-1">&nbsp;</div>
            {boxImages.map((img, i) => (
              <div
                key={i}
                className="col-2 serv_box mzpz"
                // style={{ background: 'url(' + img[0] + ')', backgroundSize: 'cover' }}
              >
                <a className="mzpz" href={img[1]}>
                  <img
                    className="mzpz"
                    style={{ width: '100%', height: '100%' }}
                    src={img[0]}
                    alt="img"
                  />
                </a>
              </div>
            ))}
            <div className="col-1">&nbsp;</div>
          </div>
        </div>
      </AppBody>
    );
  }
}
export default Home;
