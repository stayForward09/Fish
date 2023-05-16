import React from 'react';
import { Link } from 'react-router-dom';

class Features2 extends React.Component {
  render() {
  	return (
        <section className="section" id="features2">
            <div className="row" style={{marginTop:'2%'}}>
                <div className="col-lg-8 offset-lg-2">
                    
                    <div className="section-title-border"></div>
                </div>
            </div>
            <div className="container" style={{marginTop:'2%'}}>
                <div className="row vertical-content">
                    <div className="col-lg-6">
                        <div className="features-box">
                        <img src="images/sui/11-1-1011x1024.jpg" style={{width:'104%', border:'40px solid #725ad1', borderRadius
                    :'30px'}} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6" style={{paddingLeft:'8%'}}>
                        <div className="features-box">
                            <p className="section-subtitle font-secondary" id='_feature_subtitle' style={{color:'blue',marginBottom:'0px'}}>The fun continues</p>
                            <h1 className="" style={{fontSize:'70px',fontWeight:'600', color:'#5a6854'}}>NORMAL</h1>
                            <h1 className="" style={{fontSize:'35px',lineHeight: '45px',fontWeight:'400', color:'#5a6854',marginTop:'20px'}}>There are 2 chances to fish in the fish pond with one guarantee (must produce a reward), with which you can certify the early supporters of FISHSWAP and may be surprised.</h1>
                            <h1 className="" style={{fontSize:'55px',fontWeight:'600', color:'#5a6854'}}>$10</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <h1 className="text-center" style={{fontSize:'35px',fontWeight:'600', color:'#5a6854',marginTop:'4%'}}>8000/8000</h1>
                <Link to="#" className="btn  waves-effect waves-light _token" style={{marginTop: '1%',width:'170px',letterSpacing: '5px'}}>MINT</Link>
            </div>
            <div className="container" style={{marginTop:'2%'}}>
                <p className="section-subtitle font-secondary" style={{color:'blue',marginBottom:'0px',fontSize: '18.4px'}}>fish</p>
                <h1 className="" style={{fontSize:'60px',fontWeight:'600', color:'#5a6854'}}>WHAT IS FISH</h1>
                <h1 className="" style={{fontSize:'32px',fontWeight:'500', color:'#5a6854',marginTop:'30px'}}>GIFT OF THE DEEP SEA</h1>
                <h1 className="" style={{fontSize:'32px',fontWeight:'500', color:'#5a6854',marginTop:'30px'}}>FISH IS JUST THE APPETIZER</h1>
                <h1 className="" style={{fontSize:'32px',fontWeight:'500', color:'#5a6854',marginTop:'30px'}}>MORE ON FISHSWAP COMING SOON</h1>
            </div>
            <div className="container" style={{marginTop:'2%'}}>
                <p className="section-subtitle font-secondary" style={{color:'blue',marginBottom:'0px',fontSize: '18.4px'}}>fish</p>
                <h1 className="" style={{fontSize:'60px',fontWeight:'600', color:'#5a6854'}}>HOW TO JOIN</h1>
                <h1 className="" style={{fontSize:'32px',fontWeight:'500', color:'#5a6854',marginTop:'30px'}}>0 6 1 0</h1>
                <h1 className="" style={{fontSize:'32px',fontWeight:'500', color:'#5a6854',marginTop:'30px'}}>FISHSWAP WILL BE ONLINE SOON</h1>
                <h1 className="" style={{fontSize:'32px',fontWeight:'500', color:'#5a6854',marginTop:'30px'}}>MY FISH PARTNER TOLD ME THAT THERE WILL BE A MYSTERIOUS REWARD FOR HOLDING $FISH</h1>
            </div>
            <div className="container" style={{marginTop:'2%'}}>                
                <h1 className="text-center" style={{fontSize:'34px',fontWeight:'400', color:'#3a2f2f',marginTop:'30px'}}>INTERACTING WITH FISH CAN ALSO GIVE YOU SOME ANSWERS.</h1>
            </div>
        </section>
  	);
  }
}
export default Features2;