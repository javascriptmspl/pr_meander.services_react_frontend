import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Beicon,Logosmall,Logo } from '../imagepath';

class Header extends Component {
  componentDidMount(){
    $('.main-nav a').on('click', function(e) {
			if($(this).parent().hasClass('has-submenu')) {
				e.preventDefault();
			}
			if(!$(this).hasClass('submenu')) {
				$('ul', $(this).parents('ul:first')).slideUp(350);
				$('a', $(this).parents('ul:first')).removeClass('submenu');
				$(this).next('ul').slideDown(350);
				$(this).addClass('submenu');
			} else if($(this).hasClass('submenu')) {
				$(this).removeClass('submenu');
				$(this).next('ul').slideUp(350);
			}
		});
  }
  // Input Show on Header
  showIp() {
    var element = document.getElementById("showForm");
    element.classList.toggle("formShow");
}
  render() {    
    const pathname = this.props.location.pathname.split("/")[1];
    return (
      <header className="header">
        <div className="top-header min">
          <div className="container-fluid">
            <div className="row justify-content-between align-items-center">
              <div className="col-12 col-md-4">
                <div className="left">
                  <ul>
                    <li className="nav-item dropdown has-arrow main-drop">
                      <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown"> USD
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="">INR</a> 
                        <a className="dropdown-item" href="">EURO</a>
                      </div>
                    </li>
                    <li className="nav-item dropdown has-arrow main-drop">
                      <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown"> ENGLISH
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="">GERMAN</a> 
                        <a className="dropdown-item" href="">FRENCH</a>
                        <a className="dropdown-item" href="">CHINESE</a>
                      </div>
                    </li>
                  </ul>									
                </div>
              </div>
              <div className="col-12 col-md-4">
                <h3 className="offer-text">GET OFFER UPTO <span>25%</span> ON FIRST BOOKINGS</h3>
              </div>
              <div className="col-12 col-md-4">
                <div className="right">
                  <ul>
                    <li>
                      <div className="social-icon mr-3">
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
                    </li>
                    <li>
                      <Link className="nav-link header-login" to="/login"><i className="far fa-user" /> Login / Signup </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <a id="mobile_btn" href="">
              <span className="bar-icon">
                <span />
                <span />
                <span />
              </span>
            </a>
            <Link to="/" className="navbar-brand logo">
              <img src={Logo} className="img-fluid" alt="Logo" />
            </Link>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <Link to="/" className="menu-logo">
                <img src={Logosmall} className="img-fluid" alt="Logo" />
              </Link>
              <a id="menu_close" className="menu-close" href="">
                <i className="fas fa-times" />
              </a>
            </div>
            <ul className="main-nav">
              <li className={pathname === "" || pathname==="" ? "active" : ""}>
                <Link to="/">Home</Link>
              </li>
              <li className={`has-submenu ${pathname === ('stylist-dashboard') ? 'active' : 
                    pathname === ('appointments') ? 'active' : pathname === ('schedule-timings') ? 'active' : 
                    pathname === ('my-consultants') ? 'active' : pathname === ('consultant-profile') ? 'active' : 
                    pathname === ('chat-stylist') ? 'active' : pathname === ('stylist-profile-settings') ? 'active' : 
                    pathname === ('reviews') ? 'active': pathname === ('invoices') ? 'active' : pathname === ('stylist-register') ? 'active'
                    : pathname === ('social-media') ? 'active' : pathname === ('stylist-change-password') ? 'active' : ''}`}>
                <a href="">Our Stylists <i className="fas fa-chevron-down" /></a>
                <ul className="submenu">
                  <li className={pathname === "stylist-dashboard" ? "active" : ""}><Link to="/stylist-dashboard">Stylists Dashboard</Link></li>
                  <li className={pathname === "appointments" ? "active" : ""}><Link to="/appointments">Appointments</Link></li>
                  <li className={pathname === "schedule-timings" ? "active" : ""}><Link to="/schedule-timings">Schedule Timing</Link></li>
                  <li className={pathname === "my-consultants" ? "active" : ""}><Link to="/my-consultants">Consultants List</Link></li>
                  <li className={pathname === "consultant-profile" ? "active" : ""}><Link to="/consultant-profile">Consultants Profile</Link></li>
                  <li className={pathname === "chat-stylist" ? "active" : ""}><Link to="/chat-stylist">Chat</Link></li>
                  <li className={pathname === "invoices" ? "active" : ""}><Link to="/invoices">Invoices</Link></li>
                  <li className={pathname === "stylist-profile-settings" ? "active" : ""}><Link to="/stylist-profile-settings">Profile Settings</Link></li>
                  <li className={pathname === "reviews" ? "active" : ""}><Link to="/reviews">Reviews</Link></li>
                  <li className={pathname === "stylist-register" ? "active" : ""}><Link to="/stylist-register">Stylists Register</Link></li>
                </ul>
              </li>	
              <li className={`has-submenu ${pathname === ('map-grid') ? 'active' : pathname === ('map-list') ? 'active'
               : pathname === ('search') ? 'active' : pathname === ('stylist-profile') ? 'active' : 
               pathname === ('booking') ? 'active' : pathname === ('checkout') ? 'active' : 
               pathname === ('booking-success') ? 'active' : pathname === ('consultant-dashboard') ? 'active' :
                pathname === ('favourites') ? 'active' : pathname === ('chat') ? 'active' : 
                pathname === ('profile-settings') ? 'active' : pathname === ('change-password') ? 'active' : ''}`}>
                <a href="">Consultants <i className="fas fa-chevron-down" /></a>
                <ul className="submenu">
                  <li className={`has-submenu ${pathname === ('map-grid') ? 'active' : pathname === ('map-list') ? 'active' :  ''}`}>
                    <a href="#">Stylists</a>
                    <ul className="submenu">
                      <li className={pathname === "map-grid" ? "active" : ""}><Link to="/map-grid">Map Grid</Link></li>
                      <li className={pathname === "map-list" ? "active" : ""}><Link to="/map-list">Map List</Link></li>
                    </ul>
                  </li>
                  <li className={pathname === "search" ? "active" : ""}><Link to="/search">Search Stylists</Link></li>
                  <li className={pathname === "stylist-profile" ? "active" : ""}><Link to="/stylist-profile">Stylists Profile</Link></li>
                  <li className={pathname === "booking" ? "active" : ""}><Link to="/booking">Booking</Link></li>
                  <li className={pathname === "checkout" ? "active" : ""}><Link to="/checkout">Checkout</Link></li>
                  <li className={pathname === "booking-success" ? "active" : ""}><Link to="/booking-success">Booking Success</Link></li>
                  <li className={pathname === "consultant-dashboard" ? "active" : ""}><Link to="/consultant-dashboard">Consultants Dashboard</Link></li>
                  <li className={pathname === "favourites" ? "active" : ""}><Link to="/favourites">Favourites</Link></li>
                  <li className={pathname === "chat" ? "active" : ""}><Link to="/chat">Chat</Link></li>
                  <li className={pathname === "profile-settings" ? "active" : ""}><Link to="/profile-settings">Profile Settings</Link></li>
                  <li className={pathname === "change-password" ? "active" : ""}><Link to="/change-password">Change Password</Link></li>
                </ul>
              </li>	
              <li className={`has-submenu ${pathname === ('voice-call') ? 'active' : pathname === ('video-call') 
              ? 'active' : pathname === ('calendar') ? 'active' : pathname === ('components') ? 'active' : 
              pathname === ('invoice-view') ? 'active' :
               pathname === ('blank-page') ? 'active' : pathname === ('login') ? 'active' : 
               pathname === ('register') ? 'active' : pathname === ('forgot-password') ? 'active' : '' }`}>
                <a href="">Pages <i className="fas fa-chevron-down" /></a>
                <ul className="submenu">
                  <li className={pathname === "voice-call" ? "active" : ""}><Link to="/voice-call">Voice Call</Link></li>
                  <li className={pathname === "video-call" ? "active" : ""}><Link to="/video-call">Video Call</Link></li>
                  <li className={pathname === "search" ? "active" : ""}><Link to="/search">Search Stylists</Link></li>
                  <li className={pathname === "calendar" ? "active" : ""}><Link to="/calendar">Calendar</Link></li>
                  <li className={pathname === "components" ? "active" : ""}><Link to="/components">Components</Link></li>
                  <li className={`has-submenu ${pathname === ('invoice-view') ? 'active' : ''}`}>
                    <Link to="/invoices">Invoices</Link>
                    <ul className="submenu">
                      <li className={pathname === "invoices" ? "active" : ""}><Link to="/invoices">Invoices</Link></li>
                      <li className={pathname === "invoice-view" ? "active" : ""}><Link to="/invoice-view">Invoice View</Link></li>
                    </ul>
                  </li>
                  <li className={pathname === "blank-page" ? "active" : ""}><Link to="/blank-page">Starter Page</Link></li>
                  <li className={pathname === "login" ? "active" : ""}><Link to="/login">Login</Link></li>
                  <li className={pathname === "register" ? "active" : ""}><Link to="/register">Register</Link></li>
                  <li className={pathname === "forgot-password" ? "active" : ""}><Link to="/forgot-password">Forgot Password</Link></li>
                </ul>
              </li>
              <li className={`has-submenu ${pathname === ('blog-list') ? 'active' : pathname === ('blog-grid') ? 'active' : pathname === ('blog-details') ? 'active' : ''}`}>
                <a href="">Blog <i className="fas fa-chevron-down" /></a>
                <ul className="submenu">
                  <li className={pathname === "blog-list" ? "active" : ""}><Link to="/blog-list">Blog List</Link></li>
                  <li className={pathname === "blog-grid" ? "active" : ""}><Link to="/blog-grid">Blog Grid</Link></li>
                  <li className={pathname === "blog-details" ? "active" : ""}><Link to="/blog-details">Blog Details</Link></li>
                </ul>
              </li>
              <li className="login-link">
                <Link to="/login">Login / Signup</Link>
              </li>
            </ul>		 
          </div>		 
          <ul className="nav header-navbar-rht">
            <li className="nav-item contact-item">								
              <i className="fas fa-search" onClick={()=>this.showIp()} />
              <form id="showForm">
                <input type="text" placeholder="Search" />
              </form>
            </li>
            <li className="nav-item contact-item">
              <Link to="/booking" className="header-contact-img">
                <img src={Beicon} alt="mic" />							
              </Link>
              <Link to="/booking" className="header-contact-detail">
                <p className="contact-header">Your Bookings</p>
                <p className="contact-info-header"> $400</p>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
