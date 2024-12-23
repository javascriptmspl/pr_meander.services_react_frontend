import React from 'react';
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
// Import Sidebar
import { StylistSidebar } from './stylist_sidebar';
// Import Images
import {UserAvatar,UserAvatar1,UserAvatar2,UserAvatar3,UserAvatar4,UserAvatar5,
	UserAvatar6,UserAvatar7,UserAvatar8,UserAvatar9} from "../imagepath"

class Invoices extends React.Component {
	
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
                    <li className="breadcrumb-item active" aria-current="page">Invoices</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Invoices</h2>
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
                <div className="card card-table">
                  <div className="card-body">
                    {/* Invoice Table */}
                    <div className="table-responsive">
                      <table className="table table-hover table-center mb-0">
                        <thead>
                          <tr>
                            <th>Invoice No</th>
                            <th>customer</th>
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
                                <Link to="/consultant-profile" className="avatar avatar-sm mr-2">
                                  <img className="avatar-img rounded-circle" src={UserAvatar} alt="User Image" />
                                </Link>
                                <Link to="/consultant-profile">Rex Ingram <span>#PT0016</span></Link>
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
                                <Link to="/consultant-profile" className="avatar avatar-sm mr-2">
                                  <img className="avatar-img rounded-circle" src={UserAvatar1} alt="User Image" />
                                </Link>
                                <Link to="/consultant-profile">Faviola Stegall <span>#PT0001</span></Link>
                              </h2>
                            </td>
                            <td>$200</td>
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
                                <Link to="/consultant-profile" className="avatar avatar-sm mr-2">
                                  <img className="avatar-img rounded-circle" src={UserAvatar2} alt="User Image" />
                                </Link>
                                <Link to="/consultant-profile">Knud Zhang <span>#PT0002</span></Link>
                              </h2>
                            </td>
                            <td>$100</td>
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
                                <Link to="/consultant-profile" className="avatar avatar-sm mr-2">
                                  <img className="avatar-img rounded-circle" src={UserAvatar3} alt="User Image" />
                                </Link>
                                <Link to="/consultant-profile">Aloysius Selby <span>#PT0003</span></Link>
                              </h2>
                            </td>
                            <td>$350</td>
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
                                <Link to="/consultant-profile" className="avatar avatar-sm mr-2">
                                  <img className="avatar-img rounded-circle" src={UserAvatar4} alt="User Image" />
                                </Link>
                                <Link to="/consultant-profile">Cacie Helms <span>#PT0004</span></Link>
                              </h2>
                            </td>
                            <td>$275</td>
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
                                <Link to="/consultant-profile" className="avatar avatar-sm mr-2">
                                  <img className="avatar-img rounded-circle" src={UserAvatar5} alt="User Image" />
                                </Link>
                                <Link to="/consultant-profile">Jey Munson <span>#PT0005</span></Link>
                              </h2>
                            </td>
                            <td>$600</td>
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
                                <Link to="/consultant-profile" className="avatar avatar-sm mr-2">
                                  <img className="avatar-img rounded-circle" src={UserAvatar6} alt="User Image" />
                                </Link>
                                <Link to="/consultant-profile">Calandra Geer <span>#PT0006</span></Link>
                              </h2>
                            </td>
                            <td>$50</td>
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
                                <Link to="/consultant-profile" className="avatar avatar-sm mr-2">
                                  <img className="avatar-img rounded-circle" src={UserAvatar7} alt="User Image" />
                                </Link>
                                <Link to="/consultant-profile">Lynea Skipper <span>#PT0007</span></Link>
                              </h2>
                            </td>
                            <td>$400</td>
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
                                <Link to="/consultant-profile" className="avatar avatar-sm mr-2">
                                  <img className="avatar-img rounded-circle" src={UserAvatar8} alt="User Image" />
                                </Link>
                                <Link to="/consultant-profile">Tan Staley <span>#PT0008</span></Link>
                              </h2>
                            </td>
                            <td>$550</td>
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
                                <Link to="/consultant-profile" className="avatar avatar-sm mr-2">
                                  <img className="avatar-img rounded-circle" src={UserAvatar9} alt="User Image" />
                                </Link>
                                <Link to="/consultant-profile">Jemario Babb <span>#PT0009</span></Link>
                              </h2>
                            </td>
                            <td>$100</td>
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
                    {/* /Invoice Table */}
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
export default Invoices;