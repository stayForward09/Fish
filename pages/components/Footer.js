import React from 'react';

class Footer extends React.Component {
  render() {
  	return (
         <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 margin-t-20">
                        <h4>FISH</h4>
                        <div className="text-muted margin-t-20">
                            <ul className="list-unstyled footer-list">
                                <li><a>Home</a></li>
                                <li><a>About us</a></li>
                                <li><a>Careers</a></li>
                                <li><a>Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 margin-t-20">
                        <h4>Information</h4>
                        <div className="text-muted margin-t-20">
                            <ul className="list-unstyled footer-list">
                                <li><a>Terms & Condition</a></li>
                                <li><a>About us</a></li>
                                <li><a>Bookmarks</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 margin-t-20">
                        <h4>Support</h4>
                        <div className="text-muted margin-t-20">
                            <ul className="list-unstyled footer-list">
                                <li><a>FAQ</a></li>
                                <li><a>Contact</a></li>
                                <li><a>Disscusion</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 margin-t-20">
                        <h4>Subscribe</h4>
                        <div className="text-muted margin-t-20">
                            <p></p>
                        </div>
                        <form className="form subscribe">
                            <input placeholder="Email" className="form-control" required />
                            <a className="submit"><i className="pe-7s-paper-plane"></i></a>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
  	);
  }
}
export default Footer;