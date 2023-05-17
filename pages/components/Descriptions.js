import React from 'react';

class Descriptions extends React.Component {
  render() {
  	return (
          <section className="section section-lg bg-web-desc" id='_description'>
            <div className="bg-overlay" style={{opacity:'1'}}></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                            <button className="btn  waves-effect waves-light _token">TOKEN ECONOMICS</button>                        
                    </div>
                </div>
                <div className='row text-center' style={{display:'flex',position:'absolute',maxWidth:'none'}}>
                    <h2 className="text-white" style={{fontSize:'55px',marginLeft:'100px'}}>638K</h2>
                    <p className="padding-t-15 home-desc" style={{fontSize:'24px',lineHeight:'54px'}}>Address</p>
                    <h2 className="text-white" style={{fontSize:'55px',marginLeft:'60px'}}>7B</h2>
                    <p className="padding-t-15 home-desc" style={{fontSize:'24px',lineHeight:'54px'}}>Tokens</p>
                    <h2 className="text-white" style={{fontSize:'55px',marginLeft:'60px'}}>24</h2>
                    <p className="padding-t-15 home-desc" style={{fontSize:'24px',lineHeight:'54px'}}>hr</p>
                    <h2 className="text-white" style={{fontSize:'55px',marginLeft:'60px'}}>300m</h2>
                    <p className="padding-t-15 home-desc" style={{fontSize:'24px',lineHeight:'54px'}}>Interaction</p>
                </div>
            </div>
        </section>
  	);
  }
}
export default Descriptions;