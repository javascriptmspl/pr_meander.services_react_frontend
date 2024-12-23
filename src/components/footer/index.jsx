import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
 
  render() {
    const exclusionArray = ["chat", "chat-stylist", "voice-call", "video-call", "map-grid", "map-list"];
    if (
      exclusionArray.indexOf(this.props.location.pathname.split("/")[1]) >= 0
    ) {
      return "";
    }
    const url = this.props.location.pathname.split("/")[1];
    // console.log('url', url);

    return (
      <footer className="footer">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8 newsletter text-center">
                <h3>Sign Up For Newsletter</h3>
                <form className="newsletter-form">
                  <input type="email" className="form-control" placeholder="Your Email Address" autoComplete="off" />
                  <button className="btn cmn-btn disabled" type="submit"><i className="fas fa-paper-plane mr-2" /></button>
                </form>
                <div className="social-icon">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com" target="_blank"><i className="fab fa-facebook-f" /> </a>
                    </li>
                    <li>
                      <a href="https://twitter.com" target="_blank"><i className="fab fa-twitter" /> </a>
                    </li>
                    <li>
                      <a href="https://youtube.com" target="_blank"><i className="fab fa-youtube" /></a>
                    </li>
                    <li>
                      <a href="https://in.linkedin.com" target="_blank"><i className="fab fa-linkedin-in" /></a>
                    </li>
                  </ul>
                </div>
                {/* Copyright Menu */}
                <div className="copyright-menu">
                  <ul className="policy-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/appointments">Appointments</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/my-consultants">Consultants</Link></li>
                    <li><Link to="/search">Search Stylists</Link></li>
                    <li><Link to="/register">Register</Link></li>
                  </ul>
                </div>
                {/* /Copyright Menu */}
                <div className="copyright-text">
                  <p className="mb-0">© 2021 dreamsstyle. All Rights Reserved</p>
                </div>
              </div>							
            </div>
          </div>
        </div>
        {/* /Footer Top */}
      </footer>
    );
  }
}

export default Footer;
