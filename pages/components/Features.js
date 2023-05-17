import React from 'react';

class Features extends React.Component {
  render() {
  	return (
        <section className="section bg-light" id="features">
            <div className="row" style={{marginTop:'2%'}}>
                <div className="col-lg-8 offset-lg-2">
                    
                    <div className="section-title-border"></div>
                </div>
            </div>
            <div className="container margin-t-20">
                <div className="row vertical-content">
                    <div className="col-lg-6" style={{paddingRight:'4%'}}>
                        <div className="features-box">
                            <p className="section-subtitle font-secondary" id='_feature_subtitle' style={{color:'blue',marginBottom:'0px'}}>The fun continues</p>
                            <h1 className="" style={{fontSize:'70px',fontWeight:'600', color:'#5a6854'}}>MEMORIAL EDITION NFT</h1>
                            <h1 className="" style={{fontSize:'35px',lineHeight: '45px',fontWeight:'400', color:'#5a6854',marginTop:'20px'}}>The launch of the Memorial Sui main net also represents the arrival of FISH, which will offer five fishing opportunities and three guarantees in the soon-to-be-released Fish Pond game, as well as airdrop eligibility for FISHSWAP.</h1>
                            <h1 className="" style={{fontSize:'55px',fontWeight:'600', color:'#5a6854'}}>$50</h1>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="features-box">
                        <img src="images/sui/11-1-1011x1024.jpg" style={{width:'104%', border:'40px solid #725ad1', borderRadius
                    :'30px'}} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <h1 className="text-center" style={{fontSize:'35px',fontWeight:'600', color:'#5a6854',marginTop:'4%'}}>2000/2000</h1>
                <button  className="btn  waves-effect waves-light _token" style={{marginTop: '1%',width:'170px',letterSpacing: '5px'}}>MINT</button>
            </div>
        </section>
  	);
  }
}
export default Features;