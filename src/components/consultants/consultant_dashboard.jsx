import React from 'react';
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
// Import Sidebar
import { Consultantsidebar } from './cunsultant_sidebar';
// Import Images
import { provider_thumb_01,provider_thumb_02,provider_thumb_03,provider_thumb_04,
	provider_thumb_05,provider_thumb_06,provider_thumb_07,provider_thumb_08,
	provider_thumb_09,provider_thumb_10} from "../imagepath"

class ConsultantDashboard extends React.Component {
	
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
              {/* Profile Sidebar */}
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                <StickyBox offsetTop={20} offsetBottom={20}>
					<Consultantsidebar/>
                </StickyBox>                
              </div>
              {/* / Profile Sidebar */}
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="card">
                  <div className="card-body pt-0">
                    {/* Tab Menu */}
                    <nav className="user-tabs mb-4">
                      <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                        <li className="nav-item">
                          <a className="nav-link active" href="#pat_appointments" data-toggle="tab">Appointments</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#pat_prescriptions" data-toggle="tab">Follow Up</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#pat_medical_records" data-toggle="tab"><span className="med-records">Consultant Records</span></a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#pat_billing" data-toggle="tab">Billing</a>
                        </li>
                      </ul>
                    </nav>
                    {/* /Tab Menu */}
                    {/* Tab Content */}
                    <div className="tab-content pt-0">
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
                                          <img className="avatar-img rounded-circle" src={provider_thumb_01} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Lark Enos <span>Makeup</span></Link>
                                      </h2>
                                    </td>
                                    <td>14 Nov 2020 <span className="d-block text-info">10.00 AM</span></td>
                                    <td>12 Nov 2020</td>
                                    <td>$160</td>
                                    <td>16 Nov 2020</td>
                                    <td><span className="badge badge-pill bg-success-light">Confirm</span></td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
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
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_03} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Ermin Justus <span>Massage</span></Link>
                                      </h2>
                                    </td>
                                    <td>11 Nov 2020 <span className="d-block text-info">11.00 AM</span></td>
                                    <td>10 Nov 2020</td>
                                    <td>$400</td>
                                    <td>13 Nov 2020</td>
                                    <td><span className="badge badge-pill bg-danger-light">Cancelled</span></td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_04} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Esmie Grier <span>Body Treatments</span></Link>
                                      </h2>
                                    </td>
                                    <td>10 Nov 2020 <span className="d-block text-info">3.00 PM</span></td>
                                    <td>10 Nov 2020</td>
                                    <td>$350</td>
                                    <td>12 Nov 2020</td>
                                    <td><span className="badge badge-pill bg-warning-light">Pending</span></td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_05} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Allson Shores <span>Barber</span></Link>
                                      </h2>
                                    </td>
                                    <td>9 Nov 2020 <span className="d-block text-info">7.00 PM</span></td>
                                    <td>8 Nov 2020</td>
                                    <td>$75</td>
                                    <td>11 Nov 2020</td>
                                    <td><span className="badge badge-pill bg-success-light">Confirm</span></td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_06} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Lizy Russell <span>Eyebrow Makeup</span></Link>
                                      </h2>
                                    </td>
                                    <td>8 Nov 2020 <span className="d-block text-info">9.00 AM</span></td>
                                    <td>6 Nov 2020</td>
                                    <td>$175</td>
                                    <td>10 Nov 2020</td>
                                    <td><span className="badge badge-pill bg-danger-light">Cancelled</span></td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_07} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Fayda Cates <span>Body Treatments</span></Link>
                                      </h2>
                                    </td>
                                    <td>8 Nov 2020 <span className="d-block text-info">6.00 PM</span></td>
                                    <td>6 Nov 2020</td>
                                    <td>$450</td>
                                    <td>10 Nov 2020</td>
                                    <td><span className="badge badge-pill bg-success-light">Confirm</span></td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_08} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Elek Keating<span>Eye Makeup</span></Link>
                                      </h2>
                                    </td>
                                    <td>7 Nov 2020 <span className="d-block text-info">9.00 PM</span></td>
                                    <td>7 Nov 2020</td>
                                    <td>$275</td>
                                    <td>9 Nov 2020</td>
                                    <td><span className="badge badge-pill bg-success-light">Confirm</span></td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_09} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Achiram Jacobs <span>Makeup</span></Link>
                                      </h2>
                                    </td>
                                    <td>6 Nov 2020 <span className="d-block text-info">8.00 PM</span></td>
                                    <td>4 Nov 2020</td>
                                    <td>$600</td>
                                    <td>8 Nov 2020</td>
                                    <td><span className="badge badge-pill bg-success-light">Confirm</span></td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link to="/stylist-profile" className="avatar avatar-sm mr-2">
                                          <img className="avatar-img rounded-circle" src={provider_thumb_10} alt="User Image" />
                                        </Link>
                                        <Link to="/stylist-profile">Ade Bills  <span>Makeup</span></Link>
                                      </h2>
                                    </td>
                                    <td>5 Nov 2020 <span className="d-block text-info">5.00 PM</span></td>
                                    <td>1 Nov 2020</td>
                                    <td>$100</td>
                                    <td>7 Nov 2020</td>
                                    <td><span className="badge badge-pill bg-success-light">Confirm</span></td>
                                    <td className="text-right">
                                      <div className="table-action">
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="" className="btn btn-sm bg-info-light">
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
                      {/* /Appointment Tab */}
                      {/* Follow Up Tab */}
                      <div className="tab-pane fade" id="pat_prescriptions">
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
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="" className="btn btn-sm bg-info-light">
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
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
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
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="" className="btn btn-sm bg-info-light">
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
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="" className="btn btn-sm bg-info-light">
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
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="" className="btn btn-sm bg-info-light">
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
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="" className="btn btn-sm bg-info-light">
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
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="" className="btn btn-sm bg-info-light">
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
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="" className="btn btn-sm bg-info-light">
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
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="" className="btn btn-sm bg-info-light">
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
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a href="" className="btn btn-sm bg-info-light">
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
                      {/* /Follow Up Tab */}
                      {/* Medical Records Tab */}
                      <div id="pat_medical_records" className="tab-pane fade">
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
                                    <td><a href="">#MR-0010</a></td>
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
                                        <a href="" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><a href="">#MR-0009</a></td>
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
                                        <a href="" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><a href="">#MR-0008</a></td>
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
                                        <a href="" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><a href="">#MR-0007</a></td>
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
                                        <a href="" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><a href="">#MR-0006</a></td>
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
                                        <a href="" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><a href="">#MR-0005</a></td>
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
                                        <a href="" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><a href="">#MR-0004</a></td>
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
                                        <a href="" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><a href="">#MR-0003</a></td>
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
                                        <a href="" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><a href="">#MR-0002</a></td>
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
                                        <a href="" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td><a href="">#MR-0001</a></td>
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
                                        <a href="" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
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
                      {/* /Medical Records Tab */}
                      {/* Billing Tab */}
                      <div id="pat_billing" className="tab-pane fade">
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
                                        <Link to="/invoice-view" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </Link>
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
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
                                        <Link to="/invoice-view" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </Link>
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
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
                                        <Link to="/invoice-view" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </Link>
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
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
                                        <Link to="/invoice-view" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </Link>
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
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
                                        <Link to="/invoice-view" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </Link>
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
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
                                        <Link to="/invoice-view" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </Link>
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
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
                                        <Link to="/invoice-view" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </Link>
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
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
                                        <Link to="/invoice-view" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </Link>
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
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
                                        <Link to="/invoice-view" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </Link>
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
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
                                        <Link to="/invoice-view" className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </Link>
                                        <a href="" className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
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
                      {/* /Billing Tab */}
                    </div>
                    {/* Tab Content */}
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
export default ConsultantDashboard;