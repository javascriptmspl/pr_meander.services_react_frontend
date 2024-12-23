import React from 'react';
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
// Import Sidebar
import { StylistSidebar } from './stylist_sidebar';
// Import Images
import {UserAvatar,UserAvatar1,UserAvatar2,UserAvatar3,UserAvatar4,UserAvatar5,
	UserAvatar6,UserAvatar7,UserAvatar8,UserAvatar9,UserAvatar10,UserAvatar11} from "../imagepath"

class MyCustomers extends React.Component {
	
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
								<li className="breadcrumb-item active" aria-current="page">My customers</li>
							</ol>
							</nav>
							<h2 className="breadcrumb-title">My customers</h2>
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
                <div className="row row-grid">
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <Link to="/consultant-profile" className="booking-pro-img">
                              <img src={UserAvatar} alt="User Image" />
                            </Link>
                            <div className="profile-det-info">
                              <h3><Link to="/consultant-profile">Rex Ingram</Link></h3>
                              <div className="customer-details">
                                <h5><b>customer ID :</b> P0016</h5>
                                <h5 className="mb-0"><i className="fas fa-map-marker-alt" /> Alabama, USA</h5>
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
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <Link to="/consultant-profile" className="booking-pro-img">
                              <img src={UserAvatar1} alt="User Image" />
                            </Link>
                            <div className="profile-det-info">
                              <h3><Link to="/consultant-profile">Faviola Stegall</Link></h3>
                              <div className="customer-details">
                                <h5><b>customer ID :</b> P0001</h5>
                                <h5 className="mb-0"><i className="fas fa-map-marker-alt" /> North Carolina, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="customer-info">
                          <ul>
                            <li>Phone <span>+1 828 632 9170</span></li>
                            <li>Age <span>29 Years, Female</span></li>
                            <li>Booking <span>Hair Treatment</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <a href="#" className="booking-pro-img">
                              <img src={UserAvatar2} alt="User Image" />
                            </a>
                            <div className="profile-det-info">
                              <h3>Knud Zhang </h3>
                              <div className="customer-details">
                                <h5><b>customer ID :</b> PT0002</h5>
                                <h5 className="mb-0"><i className="fas fa-map-marker-alt" /> Maine, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="customer-info">
                          <ul>
                            <li>Phone <span>+1 207 729 9974</span></li>
                            <li>Age <span>23 Years, Male</span></li>
                            <li>Booking <span>Makeup</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <a href="#" className="booking-pro-img">
                              <img src={UserAvatar3} alt="User Image" />
                            </a>
                            <div className="profile-det-info">
                              <h3>Aloysius Selby</h3>
                              <div className="customer-details">
                                <h5><b>customer ID :</b> PT0003</h5>
                                <h5 className="mb-0"><i className="fas fa-map-marker-alt" /> Indiana, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="customer-info">
                          <ul>
                            <li>Phone <span>+1 260 724 7769</span></li>
                            <li>Age <span>32 Years, Male</span></li>
                            <li>Booking <span>Brow</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <a href="#" className="booking-pro-img">
                              <img src={UserAvatar4} alt="User Image" />
                            </a>
                            <div className="profile-det-info">
                              <h3>Cacie Helms</h3>
                              <div className="customer-details">
                                <h5><b>customer ID :</b> PT0004</h5>
                                <h5 className="mb-0"><i className="fas fa-map-marker-alt" /> Indiana, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="customer-info">
                          <ul>
                            <li>Phone <span>+1 504 368 6874</span></li>
                            <li>Age <span>25 Years, Female</span></li>
                            <li>Booking <span>Makeup</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <a href="#" className="booking-pro-img">
                              <img src={UserAvatar5} alt="User Image" />
                            </a>
                            <div className="profile-det-info">
                              <h3>Jey Munson</h3>
                              <div className="customer-details">
                                <h5><b>customer ID :</b> PT0005</h5>
                                <h5 className="mb-0"><i className="fas fa-map-marker-alt" /> Florida, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="customer-info">
                          <ul>
                            <li>Phone <span>+1 954 820 7887</span></li>
                            <li>Age <span>25 Years, Female</span></li>
                            <li>Booking <span>Cosmetology</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <a href="#" className="booking-pro-img">
                              <img src={UserAvatar6} alt="User Image" />
                            </a>
                            <div className="profile-det-info">
                              <h3>Calandra Geer</h3>
                              <div className="customer-details">
                                <h5><b>customer ID :</b> PT0006</h5>
                                <h5 className="mb-0"><i className="fas fa-map-marker-alt" /> Kentucky, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="customer-info">
                          <ul>
                            <li>Phone <span>+1 315 384 4562</span></li>
                            <li>Age <span>14 Years, Female</span></li>
                            <li>Booking <span>Hairdressing</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <a href="#" className="booking-pro-img">
                              <img src={UserAvatar7} alt="User Image" />
                            </a>
                            <div className="profile-det-info">
                              <h3>Lynea Skipper</h3>
                              <div className="customer-details">
                                <h5><b>customer ID :</b> PT0007</h5>
                                <h5 className="mb-0"><i className="fas fa-map-marker-alt" /> California, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="customer-info">
                          <ul>
                            <li>Phone <span>+1 707 2202 603</span></li>
                            <li>Age <span>25 Years, Female</span></li>
                            <li>Booking <span>Eyebrow Makeup</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <a href="#" className="booking-pro-img">
                              <img src={UserAvatar8} alt="User Image" />
                            </a>
                            <div className="profile-det-info">
                              <h3>Tan Staley</h3>
                              <div className="customer-details">
                                <h5><b>customer ID :</b> PT0007</h5>
                                <h5 className="mb-0"><i className="fas fa-map-marker-alt" /> New Jersey, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="customer-info">
                          <ul>
                            <li>Phone <span>+1 973 773 9497</span></li>
                            <li>Age <span>28 Years, Male</span></li>
                            <li>Booking <span>Hair Treatment</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <a href="#" className="booking-pro-img">
                              <img src={UserAvatar9} alt="User Image" />
                            </a>
                            <div className="profile-det-info">
                              <h3>Jemario Babb</h3>
                              <div className="customer-details">
                                <h5><b>customer ID :</b> PT0009</h5>
                                <h5 className="mb-0"><i className="fas fa-map-marker-alt" /> Florida, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="customer-info">
                          <ul>
                            <li>Phone <span>+1 850 358 4445</span></li>
                            <li>Age <span>28 Years, Male</span></li>
                            <li>Booking <span>Brow</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <a href="#" className="booking-pro-img">
                              <img src={UserAvatar10} alt="User Image" />
                            </a>
                            <div className="profile-det-info">
                              <h3>Fredric Dalton</h3>
                              <div className="customer-details">
                                <h5><b>customer ID :</b> PT0010</h5>
                                <h5 className="mb-0"><i className="fas fa-map-marker-alt" /> California, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="customer-info">
                          <ul>
                            <li>Phone <span>+1 858 259 5285</span></li>
                            <li>Age <span>19 Years, Male</span></li>
                            <li>Booking <span>Makeup</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <a href="#" className="booking-pro-img">
                              <img src={UserAvatar11} alt="User Image" />
                            </a>
                            <div className="profile-det-info">
                              <h3>Gilburt Pacheco</h3>
                              <div className="customer-details">
                                <h5><b>customer ID :</b> PT0011</h5>
                                <h5 className="mb-0"><i className="fas fa-map-marker-alt" /> Colorado, USA</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="customer-info">
                          <ul>
                            <li>Phone <span>+1 303 607 7075</span></li>
                            <li>Age <span>9 Years, Male</span></li>
                            <li>Booking <span>Eyebrow Makeup</span></li>
                          </ul>
                        </div>
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
export default MyCustomers;