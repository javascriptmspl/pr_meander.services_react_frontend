import React from 'react';
import { Link } from "react-router-dom";
// Import Images
import { UserAvatar} from "../imagepath"

class Sidebar extends React.Component {
    render() {
        return (
            <>
            {/* Profile Widget */}
            <div className="card widget-profile pat-widget-profile">
                <div className="card-body">
                <div className="pro-widget-content">
                    <div className="profile-info-widget">
                    <a href="#" className="booking-pro-img">
                        <img src={UserAvatar} alt="User Image" />
                    </a>
                    <div className="profile-det-info">
                        <h3><Link to="/consultant-profile">Rex Ingram</Link></h3>
                        <div className="customer-details">
                        <h5><b>customer ID :</b> PT0016</h5>
                        <h5 className="mb-0"><i className="fas fa-map-marker-alt" /> Newyork, USA</h5>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="customer-info">
                    <ul>
                    <li>Phone <span>+1 952 001 8563</span></li>
                    <li>Age <span>38 Years, Male</span></li>
                    <li>Booking <span>Massage</span></li>
                    </ul>
                </div>
                </div>
            </div>
            {/* /Profile Widget */}
            </>
        )
    }

}
export { Sidebar };