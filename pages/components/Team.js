import React, { Component } from 'react';
import Slider from "react-slick";


class Team extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        speed: 18000,
        autoplaySpeed: 1000,
        cssEase: "linear"
    };

  	return (
     <section className="section pt-4" id="team" style={{backgroundColor:'#e6e6f1'}}>
            <div className="container" style={{marginTop:'1%',maxWidth:'none'}}>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className='text-center'>
                            <h1 className="text-center" style={{fontSize:'70px',fontWeight:'600', color:'#5a6854',marginTop:'4%'}}>READY TO BECOME A FISH?</h1>
                            <button className="btn  waves-effect waves-light _token" style={{marginTop: '1%',width:'300px',letterSpacing: '2px', marginBottom:'2%'}}>White Paper</button>
                            <h1 className="text-center" style={{fontSize:'34px',fontWeight:'400', color:'#3a2f2f'}}>SWIM IN THE SUI TOGETHER!</h1>
                        </div>
                    </div>
                </div>
                <div className="row margin-t-50">
                    
                </div>
            </div>
        </section>
    
  	);
  }
}
export default Team;