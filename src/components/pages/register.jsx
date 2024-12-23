import React from 'react';
import { Link } from "react-router-dom";
import {LoginBanner} from "../imagepath"

class Register extends React.Component {
	
    render() {
        return (
			<>
 {/* Page Content */}
 <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {/* Register Content */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img src={LoginBanner} className="img-fluid" alt="Beauty - Salon Register" />	
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>Consultant Register <Link to="/stylist-register">Are you a Stylist?</Link></h3>
                    </div>
                    {/* Register Form */}
                    <form action="/stylist-dashboard">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" />
                        <label className="focus-label">Name</label>
                      </div>
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" />
                        <label className="focus-label">Mobile Number</label>
                      </div>
                      <div className="form-group form-focus">
                        <input type="password" className="form-control floating" />
                        <label className="focus-label">Create Password</label>
                      </div>
                      <div className="terms-and-policy pt-2 pb-2">
                        <input type="checkbox" required name="checkbox" defaultValue="check" id="agree" /><span className="agree">I agree to these <span className="terms"><Link to="/terms-condition" target="_blank">Terms of Use</Link> and <Link to="/privacy-policy" target="_blank">Privacy Policy</Link></span></span>
                      </div>
                      <div className="text-right">
                        <Link className="forgot-link" to="/login">Already have an account?</Link>
                      </div>
                      <button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Signup</button>
                      <div className="login-or">
                        <span className="or-line" />
                        <span className="span-or">or</span>
                      </div>
                      <div className="row form-row social-login">
                        <div className="col-6">
                          <a href="#" className="btn btn-facebook btn-block"><i className="fab fa-facebook-f mr-1" /> Login</a>
                        </div>
                        <div className="col-6">
                          <a href="#" className="btn btn-google btn-block"><i className="fab fa-google mr-1" /> Login</a>
                        </div>
                      </div>
                    </form>
                    {/* /Register Form */}
                  </div>
                </div>
              </div>
              {/* /Register Content */}
            </div>
          </div>
        </div>
      </div>		
      {/* /Page Content */}
			</>
        )
    }
}
export default Register;