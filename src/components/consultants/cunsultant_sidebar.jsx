import React from 'react';
import { Link } from "react-router-dom";
// Import Images
import {UserAvatar} from '../imagepath';

class Consultantsidebar extends React.Component {
    render() {
        const pathname = (window.location.pathname).split("/")[2];
        return(
            <div className="profile-sidebar">
            <div className="widget-profile pro-widget-content">
              <div className="profile-info-widget">
                <a href="#" className="booking-pro-img">
                  <img src={UserAvatar} alt="User Image" />
                </a>
                <div className="profile-det-info">
                  <h3>Rex Ingram</h3>
                  <div className="customer-details">
                    <h5><i className="fas fa-birthday-cake" /> 24 Jul 1983, 38 years</h5>
                    <h5 className="mb-0"><i className="fas fa-map-marker-alt" /> Newyork, USA</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-widget">
              <nav className="dashboard-menu">
                <ul>
                  <li className={ pathname === "consultant-dashboard" ? "active" : "" }>
                    <Link to="/consultant-dashboard">
                      <i className="fas fa-columns" />
                      <span>Dashboard</span>
                    </Link>
                  </li>
                  <li className={ pathname === "favourites" ? "active" : "" }>
                    <Link to="favourites">
                      <i className="fas fa-bookmark" />
                      <span>Favourites</span>
                    </Link>
                  </li>
                  <li className={ pathname === "chat" ? "active" : "" }>
                    <Link to="chat">
                      <i className="fas fa-comments" />
                      <span>Message</span>
                      <small className="unread-msg">23</small>
                    </Link>
                  </li>
                  <li className={ pathname === "profile-settings" ? "active" : "" }>
                    <Link to="/profile-settings">
                      <i className="fas fa-user-cog" />
                      <span>Profile Settings</span>
                    </Link>
                  </li>
                  <li className={ pathname === "change-password" ? "active" : "" }>
                    <Link to="/change-password">
                      <i className="fas fa-lock" />
                      <span>Change Password</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fas fa-sign-out-alt" />
                      <span>Logout</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
            )
    }
}
export { Consultantsidebar };