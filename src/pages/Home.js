import AppBody from 'components/AppBody';
import React, { Component } from 'react';
import { h_Captions, h_Imgs } from 'components/Imgs';
import Carousel from 'react-responsive-carousel';
import 'css/Home.css';
class Home extends Component {
  render() {
    return (
      <AppBody active={this.props.active}>
        {/* <div style={{ height: '100%', textAlign: 'center' }}> */}
        {/* <img src={logo} className="homeLogo" alt="Akshaya Agro Services" /> */}
        {/* <div className="homediv">
            <span style={{ marginRight: '100px', padding: '50px' }}>
              <h1>&nbsp;Akshaya Agro Services&nbsp;</h1>
              <h3>&nbsp;Tagline&nbsp;</h3>
            </span>
          </div>
          </div> */}
        <div className="container bcg-lg">
          <div className="col-md-5 text-white">
            <Carousel
              showArrows={true}
              // onChange={onChange}
              // onClickItem={onClickItem}
              // onClickThumb={onClickThumb}
            >
              {h_Imgs.map((img, i) => (
                <div key={i}>
                  <img src={img} alt={h_Captions[i]} />
                  {/* <p className="legend">{h_Captions[i]}</p> */}
                </div>
              ))}
            </Carousel>
          </div>

          <div className="row mb-2">
            <div className="col-md-6">
              <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                <div className="card-body d-flex flex-column align-items-start">
                  <strong className="d-inline-block mb-2 text-primary">World</strong>
                  <h3 className="mb-0">
                    <a className="text-dark" href="#">
                      Featured post
                    </a>
                  </h3>
                  <div className="mb-1 text-muted">Nov 12</div>
                  <p className="card-text mb-auto">
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#">Continue reading</a>
                </div>
                <img
                  className="card-img-right flex-auto d-none d-lg-block"
                  data-src="holder.js/200x250?theme=thumb"
                  alt="whatev"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                <div className="card-body d-flex flex-column align-items-start">
                  <strong className="d-inline-block mb-2 text-success">Design</strong>
                  <h3 className="mb-0">
                    <a className="text-dark" href="#">
                      Post title
                    </a>
                  </h3>
                  <div className="mb-1 text-muted">Nov 11</div>
                  <p className="card-text mb-auto">
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#">Continue reading</a>
                </div>
                <img
                  className="card-img-right flex-auto d-none d-lg-block"
                  data-src="holder.js/200x250?theme=thumb"
                  alt="whatev"
                />
              </div>
            </div>
          </div>
        </div>

        <main role="main" className="bcg-lg container">
          <div className="row">
            <div className="col-md-8 blog-main">
              <h3 className="pb-3 mb-4 font-italic border-bottom">From the Firehose</h3>

              <div className="blog-post">
                <h2 className="blog-post-title">Sample blog post</h2>
                <p className="blog-post-meta">
                  January 1, 2014 by <a href="#">Mark</a>
                </p>

                <p>
                  Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at
                  lobortis.
                </p>
              </div>

              <div className="blog-post">
                <h2 className="blog-post-title">Another blog post</h2>
                <p className="blog-post-meta">
                  December 23, 2013 by <a href="#">Jacob</a>
                </p>

                <p>
                  Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>,
                  nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                  venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis
                  consectetur purus sit amet fermentum.
                </p>
                <blockquote>
                  <p>
                    Curabitur blandit tempus porttitor.{' '}
                    <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id
                    dolor id nibh ultricies vehicula ut id elit.
                  </p>
                </blockquote>
                <p>
                  Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur
                  purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                </p>
                <p>
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis
                  mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
                  nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
              </div>

              <div className="blog-post">
                <h2 className="blog-post-title">New feature</h2>
                <p className="blog-post-meta">
                  December 14, 2013 by <a href="#">Chris</a>
                </p>

                <p>
                  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                  mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada
                  magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus.
                </p>
                <ul>
                  <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                  <li>Donec id elit non mi porta gravida at eget metus.</li>
                  <li>Nulla vitae elit libero, a pharetra augue.</li>
                </ul>
                <p>
                  Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur
                  purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                </p>
                <p>
                  Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a
                  pharetra augue.
                </p>
              </div>

              <nav className="blog-pagination">
                <a className="btn btn-outline-primary" href="#">
                  Older
                </a>
                <a className="btn btn-outline-secondary disabled" href="#">
                  Newer
                </a>
              </nav>
            </div>

            <aside className="col-md-4 blog-sidebar">
              <div className="p-3 mb-3 bg-light rounded">
                <h4 className="font-italic">About</h4>
                <p className="mb-0">
                  Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur
                  purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                </p>
              </div>

              <div className="p-3">
                <h4 className="font-italic">Archives</h4>
                <ol className="list-unstyled mb-0">
                  <li>
                    <a href="#">March 2014</a>
                  </li>
                  <li>
                    <a href="#">February 2014</a>
                  </li>
                  <li>
                    <a href="#">January 2014</a>
                  </li>
                  <li>
                    <a href="#">December 2013</a>
                  </li>
                  <li>
                    <a href="#">November 2013</a>
                  </li>
                  <li>
                    <a href="#">October 2013</a>
                  </li>
                  <li>
                    <a href="#">September 2013</a>
                  </li>
                  <li>
                    <a href="#">August 2013</a>
                  </li>
                  <li>
                    <a href="#">July 2013</a>
                  </li>
                  <li>
                    <a href="#">June 2013</a>
                  </li>
                  <li>
                    <a href="#">May 2013</a>
                  </li>
                  <li>
                    <a href="#">April 2013</a>
                  </li>
                </ol>
              </div>

              <div className="p-3">
                <h4 className="font-italic">Elsewhere</h4>
                <ol className="list-unstyled">
                  <li>
                    <a href="#">GitHub</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                </ol>
              </div>
            </aside>
          </div>
        </main>
      </AppBody>
    );
  }
}
export default Home;
