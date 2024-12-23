import React, { Component } from "react";
import { Link } from "react-router-dom";
// Import Sidebar
import { StylistSidebar } from './stylist_sidebar';
// Import Images
import {ImgIcon1,ImgIcon2,ImgIcon3,UserAvatar,UserAvatar1,UserAvatar2,UserAvatar3,UserAvatar4,UserAvatar5,
	UserAvatar6,UserAvatar7,UserAvatar8,UserAvatar9,UserAvatar10,UserAvatar11} from "../imagepath"

class StylistDashboard extends Component {
	
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
							<li className="breadcrumb-item active" aria-current="page">Dashboard</li>
						</ol>
						</nav>
						<h2 className="breadcrumb-title">Dashboard</h2>
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
				  <StylistSidebar/>
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card dash-card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-12 col-lg-4">
                            <div className="dash-widget dct-border-rht">
                              <div className="circle-wrap">
                                <div className="circle-bar">
                                  <img src={ImgIcon1} className="img-fluid" alt="customer" />
                                </div>
                              </div>
                              <div className="dash-widget-info">
                                <h6>Total Consultant</h6>
                                <h3>1500</h3>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12 col-lg-4">
                            <div className="dash-widget dct-border-rht">
                              <div className="circle-wrap">
                                <div className="circle-bar">
                                  <img src={ImgIcon2} className="img-fluid" alt="customer" />
                                </div>
                              </div>
                              <div className="dash-widget-info">
                                <h6>Today Consultant</h6>
                                <h3>160</h3>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12 col-lg-4">
                            <div className="dash-widget">
                              <div className="circle-wrap">
                                <div className="circle-bar">
                                  <img src={ImgIcon3} className="img-fluid" alt="customer" />
                                </div>
                              </div>
                              <div className="dash-widget-info">
                                <h6>Appoinments</h6>
                                <h3>85</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <h4 className="mb-4">Consultants Appoinment</h4>
                    <div className="appointment-tab">
                      {/* Appointment Tab */}
                      <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
                        <li className="nav-item">
                          <a className="nav-link active" href="#upcoming-appointments" data-toggle="tab">Upcoming</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#today-appointments" data-toggle="tab">Today</a>
                        </li> 
                      </ul>
                      {/* /Appointment Tab */}
                      <div className="tab-content">
                        {/* Upcoming Appointment Tab */}
                        <div className="tab-pane show active" id="upcoming-appointments">
                          <div className="card card-table mb-0">
                            <div className="card-body">
                              <div className="table-responsive">
                                <table className="table table-hover table-center mb-0">
                                  <thead>
                                    <tr>
                                      <th>Consultants Name</th>
                                      <th>Appt Date</th>
                                      <th>Purpose</th>
                                      <th>Type</th>
                                      <th className="text-center">Paid Amount</th>
                                      <th />
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/consultant-profile" className="avatar avatar-sm mr-2">
											  <img className="avatar-img rounded-circle" src={UserAvatar} alt="User Image" /></Link>
                                          <Link to="/consultant-profile">Rex Ingram <span>#PT0016</span></Link>
                                        </h2>
                                      </td>
                                      <td>11 Nov 2020 <span className="d-block text-info">10.00 AM</span></td>
                                      <td>Hair Treatment</td>
                                      <td>New Consultant</td>
                                      <td className="text-center">$150</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a href="" className="btn btn-sm bg-info-light">
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a href="" className="btn btn-sm bg-success-light">
                                            <i className="fas fa-check" /> Accept
                                          </a>
                                          <a href="" className="btn btn-sm bg-danger-light">
                                            <i className="fas fa-times" /> Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/consultant-profile" className="avatar avatar-sm mr-2">
											  <img className="avatar-img rounded-circle" src={UserAvatar1} alt="User Image" /></Link>
                                          <Link to="/consultant-profile">Faviola Stegall <span>#PT0001</span></Link>
                                        </h2>
                                      </td>
                                      <td>3 Nov 2020 <span className="d-block text-info">11.00 AM</span></td>
                                      <td>Hair Treatment</td>
                                      <td>Old Consultant</td>
                                      <td className="text-center">$200</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a href="" className="btn btn-sm bg-info-light">
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a href="" className="btn btn-sm bg-success-light">
                                            <i className="fas fa-check" /> Accept
                                          </a>
                                          <a href="" className="btn btn-sm bg-danger-light">
                                            <i className="fas fa-times" /> Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/consultant-profile" className="avatar avatar-sm mr-2">
											  <img className="avatar-img rounded-circle" src={UserAvatar2} alt="User Image" /></Link>
                                          <Link to="/consultant-profile">Knud Zhang  <span>#PT0002</span></Link>
                                        </h2>
                                      </td>
                                      <td>1 Nov 2020 <span className="d-block text-info">1.00 PM</span></td>
                                      <td>Hair Treatment</td>
                                      <td>New Consultant</td>
                                      <td className="text-center">$75</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a href="" className="btn btn-sm bg-info-light">
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a href="" className="btn btn-sm bg-success-light">
                                            <i className="fas fa-check" /> Accept
                                          </a>
                                          <a href="" className="btn btn-sm bg-danger-light">
                                            <i className="fas fa-times" /> Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/consultant-profile" className="avatar avatar-sm mr-2">
											  <img className="avatar-img rounded-circle" src={UserAvatar3} alt="User Image" /></Link>
                                          <Link to="/consultant-profile">Aloysius Selby <span>#PT0003</span></Link>
                                        </h2>
                                      </td>
                                      <td>30 Oct 2020 <span className="d-block text-info">9.00 AM</span></td>
                                      <td>Hair Treatment</td>
                                      <td>Old Consultant</td>
                                      <td className="text-center">$100</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a href="" className="btn btn-sm bg-info-light">
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a href="" className="btn btn-sm bg-success-light">
                                            <i className="fas fa-check" /> Accept
                                          </a>
                                          <a href="" className="btn btn-sm bg-danger-light">
                                            <i className="fas fa-times" /> Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/consultant-profile" className="avatar avatar-sm mr-2">
											  <img className="avatar-img rounded-circle" src={UserAvatar4} alt="User Image" /></Link>
                                          <Link to="/consultant-profile">Cacie Helms <span>#PT0004</span></Link>
                                        </h2>
                                      </td>
                                      <td>28 Oct 2020 <span className="d-block text-info">6.00 PM</span></td>
                                      <td>Hair Treatment</td>
                                      <td>New Consultant</td>
                                      <td className="text-center">$350</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a href="" className="btn btn-sm bg-info-light">
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a href="" className="btn btn-sm bg-success-light">
                                            <i className="fas fa-check" /> Accept
                                          </a>
                                          <a href="" className="btn btn-sm bg-danger-light">
                                            <i className="fas fa-times" /> Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/consultant-profile" className="avatar avatar-sm mr-2">
											  <img className="avatar-img rounded-circle" src={UserAvatar5} alt="User Image" /></Link>
                                          <Link to="/consultant-profile">Jey Munson <span>#PT0005</span></Link>
                                        </h2>
                                      </td>
                                      <td>27 Oct 2020 <span className="d-block text-info">8.00 AM</span></td>
                                      <td>Hair Treatment</td>
                                      <td>Old Consultant</td>
                                      <td className="text-center">$250</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a href="" className="btn btn-sm bg-info-light">
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a href="" className="btn btn-sm bg-success-light">
                                            <i className="fas fa-check" /> Accept
                                          </a>
                                          <a href="" className="btn btn-sm bg-danger-light">
                                            <i className="fas fa-times" /> Cancel
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
                        {/* /Upcoming Appointment Tab */}
                        {/* Today Appointment Tab */}
                        <div className="tab-pane" id="today-appointments">
                          <div className="card card-table mb-0">
                            <div className="card-body">
                              <div className="table-responsive">
                                <table className="table table-hover table-center mb-0">
                                  <thead>
                                    <tr>
                                      <th>Consultants Name</th>
                                      <th>Appt Date</th>
                                      <th>Purpose</th>
                                      <th>Type</th>
                                      <th className="text-center">Paid Amount</th>
                                      <th />
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/consultant-profile" className="avatar avatar-sm mr-2">
											  <img className="avatar-img rounded-circle" src={UserAvatar6} alt="User Image" /></Link>
                                          <Link to="/consultant-profile">Calandra Geer <span>#PT0006</span></Link>
                                        </h2>
                                      </td>
                                      <td>14 Nov 2020 <span className="d-block text-info">6.00 PM</span></td>
                                      <td>Facial</td>
                                      <td>Old Consultant</td>
                                      <td className="text-center">$300</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a href="" className="btn btn-sm bg-info-light">
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a href="" className="btn btn-sm bg-success-light">
                                            <i className="fas fa-check" /> Accept
                                          </a>
                                          <a href="" className="btn btn-sm bg-danger-light">
                                            <i className="fas fa-times" /> Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/consultant-profile" className="avatar avatar-sm mr-2">
											  <img className="avatar-img rounded-circle" src={UserAvatar7} alt="User Image" /></Link>
                                          <Link to="/consultant-profile">Lynea Skipper <span>#PT0006</span></Link>
                                        </h2>
                                      </td>
                                      <td>14 Nov 2020 <span className="d-block text-info">5.00 PM</span></td>
                                      <td>Hair Treatment</td>
                                      <td>Old Consultant</td>
                                      <td className="text-center">$100</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a href="" className="btn btn-sm bg-info-light">
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a href="" className="btn btn-sm bg-success-light">
                                            <i className="fas fa-check" /> Accept
                                          </a>
                                          <a href="" className="btn btn-sm bg-danger-light">
                                            <i className="fas fa-times" /> Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/consultant-profile" className="avatar avatar-sm mr-2">
											  <img className="avatar-img rounded-circle" src={UserAvatar8} alt="User Image" /></Link>
                                          <Link to="/consultant-profile">Tan Staley <span>#PT0007</span></Link>
                                        </h2>
                                      </td>
                                      <td>14 Nov 2020 <span className="d-block text-info">3.00 PM</span></td>
                                      <td>Hair Treatment</td>
                                      <td>New Consultant</td>
                                      <td className="text-center">$75</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a href="" className="btn btn-sm bg-info-light">
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a href="" className="btn btn-sm bg-success-light">
                                            <i className="fas fa-check" /> Accept
                                          </a>
                                          <a href="" className="btn btn-sm bg-danger-light">
                                            <i className="fas fa-times" /> Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/consultant-profile" className="avatar avatar-sm mr-2">
											  <img className="avatar-img rounded-circle" src={UserAvatar9} alt="User Image" /></Link>
                                          <Link to="/consultant-profile">Jemario Babb <span>#PT0008</span></Link>
                                        </h2>
                                      </td>
                                      <td>14 Nov 2020 <span className="d-block text-info">1.00 PM</span></td>
                                      <td>Hair Treatment</td>
                                      <td>Old Consultant</td>
                                      <td className="text-center">$350</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a href="" className="btn btn-sm bg-info-light">
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a href="" className="btn btn-sm bg-success-light">
                                            <i className="fas fa-check" /> Accept
                                          </a>
                                          <a href="" className="btn btn-sm bg-danger-light">
                                            <i className="fas fa-times" /> Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/consultant-profile" className="avatar avatar-sm mr-2">
											  <img className="avatar-img rounded-circle" src={UserAvatar10} alt="User Image" /></Link>
                                          <Link to="/consultant-profile">Fredric Dalton <span>#PT0010</span></Link>
                                        </h2>
                                      </td>
                                      <td>14 Nov 2020 <span className="d-block text-info">10.00 AM</span></td>
                                      <td>Hair Treatment</td>
                                      <td>New Consultant</td>
                                      <td className="text-center">$175</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a href="" className="btn btn-sm bg-info-light">
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a href="" className="btn btn-sm bg-success-light">
                                            <i className="fas fa-check" /> Accept
                                          </a>
                                          <a href="" className="btn btn-sm bg-danger-light">
                                            <i className="fas fa-times" /> Cancel
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/consultant-profile" className="avatar avatar-sm mr-2">
											  <img className="avatar-img rounded-circle" src={UserAvatar11} alt="User Image" /></Link>
                                          <Link to="/consultant-profile">Gilburt Pacheco <span>#PT0011</span></Link>
                                        </h2>
                                      </td>
                                      <td>14 Nov 2020 <span className="d-block text-info">11.00 AM</span></td>
                                      <td>Hair Treatment</td>
                                      <td>New Consultant</td>
                                      <td className="text-center">$450</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a href="" className="btn btn-sm bg-info-light">
                                            <i className="far fa-eye" /> View
                                          </a>
                                          <a href="" className="btn btn-sm bg-success-light">
                                            <i className="fas fa-check" /> Accept
                                          </a>
                                          <a href="" className="btn btn-sm bg-danger-light">
                                            <i className="fas fa-times" /> Cancel
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
                        {/* /Today Appointment Tab */}
                      </div>
                    </div>
                  </div>
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
export default StylistDashboard;