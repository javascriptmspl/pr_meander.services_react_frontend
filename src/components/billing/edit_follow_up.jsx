import React from 'react';
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Sidebar } from './sidebar';

class EditFollowUp extends React.Component {
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
                    <li className="breadcrumb-item active" aria-current="page">Edit Follow-up</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Edit Follow-up</h2>
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
                {/* Profile Widget */}
                <StickyBox offsetTop={20} offsetBottom={20}>
					<Sidebar/>
				</StickyBox>
                {/* /Profile Widget */}
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title mb-0">Edit Follow-up</h4>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="biller-info">
                          <h4 className="d-block">Conley Hagen</h4>
                          <span className="d-block text-sm text-muted">Makeup Specialist</span>
                          <span className="d-block text-sm text-muted">Newyork, United States</span>
                        </div>
                      </div>
                      <div className="col-sm-6 text-sm-right">
                        <div className="billing-info">
                          <h4 className="d-block">1 November 2020</h4>
                          <span className="d-block text-muted">#INV0001</span>
                        </div>
                      </div>
                    </div>
                    {/* Add Item */}
                    <div className="add-more-item text-right">
                      <a href="#"><i className="fa fa-plus-circle" /> Add More</a>
                    </div>
                    {/* /Add Item */}
                    {/* Prescription Item */}
                    <div className="card card-table">
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table table-hover table-center">
                            <thead>
                              <tr>
                                <th style={{width: '200px'}}>Name</th>
                                <th style={{width: '100px'}}>Quantity</th>
                                <th style={{width: '100px'}}>Days</th>
                                <th style={{width: '100px'}}>Time</th>
                                <th style={{width: '80px'}} />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <input className="form-control" defaultValue="Hairdressing" type="text" />
                                </td>
                                <td>
                                  <input className="form-control" type="text" defaultValue={2} />
                                </td>
                                <td>
                                  <input className="form-control" defaultValue="2 Days" type="text" />
                                </td>
                                <td>
                                  <div className="form-check form-check-inline">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" /> Morning
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" /> Afternoon
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" /> Evening
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" /> Night
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  <a href="#" className="btn bg-danger-light trash"><i className="far fa-trash-alt" /></a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <input className="form-control" type="text" defaultValue="Eyebrow" />
                                </td>
                                <td>
                                  <input className="form-control" type="text" defaultValue={2} />
                                </td>
                                <td>
                                  <input className="form-control" defaultValue="1 Days" type="text" />
                                </td>
                                <td>
                                  <div className="form-check form-check-inline">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" /> Morning
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" /> Afternoon
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" /> Evening
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" /> Night
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  <a href="#" className="btn bg-danger-light trash"><i className="far fa-trash-alt" /></a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    {/* /Prescription Item */}
                    {/* Signature */}
                    <div className="row">
                      <div className="col-md-12 text-right">
                        <div className="signature-wrap">
                          <div className="signature">
                            Click here to sign
                          </div>
                          <div className="sign-name">
                            <p className="mb-0">( Conley Hagen )</p>
                            <span className="text-muted">Signature</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Signature */}
                    {/* Submit Section */}
                    <div className="row">
                      <div className="col-md-12">
                        <div className="submit-section">
                          <button type="submit" className="btn btn-primary submit-btn">Save</button>
                          <button type="reset" className="btn btn-secondary submit-btn">Clear</button>
                        </div>
                      </div>
                    </div>
                    {/* /Submit Section */}
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
export default EditFollowUp;