import React from 'react';
import { Link } from "react-router-dom";
// Import Images
import {provider_thumb_02} from '../imagepath';

class StylistSidebar extends React.Component {
    render() {
        const pathname = (window.location.pathname).split("/")[2];
        return(
            <div className="profile-sidebar">
                <div className="widget-profile pro-widget-content">
                    <div className="profile-info-widget">
                        <Link to="" className="booking-pro-img">
                        <img src={provider_thumb_02} alt="User Image" />
                        </Link>
                        <div className="profile-det-info">
                        <h3>Conley Hagen</h3>
                        <div className="customer-details">
                            <h5 className="mb-0">Makeup Specialist</h5>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-widget">
                    <nav className="dashboard-menu">
                        <ul>
                        <li className={ pathname === "stylist-dashboard" ? "active" : "" }>
                            <Link to="/stylist-dashboard">
                            <i className="fas fa-columns" />
                            <span>Dashboard</span>
                            </Link>
                        </li>
                        <li className={ pathname === "appointments" ? "active" : "" }>
                            <Link to="/appointments">
                            <i className="fas fa-calendar-check" />
                            <span>Appointments</span>
                            </Link>
                        </li>
                        <li className={ pathname === "my-consultants" ? "active" : "" }>
                            <Link to="/my-consultants">
                            <i className="fas fa-user-injured" />
                            <span>My Consultants</span>
                            </Link>
                        </li>
                        <li className={ pathname === "schedule-timings" ? "active" : "" }>
                            <Link to="/schedule-timings">
                            <i className="fas fa-hourglass-start" />
                            <span>Schedule Timings</span>
                            </Link>
                        </li>
                        <li className={ pathname === "invoices" ? "active" : "" }>
                            <Link to="/invoices">
                            <i className="fas fa-file-invoice" />
                            <span>Invoices</span>
                            </Link>
                        </li>
                        <li className={ pathname === "reviews" ? "active" : "" }>
                            <Link to="/reviews">
                            <i className="fas fa-star" />
                            <span>Reviews</span>
                            </Link>
                        </li>
                        <li className={ pathname === "chat-stylist" ? "active" : "" }>
                            <Link to="/chat-stylist">
                            <i className="fas fa-comments" />
                            <span>Message</span>
                            <small className="unread-msg">23</small>
                            </Link>
                        </li>
                        <li className={ pathname === "stylist-profile-settings" ? "active" : "" }>
                            <Link to="/stylist-profile-settings">
                            <i className="fas fa-user-cog" />
                            <span>Profile Settings</span>
                            </Link>
                        </li>
                        <li className={ pathname === "social-media" ? "active" : "" }>
                            <Link to="/social-media">
                            <i className="fas fa-share-alt" />
                            <span>Social Media</span>
                            </Link>
                        </li>
                        <li className={ pathname === "stylist-change-password" ? "active" : "" }>
                            <Link to="/stylist-change-password">
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
export { StylistSidebar };