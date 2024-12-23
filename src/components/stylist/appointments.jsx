import React from 'react';
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
// Import Sidebar
import { StylistSidebar } from './stylist_sidebar';
// Import Images
import {UserAvatar,UserAvatar1,UserAvatar2,UserAvatar3,UserAvatar4,UserAvatar5,
	UserAvatar6,UserAvatar7,UserAvatar8,UserAvatar9,UserAvatar10,UserAvatar11} from "../imagepath"

class Appointments extends React.Component {
	
    render() {
        return (
			<>
			 {/* Breadcrumb */}
			 <div className="breadcrumb-bar">
				<div className="container-fluid">
					<div className="row align-items-center">
					<div className="col-md-12 col-12">
						<nav aria-label="breadcrumb" className="page-breadcrumb">
						<ol className="breadcrumb">
							<li className="breadcrumb-item"><Link to="/">Home</Link></li>
							<li className="breadcrumb-item active" aria-current="page">Appointments</li>
						</ol>
						</nav>
						<h2 className="breadcrumb-title">Appointments</h2>
					</div>
					</div>
				</div>
			</div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                {/* Profile Sidebar */}
                <StickyBox offsetTop={20} offsetBottom={20}>
					        <StylistSidebar/>
                </StickyBox>				
                {/* /Profile Sidebar */}
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="appointments">
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <Link to="/consultant-profile" className="booking-pro-img">
                        <img src={UserAvatar} alt="User Image" />
                      </Link>
                      <div className="profile-det-info">
                        <h3><Link to="/consultant-profile">Rex Ingram</Link></h3>
                        <div className="customer-details">
                          <h5><i className="far fa-clock" /> 14 Nov 2020, 10.00 AM</h5>
                          <h5><i className="fas fa-map-marker-alt" /> Newyork, United States</h5>
                          <h5><i className="fas fa-envelope" /> rex@example.com</h5>
                          <h5 className="mb-0"><i className="fas fa-phone" /> +1 923 782 4575</h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a href="" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                        <i className="far fa-eye" /> View
                      </a>
                      <a href="" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a href="" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <Link to="/consultant-profile" className="booking-pro-img">
                        <img src={UserAvatar1} alt="User Image" />
                      </Link>
                      <div className="profile-det-info">
                        <h3><Link to="/consultant-profile">Faviola Stegall </Link></h3>
                        <div className="customer-details">
                          <h5><i className="far fa-clock" /> 12 Nov 2020, 5.00 PM</h5>
                          <h5><i className="fas fa-map-marker-alt" /> North Carolina, United States</h5>
                          <h5><i className="fas fa-envelope" /> faviolastegall@example.com</h5>
                          <h5 className="mb-0"><i className="fas fa-phone" /> +1 828 632 9170</h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                        <i className="far fa-eye" /> View
                      </a>
                      <a href="" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a href="" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <Link to="/consultant-profile" className="booking-pro-img">
                        <img src={UserAvatar2} alt="User Image" />
                      </Link>
                      <div className="profile-det-info">
                        <h3><Link to="/consultant-profile">Knud Zhang</Link></h3>
                        <div className="customer-details">
                          <h5><i className="far fa-clock" /> 11 Nov 2020, 8.00 PM</h5>
                          <h5><i className="fas fa-map-marker-alt" /> Maine, United States</h5>
                          <h5><i className="fas fa-envelope" /> knudzhang@example.com</h5>
                          <h5 className="mb-0"><i className="fas fa-phone" /> +1 207 729 9974</h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                        <i className="far fa-eye" /> View
                      </a>
                      <a href="" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a href="" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <Link to="/consultant-profile" className="booking-pro-img">
                        <img src={UserAvatar3} alt="User Image" />
                      </Link>
                      <div className="profile-det-info">
                        <h3><Link to="/consultant-profile">Aloysius Selby</Link></h3>
                        <div className="customer-details">
                          <h5><i className="far fa-clock" /> 9 Nov 2020, 9.00 AM</h5>
                          <h5><i className="fas fa-map-marker-alt" /> Newyork, United States</h5>
                          <h5><i className="fas fa-envelope" /> aloysiusselby@example.com</h5>
                          <h5 className="mb-0"><i className="fas fa-phone" /> +1 260 724 7769</h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                        <i className="far fa-eye" /> View
                      </a>
                      <a href="" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a href="" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <Link to="/consultant-profile" className="booking-pro-img">
                        <img src={UserAvatar4} alt="User Image" />
                      </Link>
                      <div className="profile-det-info">
                        <h3><Link to="/consultant-profile">Cacie Helms</Link></h3>
                        <div className="customer-details">
                          <h5><i className="far fa-clock" /> 9 Nov 2020, 1.00 PM</h5>
                          <h5><i className="fas fa-map-marker-alt" /> Indiana, United States</h5>
                          <h5><i className="fas fa-envelope" /> caciehelms@example.com</h5>
                          <h5 className="mb-0"><i className="fas fa-phone" /> +1 504 368 6874</h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                        <i className="far fa-eye" /> View
                      </a>
                      <a href="" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a href="" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <Link to="/consultant-profile" className="booking-pro-img">
                        <img src={UserAvatar5} alt="User Image" />
                      </Link>
                      <div className="profile-det-info">
                        <h3><Link to="/consultant-profile">Jey Munson</Link></h3>
                        <div className="customer-details">
                          <h5><i className="far fa-clock" /> 8 Nov 2020, 3.00 PM</h5>
                          <h5><i className="fas fa-map-marker-alt" /> Florida, United States</h5>
                          <h5><i className="fas fa-envelope" /> jeymunson@example.com</h5>
                          <h5 className="mb-0"><i className="fas fa-phone" /> +1 954 820 7887</h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                        <i className="far fa-eye" /> View
                      </a>
                      <a href="" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a href="" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <Link to="/consultant-profile" className="booking-pro-img">
                        <img src={UserAvatar6} alt="User Image" />
                      </Link>
                      <div className="profile-det-info">
                        <h3><Link to="/consultant-profile">Calandra Geer</Link></h3>
                        <div className="customer-details">
                          <h5><i className="far fa-clock" /> 6 Nov 2020, 9.00 AM</h5>
                          <h5><i className="fas fa-map-marker-alt" /> Kentucky, United States</h5>
                          <h5><i className="fas fa-envelope" /> calandrageer@example.com</h5>
                          <h5 className="mb-0"><i className="fas fa-phone" /> +1 315 384 4562</h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                        <i className="far fa-eye" /> View
                      </a>
                      <a href="" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a href="" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <Link to="/consultant-profile" className="booking-pro-img">
                        <img src={UserAvatar7} alt="User Image" />
                      </Link>
                      <div className="profile-det-info">
                        <h3><Link to="/consultant-profile">Lynea Skipper</Link></h3>
                        <div className="customer-details">
                          <h5><i className="far fa-clock" /> 5 Nov 2020, 12.00 PM</h5>
                          <h5><i className="fas fa-map-marker-alt" /> California, United States</h5>
                          <h5><i className="fas fa-envelope" /> lyneaskipper@example.com</h5>
                          <h5 className="mb-0"><i className="fas fa-phone" /> +1 707 2202 603</h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                        <i className="far fa-eye" /> View
                      </a>
                      <a href="" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a href="" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <Link to="/consultant-profile" className="booking-pro-img">
                        <img src={UserAvatar8} alt="User Image" />
                      </Link>
                      <div className="profile-det-info">
                        <h3><Link to="/consultant-profile">Tan Staley</Link></h3>
                        <div className="customer-details">
                          <h5><i className="far fa-clock" /> 5 Nov 2020, 7.00 PM</h5>
                          <h5><i className="fas fa-map-marker-alt" /> New Jersey, United States</h5>
                          <h5><i className="fas fa-envelope" /> tanstaley@example.com</h5>
                          <h5 className="mb-0"><i className="fas fa-phone" /> +1 973 773 9497</h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                        <i className="far fa-eye" /> View
                      </a>
                      <a href="" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a href="" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <Link to="/consultant-profile" className="booking-pro-img">
                        <img src={UserAvatar9} alt="User Image" />
                      </Link>
                      <div className="profile-det-info">
                        <h3><Link to="/consultant-profile">Jemario Babb</Link></h3>
                        <div className="customer-details">
                          <h5><i className="far fa-clock" /> 4 Nov 2020, 10.00 AM</h5>
                          <h5><i className="fas fa-map-marker-alt" /> Florida, United States</h5>
                          <h5><i className="fas fa-envelope" /> jemariobabb@example.com</h5>
                          <h5 className="mb-0"><i className="fas fa-phone" /> +1 850 358 4445</h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                        <i className="far fa-eye" /> View
                      </a>
                      <a href="" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a href="" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <Link to="/consultant-profile" className="booking-pro-img">
                        <img src={UserAvatar10} alt="User Image" />
                      </Link>
                      <div className="profile-det-info">
                        <h3><Link to="/consultant-profile">Fredric Dalton</Link></h3>
                        <div className="customer-details">
                          <h5><i className="far fa-clock" /> 4 Nov 2020, 11.00 AM</h5>
                          <h5><i className="fas fa-map-marker-alt" /> California, United States</h5>
                          <h5><i className="fas fa-envelope" /> fredricdalton@example.com</h5>
                          <h5 className="mb-0"><i className="fas fa-phone" /> +1 858 259 5285</h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                        <i className="far fa-eye" /> View
                      </a>
                      <a href="" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a href="" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <Link to="/consultant-profile" className="booking-pro-img">
                        <img src={UserAvatar11} alt="User Image" />
                      </Link>
                      <div className="profile-det-info">
                        <h3><Link to="/consultant-profile">Gilburt Pacheco</Link></h3>
                        <div className="customer-details">
                          <h5><i className="far fa-clock" /> 3 Nov 2020, 6.00 PM</h5>
                          <h5><i className="fas fa-map-marker-alt" /> Colorado, United States</h5>
                          <h5><i className="fas fa-envelope" /> gilburtpacheco@example.com</h5>
                          <h5 className="mb-0"><i className="fas fa-phone" /> +1 303 607 7075</h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                        <i className="far fa-eye" /> View
                      </a>
                      <a href="" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check" /> Accept
                      </a>
                      <a href="" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times" /> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                </div>
              </div>
            </div>
          </div>
        </div>		
        {/* /Page Content */}
			</>
        )
    }
}
export default Appointments;