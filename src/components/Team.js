import React, { Component } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const images = [{
        id: 1,
        src: "",
        alt: "Image 1",
        name: "Sunny Lu",
        nick: "Vechain"
    },
    {
        id: 2,
        src: "",
        alt: "Image 2 ",
        name: "Helen Hai",
        nick: "Binance"
    },
    {
        id: 3,
        src: "images/speakers/3)Alex-Zinder.png",
        alt: "Image 3",
        name: "Alex-Zinder",
        nick: "Ledger Enterprise"
    },
    {
        id: 4,
        src: "images/speakers/4)Gracy-Chen.png",
        alt: "Image 4",
        name: "Gracy-Chen",
        nick: "Bitget"
    },
    {
        id: 5,
        src: "images/speakers/5)Mohammed-Alblooshi.png",
        alt: "Image 5",
        name: "Mohammed Alblooshi",
        nick: "Dubai Inter-Financial Centre"
    },
    {
        id: 6,
        src: "images/speakers/6)Max-Kordek.png",
        alt: "Image 6",
        name: "Max-Kordek",
        nick: "Lisk"
    },
    {
        id: 7,
        src: "images/speakers/7)Nena-Dokuzov.png",
        alt: "Image 7",
        name: "Nena-Dokuzov",
        nick: "Alserkal Group"
    },
    {
        id: 8,
        src: "images/speakers/8)Reece-Merrick.png",
        alt: "Image 8",
        name: "Reece-Merrick",
        nick: "Ripple"
    },
    {
        id: 9,
        src: "images/speakers/9)Dina-Sam'an.png",
        alt: "Image 9",
        name: "Dina-Sam'an",
        nick: "CoinMENA"
    },
    {
        id: 10,
        src: "images/speakers/10)Jean-Charles-Gaudechon.png",
        alt: "Image 10",
        name: "Jean-Charles-Gaudechon",
        nick: "OneFootball Labs"
    },
    {
        id: 11,
        src: "images/speakers/11)Nicole-Purin.png",
        alt: "Image 11",
        name: "Nicole Purin",
        nick: "OKX"
    },
    {
        id: 12,
        src: "images/speakers/12)Jason-Allegrante.png",
        alt: "Image 12",
        name: "Jason-Allegrante",
        nick: "Fireblocks"
    }
];

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
                            <Link to="#" className="btn  waves-effect waves-light _token" style={{marginTop: '1%',width:'300px',letterSpacing: '2px', marginBottom:'2%'}}>White Paper</Link>
                            <h1 className="text-center" style={{fontSize:'34px',fontWeight:'400', color:'#3a2f2f'}}>SWIM IN THE SUI TOGETHER!</h1>
                        </div>
                    </div>
                </div>
                <div className="row margin-t-50">
                    <Slider {...settings}>
                        {images.map((item) => (
                            <div className="team-box text-center hover-effect" key={item.id}>
                                <div className="team-wrapper">
                                    <div className="team-member">                                    
                                        {/* <img src={item.src}  alt={item.alt}  className="img-fluid rounded" /> */}
                                    </div>
                                </div>
                                <h4 className="team-name">Fish is coming soon!</h4>
                                <p className="text-uppercase team-designation"></p>
                            </div>    
                        ))}                    
                    </Slider>
                </div>
            </div>
        </section>
    
  	);
  }
}
export default Team;