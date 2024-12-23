import React from 'react';
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
// Import Images
import { UserAvatar,provider_thumb_01,provider_thumb_02,provider_thumb_03,provider_thumb_04,
	provider_thumb_05,provider_thumb_06,provider_thumb_07,provider_thumb_08,
	provider_thumb_09,provider_thumb_10} from "../imagepath"

class CustomerProfile extends React.Component {	
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
                    <li className="breadcrumb-item active" aria-current="page">Profile</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Profile</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container">
            <div className="row">
              <div style={{marginBottom:"30px"}} className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar dct-dashbd-lft">
                {/* Profile Widget */}
                <StickyBox offsetTop={20} offsetBottom={20}>
					<div className="card widget-profile pat-widget-profile">
						<div className="card-body">
							<div className="pro-widget-content">
								<div className="profile-info-widget">
									<a href="#" className="booking-pro-img">
									<img src={UserAvatar} alt="User Image" />
									</a>
									<div className="profile-det-info">
										<h3>Rex Ingram</h3>
										<div className="customer-details">
											<h5><b>customer ID :</b> PT0016</h5>
											<h5 className="mb-0"><i className="fas fa-map-marker-alt" /> Newyork, United States</h5>
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
					{/* Last Booking */}
					<div className="card">
						<div className="card-header">
							<h4 className="card-title">Last Booking</h4>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">
							<div className="media align-items-center">
								<div className="mr-3">
								<img alt="Image placeholder" src={provider_thumb_02} className="avatar  rounded-circle" />
								</div>
								<div className="media-body">
								<h5 className="d-block mb-0">Conley Hagen </h5>
								<span className="d-block text-sm text-muted">Makeup Specialist</span>
								<span className="d-block text-sm text-muted">14 Nov 2020 5.00 PM</span>
								</div>
							</div>
							</li>
							<li className="list-group-item">
							<div className="media align-items-center">
								<div className="mr-3">
								<img alt="Image placeholder" src={provider_thumb_02} className="avatar  rounded-circle" />
								</div>
								<div className="media-body">
								<h5 className="d-block mb-0">Conley Hagen </h5>
								<span className="d-block text-sm text-muted">Makeup Specialist</span>
								<span className="d-block text-sm text-muted">12 Nov 2020 11.00 AM</span>
								</div>
							</div>
							</li>
						</ul>
					</div>
					{/* /Last Booking */}
				</StickyBox>
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9 dct-appoinment">
                <div className="card">
                  <div className="card-body pt-0">
                    <div className="user-tabs">
                      <ul className="nav nav-tabs nav-tabs-bottom nav-justified flex-wrap">
                        <li className="nav-item">
                          <a className="nav-link active" href="#pat_appointments" data-toggle="tab">Appointments</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#pres" data-toggle="tab"><span>Follow Up</span></a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#medical" data-toggle="tab"><span className="med-records">Consultant Records</span></a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#billing" data-toggle="tab"><span>Billing</span></a>
                        </li> 
                      </ul>
                    </div>
                    <div className="tab-content">
                      {/* Appointment Tab */}
                      <div id="pat_appointments" className="tab-pane fade show active">
                        <div className="card card-table mb-0">
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>Stylist</th>
                                    <th>Appt Date</th>
                                    <th>Booking Date</th>
                                    <th>Amount</th>
                                    <th>Follow Up</th>
                                    <th>Status</th>
                                    <th />
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_02} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Conley Hagen <span>Makeup</span></Link>
                                      </h2>
                                    </td>
                                    <td>14 Nov 2020 <span className="d-block text-info">10.00 AM</span></td>
                                    <td>12 Nov 2020</td>
                                    <td>$160</td>
                                    <td>16 Nov 2020</td>
                                    <td><span className="badge badge-pill bg-success-light">Confirm</span></td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-success-light">
                                          <i className="far fa-edit" /> Edit
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_02} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Conley Hagen <span>Makeup</span></Link>
                                      </h2>
                                    </td>
                                    <td>12 Nov 2020 <span className="d-block text-info">8.00 PM</span></td>
                                    <td>12 Nov 2020</td>
                                    <td>$250</td>
                                    <td>14 Nov 2020</td>
                                    <td><span className="badge badge-pill bg-success-light">Confirm</span></td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-success-light">
                                          <i className="far fa-edit" /> Edit
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_02} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Conley Hagen <span>Makeup</span></Link>
                                      </h2>
                                    </td>
                                    <td>11 Nov 2020 <span className="d-block text-info">11.00 AM</span></td>
                                    <td>10 Nov 2020</td>
                                    <td>$400</td>
                                    <td>13 Nov 2020</td>
                                    <td><span className="badge badge-pill bg-danger-light">Cancelled</span></td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-success-light">
                                          <i className="far fa-edit" /> Edit
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_02} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Conley Hagen <span>Makeup</span></Link>
                                      </h2>
                                    </td>
                                    <td>10 Nov 2020 <span className="d-block text-info">3.00 PM</span></td>
                                    <td>10 Nov 2020</td>
                                    <td>$350</td>
                                    <td>12 Nov 2020</td>
                                    <td><span className="badge badge-pill bg-warning-light">Pending</span></td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <Link to="/edit-followup" className="btn btn-sm bg-success-light">
                                          <i className="far fa-edit" /> Edit
                                        </Link>
                                        <a href="#" className="btn btn-sm bg-danger-light">
                                          <i className="far fa-trash-alt" /> Cancel
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_02} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Conley Hagen <span>Makeup</span></Link>
                                      </h2>
                                    </td>
                                    <td>9 Nov 2020 <span className="d-block text-info">7.00 PM</span></td>
                                    <td>8 Nov 2020</td>
                                    <td>$75</td>
                                    <td>11 Nov 2020</td>
                                    <td><span className="badge badge-pill bg-success-light">Confirm</span></td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-success-light">
                                          <i className="far fa-edit" /> Edit
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_02} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Conley Hagen <span>Makeup</span></Link>
                                      </h2>
                                    </td>
                                    <td>8 Nov 2020 <span className="d-block text-info">9.00 AM</span></td>
                                    <td>6 Nov 2020</td>
                                    <td>$175</td>
                                    <td>10 Nov 2020</td>
                                    <td><span className="badge badge-pill bg-danger-light">Cancelled</span></td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-success-light">
                                          <i className="far fa-edit" /> Edit
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_02} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Conley Hagen <span>Makeup</span></Link>
                                      </h2>
                                    </td>
                                    <td>8 Nov 2020 <span className="d-block text-info">6.00 PM</span></td>
                                    <td>6 Nov 2020</td>
                                    <td>$450</td>
                                    <td>10 Nov 2020</td>
                                    <td><span className="badge badge-pill bg-success-light">Confirm</span></td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-success-light">
                                          <i className="far fa-edit" /> Edit
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_02} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Conley Hagen <span>Makeup</span></Link>
                                      </h2>
                                    </td>
                                    <td>7 Nov 2020 <span className="d-block text-info">9.00 PM</span></td>
                                    <td>7 Nov 2020</td>
                                    <td>$275</td>
                                    <td>9 Nov 2020</td>
                                    <td><span className="badge badge-pill bg-info-light">Completed</span></td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-primary-light">
                                          <i className="far fa-clock" /> Reschedule
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_02} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Conley Hagen <span>Makeup</span></Link>
                                      </h2>
                                    </td>
                                    <td>6 Nov 2020 <span className="d-block text-info">8.00 PM</span></td>
                                    <td>4 Nov 2020</td>
                                    <td>$600</td>
                                    <td>8 Nov 2020</td>
                                    <td><span className="badge badge-pill bg-info-light">Completed</span></td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-primary-light">
                                          <i className="far fa-clock" /> Reschedule
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_02} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Conley Hagen <span>Makeup</span></Link>
                                      </h2>
                                    </td>
                                    <td>5 Nov 2020 <span className="d-block text-info">5.00 PM</span></td>
                                    <td>1 Nov 2020</td>
                                    <td>$100</td>
                                    <td>7 Nov 2020</td>
                                    <td><span className="badge badge-pill bg-info-light">Completed</span></td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-primary-light">
                                          <i className="far fa-clock" /> Reschedule
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Appointment Tab */}
                      {/* Follow-up Tab */}
                      <div className="tab-pane fade" id="pres">
                        <div className="text-right">
                          <Link to="/add-followup" className="add-new-btn">Add Follow-up</Link>
                        </div>
                        <div className="card card-table mb-0">
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>Date </th>
                                    <th>Name</th>									
                                    <th>Created by </th>
                                    <th />
                                  </tr>     
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>14 Nov 2020</td>
                                    <td>Follow-up 1</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_01} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Lark Enos <span>Makeup</span></Link>
                                      </h2>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="#" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>13 Nov 2020</td>
                                    <td>Follow-up 2</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_02} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Conley Hagen <span>Makeup</span></Link>
                                      </h2>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="#" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <Link to="/edit-followup" className="btn btn-sm bg-success-light">
                                          <i className="fas fa-edit" /> Edit
                                        </Link>
                                        <a href="#" className="btn btn-sm bg-danger-light">
                                          <i className="far fa-trash-alt" /> Delete
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>12 Nov 2020</td>
                                    <td>Follow-up 3</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_03} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Ermin Justus <span>Massage</span></Link>
                                      </h2>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="#" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>11 Nov 2020</td>
                                    <td>Follow-up 4</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_04} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Esmie Grier <span>Body Treatments</span></Link>
                                      </h2>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="#" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>10 Nov 2020</td>
                                    <td>Follow-up 5</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_05} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Allson Shores <span>Makeup</span></Link>
                                      </h2>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="#" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>9 Nov 2020</td>
                                    <td>Follow-up 6</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_06} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Lizy Russell <span>Eyebrow Makeup</span></Link>
                                      </h2>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="#" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>8 Nov 2020</td>
                                    <td>Follow-up 7</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_07} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Fayda Cates <span>Body Treatments</span></Link>
                                      </h2>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="#" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>7 Nov 2020</td>
                                    <td>Follow-up 8</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_08} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Elek Keating<span>Eye Makeup</span></Link>
                                      </h2>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="#" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>6 Nov 2020</td>
                                    <td>Follow-up 9</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_09} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Achiram Jacobs <span>Makeup</span></Link>
                                      </h2>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="#" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>5 Nov 2020</td>
                                    <td>Follow-up 10</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_10} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Ade Bills <span>Makeup</span></Link>
                                      </h2>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="#" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>	
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Follow-up Tab */}
                      {/* Consultant Records Tab */}
                      <div className="tab-pane fade" id="medical">
                        <div className="text-right">		
                          <a href="#" className="add-new-btn" data-toggle="modal" data-target="#add_medical_records">Add Consultant Records</a>
                        </div>
                        <div className="card card-table mb-0">
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>ID</th>
                                    <th>Date </th>
                                    <th>Description</th>
                                    <th>Created</th>
                                    <th />
                                  </tr>     
                                </thead>
                                <tbody>
                                  <tr>
                                    <td><a href="#">#MR-0010</a></td>
                                    <td>14 Nov 2020</td>
                                    <td>Makeup Artist</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_01} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Lark Enos <span>Makeup</span></Link>
                                      </h2>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="#" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><a href="#">#MR-0009</a></td>
                                    <td>13 Nov 2020</td>
                                    <td>Hair Stylist</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_02} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Conley Hagen <span>Makeup</span></Link>
                                      </h2>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="#" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <Link to="/edit-followup" className="btn btn-sm bg-success-light" data-toggle="modal" data-target="#add_medical_records">
                                          <i className="fas fa-edit" /> Edit
                                        </Link>
                                        <a href="#" className="btn btn-sm bg-danger-light">
                                          <i className="far fa-trash-alt" /> Delete
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><a href="#">#MR-0008</a></td>
                                    <td>12 Nov 2020</td>
                                    <td>Eyebrow Threading</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_03} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Ermin Justus <span>Massage</span></Link>
                                      </h2>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="#" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><a href="#">#MR-0007</a></td>
                                    <td>11 Nov 2020</td>
                                    <td>Hairdressing</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_04} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Esmie Grier <span>Body Treatments</span></Link>
                                      </h2>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="#" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><a href="#">#MR-0006</a></td>
                                    <td>10 Nov 2020</td>
                                    <td>Chic Cut</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_05} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Allson Shores <span>Barber</span></Link>
                                      </h2>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="#" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><a href="#">#MR-0005</a></td>
                                    <td>9 Nov 2020</td>
                                    <td>Facial</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_06} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Lizy Russell <span>Eyebrow Makeup</span></Link>
                                      </h2>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="#" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><a href="#">#MR-0004</a></td>
                                    <td>8 Nov 2020</td>
                                    <td>Acne Treatment</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_07} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Fayda Cates <span>Body Treatments</span></Link>
                                      </h2>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="#" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><a href="#">#MR-0003</a></td>
                                    <td>7 Nov 2020</td>
                                    <td>Waxing</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_08} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Elek Keating<span>Eye Makeup</span></Link>
                                      </h2>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="#" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><a href="#">#MR-0002</a></td>
                                    <td>6 Nov 2020</td>
                                    <td>Aromatherapy</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_09} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Achiram Jacobs <span>Makeup</span></Link>
                                      </h2>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="#" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><a href="#">#MR-0001</a></td>
                                    <td>5 Nov 2020</td>
                                    <td>Makeup Artist</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_10} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Ade Bills <span>Makeup</span></Link>
                                      </h2>
                                    </td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="#" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>  	
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Consultant Records Tab */}
                      {/* Billing Tab */}
                      <div className="tab-pane" id="billing">
                        <div className="text-right">
                          <Link className="add-new-btn" to="/add-billing">Add Billing</Link>
                        </div>
                        <div className="card card-table mb-0">
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>Invoice No</th>
                                    <th>Stylist</th>
                                    <th>Amount</th>
                                    <th>Paid On</th>
                                    <th />
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <Link to="/invoice-view">#INV-0010</Link>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_01} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Lark Enos <span>Makeup</span></Link>
                                      </h2>
                                    </td>
                                    <td>$450</td>
                                    <td>14 Nov 2020</td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="#" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="/invoice-view">#INV-0009</Link>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_02} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Conley Hagen <span>Makeup</span></Link>
                                      </h2>
                                    </td>
                                    <td>$300</td>
                                    <td>13 Nov 2020</td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="#" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <Link to="/edit-billing" className="btn btn-sm bg-success-light">
                                          <i className="fas fa-edit" /> Edit
                                        </Link>
                                        <a href="#" className="btn btn-sm bg-danger-light">
                                          <i className="far fa-trash-alt" /> Delete
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="/invoice-view">#INV-0008</Link>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_03} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Ermin Justus <span>Massage</span></Link>
                                      </h2>
                                    </td>
                                    <td>$150</td>
                                    <td>12 Nov 2020</td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="#" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="/invoice-view">#INV-0007</Link>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_04} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Esmie Grier <span>Body Treatments</span></Link>
                                      </h2>
                                    </td>
                                    <td>$50</td>
                                    <td>11 Nov 2020</td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="#" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="/invoice-view">#INV-0006</Link>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_05} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Allson Shores <span>Barber</span></Link>
                                      </h2>
                                    </td>
                                    <td>$600</td>
                                    <td>10 Nov 2020</td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="#" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="/invoice-view">#INV-0005</Link>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_06} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Lizy Russell <span>Eyebrow Makeup</span></Link>
                                      </h2>
                                    </td>
                                    <td>$200</td>
                                    <td>9 Nov 2020</td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="#" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="/invoice-view">#INV-0004</Link>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_07} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Fayda Cates <span>Body Treatments</span></Link>
                                      </h2>
                                    </td>
                                    <td>$100</td>
                                    <td>8 Nov 2020</td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="#" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="/invoice-view">#INV-0003</Link>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_08} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Elek Keating<span>Eye Makeup</span></Link>
                                      </h2>
                                    </td>
                                    <td>$250</td>
                                    <td>7 Nov 2020</td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="#" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="/invoice-view">#INV-0002</Link>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_09} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Achiram Jacobs <span>Makeup</span></Link>
                                      </h2>
                                    </td>
                                    <td>$175</td>
                                    <td>6 Nov 2020</td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="#" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="/invoice-view">#INV-0001</Link>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_10} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Ade Bills <span>#0010</span></Link>
                                      </h2>
                                    </td>
                                    <td>$550</td>
                                    <td>5 Nov 2020</td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="#" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="#" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Billing Tab */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>		
        {/* /Page Content */}
          {/* Add Consultant Records Modal */}
      <div className="modal fade custom-modal" id="add_medical_records">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Consultant Records</h3>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            </div>
            <form>					
              <div className="modal-body">
                <div className="form-group">
                  <label>Date</label>
                  <input type="text" className="form-control datetimepicker" defaultValue="31-10-2020" />
                </div>
                <div className="form-group">
                  <label>Description ( Optional )</label>
                  <textarea className="form-control" defaultValue={""} />
                </div>
                <div className="form-group">
                  <label>Upload File</label> 
                  <input type="file" className="form-control" />
                </div>	
                <div className="submit-section text-center">
                  <button type="submit" className="btn btn-primary submit-btn">Submit</button>
                  <button type="button" className="btn btn-secondary submit-btn" data-dismiss="modal">Cancel</button>							
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Consultant Records Modal */}
			</>
        )
    }
}
export default CustomerProfile;