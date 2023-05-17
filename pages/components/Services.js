import React from 'react';

class Services extends React.Component {

  render() {
  	return (
        <section className="section pt-5" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1 className="text-center" style={{fontSize:'35px',fontWeight:'600', color:'#5a6854'}}>WELCOME TO SUI</h1>
                        <h1 className="text-center" style={{fontSize:'70px',fontWeight:'900'}}>A GIFT FROM FISH</h1>                        
                        <div className="section-title-border margin-t-20"></div>
                    </div>
                </div>
                <div className="row vertical-content _aboutDiv">
                    <div className="mg-t-10">
                        <div className="features-box">
                            <h1 className="" style={{fontSize:'35px',fontWeight:'600', color:'#5a6854'}}>A TOTAL OF 6,000,000,000 $FISH TOKENS ARE NOW AVAILABLE TO THOSE WHO MEET THE FOLLOWING CRITERIA.</h1>
                            <h1 className="text-center" style={{fontSize:'35px',fontWeight:'600', color:'#5a6854'}}>BEFORE MAY 5, 2023</h1>
                            <h1 className="" style={{fontSize:'32px',fontWeight:'500', color:'#5a6854',marginTop:'20px'}}>1. Mainnet address has sui tokens</h1>
                            <h1 className="" style={{fontSize:'32px',fontWeight:'500', color:'#5a6854',marginTop:'20px'}}>2. Test network interaction more than 5 times</h1>
                            <h1 className="" style={{fontSize:'32px',fontWeight:'500', color:'#5a6854',marginTop:'20px'}}>3. Contract deployer</h1>
                            <h1 className="text-center" style={{fontSize:'35px',fontWeight:'600', color:'#5a6854',marginTop:'6%'}}>FOR A LIMITED TIME OF 24 HOURS, ANY UNCLAIMED TOKENS WILL BE DESTROYED</h1>
                            <h1 className="text-center" style={{fontSize:'35px',fontWeight:'600', color:'#5a6854',marginTop:'5%'}}>FIRST COME, FIRST SERVED</h1>
                            <button className="btn  waves-effect waves-light _claim">CLAIM 2,400,000$FISH</button>
                        </div>
                    </div>
                    <div className='_countdown row' >
                        
                    </div>
                </div>
                <div className="row vertical-content _aboutDiv">
                    <div className="mg-t-10">
                        <div className="features-box">
                            <h1 className="text-center" style={{fontSize:'35px',fontWeight:'600', color:'#3e3b3b'}}>ABOUT $FISH</h1>
                            <h1 className="" style={{fontSize:'32px',fontWeight:'600', color:'#5a6854',marginTop:'20px'}}>$10 billion in total $FISH</h1>
                            <h1 className="" style={{fontSize:'32px',fontWeight:'600', color:'#5a6854',marginTop:'20px'}}>(Free distribution to users who meet the requirements on sui)</h1>
                            <h1 className="" style={{fontSize:'32px',fontWeight:'600', color:'#5a6854',marginTop:'20px'}}>Liquidity is 30% of the total</h1>
                            <h1 className="" style={{fontSize:'32px',fontWeight:'600', color:'#5a6854',marginTop:'20px'}}>Team accounts for 10% of the total</h1>
                            <h1 className="" style={{fontSize:'32px',fontWeight:'600', color:'#5a6854',marginTop:'20px'}}>(team will use 7% of this 10% as start-up capital for the fishpond play and 2% for buybacks)</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  	);
  }
}
export default Services;