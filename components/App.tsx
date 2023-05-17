import React from 'react';
import Navbar from '../pages/components/Navbar';
import Services from '../pages/components/Services';
import Features from '../pages/components/Features';
import Features2 from '../pages/components/Features2';
import Descriptions from '../pages/components/Descriptions';
import Team from '../pages/components/Team';
import FooterLinks from '../pages/components/FooterLinks';
import SocialMedia from '../pages/components/SocialMedia';
import Footer from '../pages/components/Footer';
import Aux from '../pages/components/Aux_';

function App() {
  var bkg1 = {
    backgroundImage: 'url(images/wave-shape/wave1.png)',
  };
  var bkg2 = {
      backgroundImage: 'url(images/wave-shape/wave2.png)',
  };
  var bkg3 = {
      backgroundImage: 'url(images/wave-shape/wave3.png)',
  };
  var settings = {
      count: 5432,
      border: true,
      showTitle: true,
      noPoints: true,
  };
  const secondsInTheFuture = new Date("2023-06-10T18:30:00Z").getTime() / 1000;
  const secondsNow = new Date().getTime() / 1000;
  const difference = Math.round(secondsInTheFuture - secondsNow);

  return (
    <Aux>
      <Navbar />            
      <section className="section bg-home home-half" id="home">
          <div className="bg-overlay"></div>
          <div className="display-table">
              <div className="display-table-cell">
                  <div className="container">
                      <div className="row" id='_display_row'>
                          <div className="col-lg-10 offset-lg-1 text-white text-center">
                              <h1 className="home-title" id='_homeTitle'>NEW FINANCE ON SUI</h1>
                              <button  className="btn waves-effect waves-light get_started">Get Started</button>
                              <button  className="btn waves-effect waves-light learn_more">Learn More</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="wp-block-cover aligncenter is-light" id='_video'>
              <span aria-hidden="true" className="wp-block-cover__background has-background-dim-0 has-background-dim"></span>
              <video className="wp-block-cover__video-background intrinsic-ignore"  loop autoPlay muted>
                  <source src="images/fs.mp4" type="video/mp4" />
              </video>                    
              <div className="wp-block-cover__inner-container">
              <p className="wp-block-paragraph aligncenter has-text-align-center has-large-font-size aligncenter"></p>
              </div>
          </div>
          <div className="wave-effect wave-anim">
              <div className="waves-shape shape-one">
                  <div className="wave wave-one" style={bkg1}></div>
              </div>
              <div className="waves-shape shape-two">
                  <div className="wave wave-two" style={bkg2}></div>
              </div>
              <div className="waves-shape shape-three">
                  <div className="wave wave-three" style={bkg3}></div>
              </div>
          </div>
      </section>

      <Services />
      <Descriptions />
      <Features />
      <Features2 />
      <Team />
      <SocialMedia />
      <Footer />
      <FooterLinks />
    </Aux>
  );
}

export default App;
