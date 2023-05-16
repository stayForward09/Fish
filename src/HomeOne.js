import React from 'react';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Features from './components/Features';
import Features2 from './components/Features2';
import Descriptions from './components/Descriptions';
import Team from './components/Team';
import Testi from './components/Testi';
import FooterLinks from './components/FooterLinks';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import Switcher from './components/Switcher';
import Aux from './hoc/Aux_';
import {CountUp} from 'use-count-up';
import Particles from 'react-particles-js';
import { Link } from 'react-router-dom';
import fish from './components/fs.mp4';

function HomeOne() {
    var mystyle = { position: 'absolute',marginTop: '-35%' };
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
            
            <section className="section bg-home home-half" id="home" data-image-src="images/bg-home.png">
                <div className="bg-overlay"></div>
                <div className="display-table">
                    <div className="display-table-cell">
                        <div className="container">
                            <div className="row" id='_display_row'>
                                <div className="col-lg-10 offset-lg-1 text-white text-center">
                                    <h1 className="home-title" id='_homeTitle'>NEW FINANCE ON SUI</h1>
                                    <Link to="#" className="btn waves-effect waves-light get_started">Get Started</Link>
                                    <Link to="#" className="btn waves-effect waves-light learn_more">Learn More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wp-block-cover aligncenter is-light" id='_video'>
                    <span aria-hidden="true" className="wp-block-cover__background has-background-dim-0 has-background-dim"></span>
                    <video className="wp-block-cover__video-background intrinsic-ignore"  loop autoPlay muted>
                        <source src={fish} type="video/mp4" />
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
                {/* <div className="container">
                    <div className='text-center text-white margin-t-30 div_countup'>
                        <p className="countup"><CountUp isCounting start={6000} end={8000} duration={2} />+ <br></br><span style={{marginRight: '20px'}}>Visitors</span></p>
                        <p className="countup"><CountUp  isCounting start={400} end={600} duration={1.5} />+ <br></br><span>Companies</span></p>
                        <p className="countup"><CountUp  isCounting start={10} end={60} duration={1} />+ <br></br><span>Sponsors</span></p>
                        <p className="countup"><CountUp  isCounting start={10} end={40} duration={1} />+ <br></br><span>countries</span></p>
                    </div>
                </div>                      */}
                {/* <Particles style={mystyle}
                    params={{
                        "particles": {
                            "number": {
                                "value": 200
                            },
                            "size": {
                                "value": 4
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }} 
                /> */}
            </section>

            <Services />
            <Descriptions />
            <Features />
            <Features2 />
            <Team />
            <SocialMedia />
            <Footer />
            <FooterLinks />
            {/* <Switcher /> */}
        </Aux>
    );
}

export default HomeOne;