import React from 'react';
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
// Import Images
import { Specialities_01,Specialities_03,Specialities_04,Specialities_05,
	provider_thumb_01,provider_thumb_02,provider_thumb_03,provider_thumb_04,provider_thumb_06,
	Feature_01,Feature_02,Feature_03,Feature_04 } from "../imagepath"

class Search extends React.Component {
	
    render() {
        return (
			<>
			 {/* Breadcrumb */}
			 <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-8 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Search</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">2245 matches found for : Makeup Specialist In USA</h2>
              </div>
              <div className="col-md-4 col-12 d-md-block d-none">
                <div className="sort-by">
                  <span className="sort-title">Sort by</span>
                  <span className="sortby-fliter">
                    <select className="form-control select">
                      <option>Select</option>
                      <option className="sorting">Rating</option>
                      <option className="sorting">Popular</option>
                      <option className="sorting">Latest</option>
                      <option className="sorting">Free</option>
                    </select>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
                {/* Search Filter */}
                <StickyBox offsetTop={20} offsetBottom={20}>
					<div className="card search-filter">
					<div className="card-header">
						<h4 className="card-title mb-0">Search Filter</h4>
					</div>
					<div className="card-body">
						<div className="filter-widget">
						<div>
							<input type="date" className="form-control" placeholder="Select Date" />
						</div>			
						</div>
						<div className="filter-widget">
						<h4>Gender</h4>
						<div>
							<label className="custom_check">
							<input type="checkbox" name="gender_type" defaultChecked />
							<span className="checkmark" /> Male provider
							</label>
						</div>
						<div>
							<label className="custom_check">
							<input type="checkbox" name="gender_type" />
							<span className="checkmark" /> Female provider
							</label>
						</div>
						</div>
						<div className="filter-widget">
						<h4>Select Specialist</h4>
						<div>
							<label className="custom_check">
							<input type="checkbox" name="select_specialist" defaultChecked />
							<span className="checkmark" /> Body Treatments
							</label>
						</div>
						<div>
							<label className="custom_check">
							<input type="checkbox" name="select_specialist" defaultChecked />
							<span className="checkmark" /> Body Treatments
							</label>
						</div>
						<div>
							<label className="custom_check">
							<input type="checkbox" name="select_specialist" />
							<span className="checkmark" /> Makeup Specialist
							</label>
						</div>
						<div>
							<label className="custom_check">
							<input type="checkbox" name="select_specialist" />
							<span className="checkmark" /> Hair Streaming
							</label>
						</div>
						<div>
							<label className="custom_check">
							<input type="checkbox" name="select_specialist" />
							<span className="checkmark" /> Bleaching
							</label>
						</div>
						<div>
							<label className="custom_check">
							<input type="checkbox" name="select_specialist" />
							<span className="checkmark" /> Bleaching
							</label>
						</div>
						</div>
						<div className="btn-search">
						<button type="button" className="btn btn-block">Search</button>
						</div>	
					</div>
					</div>
				</StickyBox>
                {/* /Search Filter */}
              </div>
              <div className="col-md-12 col-lg-8 col-xl-9">
               {/* provider Widget */}
              <div className="card">
                <div className="card-body">
                  <div className="provider-widget">
                    <div className="doc-info-left">
                      <div className="provider-img">
                        <Link to="/stylist-profile">
                          <img src={provider_thumb_01} className="img-fluid" alt="User Image" />
                        </Link>
                      </div>
                      <div className="doc-info-cont">
                        <h4 className="doc-name"><Link to="/stylist-profile">Lark Enos</Link></h4>
                        <p className="doc-speciality">Hairdressing</p>
                        <h5 className="doc-department">
							<img src={Specialities_05} className="img-fluid" alt="Speciality" />Makeup Specialist</h5>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">(17)</span>
                        </div>
                        <div className="clinic-details">
                          <p className="doc-location"><i className="fas fa-map-marker-alt" /> Florida, USA</p>
                          <ul className="clinic-gallery">
                            <li>
                              <a href={Feature_01} data-fancybox="gallery">
                                <img src={Feature_01} alt="Feature" />
                              </a>
                            </li>
                            <li>
                              <a href={Feature_02} data-fancybox="gallery">
                                <img src={Feature_02} alt="Feature" />
                              </a>
                            </li>
                            <li>
                              <a href={Feature_03} data-fancybox="gallery">
                                <img src={Feature_03} alt="Feature" />
                              </a>
                            </li>
                            <li>
                              <a href={Feature_04} data-fancybox="gallery">
                                <img src={Feature_04} alt="Feature" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="clinic-services">
                          <span>Makeup Artists</span>
                          <span> Straightening</span>
                        </div>
                      </div>
                    </div>
                    <div className="doc-info-right">
                      <div className="clini-infos">
                        <ul>
                          <li><i className="far fa-thumbs-up" /> 98%</li>
                          <li><i className="far fa-comment" /> 17 Feedback</li>
                          <li><i className="fas fa-map-marker-alt" /> Florida, USA</li>
                          <li><i className="far fa-money-bill-alt" /> $300 - $1000 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" /> </li>
                        </ul>
                      </div>
                      <div className="clinic-booking">
                        <Link className="view-pro-btn" to="/stylist-profile">View Profile</Link>
                        <Link className="apt-btn" to="/booking">Book Appointment</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /provider Widget */}
              {/* provider Widget */}
              <div className="card">
                <div className="card-body">
                  <div className="provider-widget">
                    <div className="doc-info-left">
                      <div className="provider-img">
                        <Link to="/stylist-profile">
                          <img src={provider_thumb_02} className="img-fluid" alt="User Image" />
                        </Link>
                      </div>
                      <div className="doc-info-cont">
                        <h4 className="doc-name"><Link to="/stylist-profile">Conley Hagen</Link></h4>
                        <p className="doc-speciality">Makeup Specialist</p>
                        <h5 className="doc-department"><img src={Specialities_05} className="img-fluid" alt="Speciality" />Makeup Specialist</h5>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">(35)</span>
                        </div>
                        <div className="clinic-details">
                          <p className="doc-location"><i className="fas fa-map-marker-alt" /> Newyork, USA</p>
                          <ul className="clinic-gallery">
                            <li>
                              <a href={Feature_01} data-fancybox="gallery">
                                <img src={Feature_01} alt="Feature" />
                              </a>
                            </li>
                            <li>
                              <a href={Feature_02} data-fancybox="gallery">
                                <img src={Feature_02} alt="Feature" />
                              </a>
                            </li>
                            <li>
                              <a href={Feature_03} data-fancybox="gallery">
                                <img src={Feature_03} alt="Feature" />
                              </a>
                            </li>
                            <li>
                              <a href={Feature_04} data-fancybox="gallery">
                                <img src={Feature_04} alt="Feature" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="clinic-services">
                          <span>Makeup Artists</span>
                          <span> Straightening</span>
                        </div>
                      </div>
                    </div>
                    <div className="doc-info-right">
                      <div className="clini-infos">
                        <ul>
                          <li><i className="far fa-thumbs-up" /> 100%</li>
                          <li><i className="far fa-comment" /> 35 Feedback</li>
                          <li><i className="fas fa-map-marker-alt" /> Newyork, USA</li>
                          <li><i className="far fa-money-bill-alt" /> $50 - $300 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" /></li>
                        </ul>
                      </div>
                      <div className="clinic-booking">
                        <Link className="view-pro-btn" to="/stylist-profile">View Profile</Link>
                        <Link className="apt-btn" to="/booking">Book Appointment</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /provider Widget */}
              {/* provider Widget */}
              <div className="card">
                <div className="card-body">
                  <div className="provider-widget">
                    <div className="doc-info-left">
                      <div className="provider-img">
                        <Link to="/stylist-profile">
                          <img src={provider_thumb_03} className="img-fluid" alt="User Image" />
                        </Link>
                      </div>
                      <div className="doc-info-cont">
                        <h4 className="doc-name"><Link to="/stylist-profile">Ermin Justus</Link></h4>
                        <p className="doc-speciality">Aromatherapy</p>
                        <p className="doc-department"><img src={Specialities_04} className="img-fluid" alt="Speciality" />Massage</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">(27)</span>
                        </div>
                        <div className="clinic-details">
                          <p className="doc-location"><i className="fas fa-map-marker-alt" /> Georgia, USA</p>
                          <ul className="clinic-gallery">
                            <li>
                              <a href={Feature_01} data-fancybox="gallery">
                                <img src={Feature_01} alt="Feature" />
                              </a>
                            </li>
                            <li>
                              <a href={Feature_02} data-fancybox="gallery">
                                <img src={Feature_02} alt="Feature" />
                              </a>
                            </li>
                            <li>
                              <a href={Feature_03} data-fancybox="gallery">
                                <img src={Feature_03} alt="Feature" />
                              </a>
                            </li>
                            <li>
                              <a href={Feature_04} data-fancybox="gallery">
                                <img src={Feature_04} alt="Feature" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="clinic-services">
                          <span>Makeup Artists</span>
                          <span> Straightening</span>
                        </div>
                      </div>
                    </div>
                    <div className="doc-info-right">
                      <div className="clini-infos">
                        <ul>
                          <li><i className="far fa-thumbs-up" /> 99%</li>
                          <li><i className="far fa-comment" /> 35 Feedback</li>
                          <li><i className="fas fa-map-marker-alt" /> Newyork, USA</li>
                          <li><i className="far fa-money-bill-alt" /> $100 - $400 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" /></li>
                        </ul>
                      </div>
                      <div className="clinic-booking">
                        <Link className="view-pro-btn" to="/stylist-profile">View Profile</Link>
                        <Link className="apt-btn" to="/booking">Book Appointment</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /provider Widget */}
              {/* provider Widget */}
              <div className="card">
                <div className="card-body">
                  <div className="provider-widget">
                    <div className="doc-info-left">
                      <div className="provider-img">
                        <Link to="/stylist-profile">
                          <img src={provider_thumb_04} className="img-fluid" alt="User Image" />
                        </Link>
                      </div>
                      <div className="doc-info-cont">
                        <h4 className="doc-name"><Link to="/stylist-profile">Esmie Grier</Link></h4>
                        <p className="doc-speciality">Body Treatments</p>
                        <p className="doc-department"><img src={Specialities_01} className="img-fluid" alt="Speciality" />Body Treatments</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">(4)</span>
                        </div>
                        <div className="clinic-details">
                          <p className="doc-location"><i className="fas fa-map-marker-alt" /> Louisiana, USA</p>
                          <ul className="clinic-gallery">
                            <li>
                              <a href={Feature_01} data-fancybox="gallery">
                                <img src={Feature_01} alt="Feature" />
                              </a>
                            </li>
                            <li>
                              <a href={Feature_02} data-fancybox="gallery">
                                <img src={Feature_02} alt="Feature" />
                              </a>
                            </li>
                            <li>
                              <a href={Feature_03} data-fancybox="gallery">
                                <img src={Feature_03} alt="Feature" />
                              </a>
                            </li>
                            <li>
                              <a href={Feature_04} data-fancybox="gallery">
                                <img src={Feature_04} alt="Feature" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="clinic-services">
                          <span>Makeup Artists</span>
                          <span> Straightening</span>
                        </div>
                      </div>
                    </div>
                    <div className="doc-info-right">
                      <div className="clini-infos">
                        <ul>
                          <li><i className="far fa-thumbs-up" /> 97%</li>
                          <li><i className="far fa-comment" /> 4 Feedback</li>
                          <li><i className="fas fa-map-marker-alt" /> Newyork, USA</li>
                          <li><i className="far fa-money-bill-alt" /> $150 - $250 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" /></li>
                        </ul>
                      </div>
                      <div className="clinic-booking">
                        <Link className="view-pro-btn" to="/stylist-profile">View Profile</Link>
                        <Link className="apt-btn" to="/booking">Book Appointment</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /provider Widget */}
              {/* provider Widget */}
              <div className="card">
                <div className="card-body">
                  <div className="provider-widget">
                    <div className="doc-info-left">
                      <div className="provider-img">
                        <Link to="/stylist-profile">
                          <img src={provider_thumb_06} className="img-fluid" alt="User Image" />
                        </Link>
                      </div>
                      <div className="doc-info-cont">
                        <h4 className="doc-name"><Link to="/stylist-profile">Lizy Russell</Link></h4>
                        <p className="doc-speciality">Eyebrow Makeup</p>
                        <p className="doc-department"><img src={Specialities_03} className="img-fluid" alt="Speciality" />Eyebrow Makeup</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">(52)</span>
                        </div>
                        <div className="clinic-details">
                          <p className="doc-location"><i className="fas fa-map-marker-alt" /> Texas, USA</p>
                          <ul className="clinic-gallery">
                            <li>
                              <a href={Feature_01} data-fancybox="gallery">
                                <img src={Feature_01} alt="Feature" />
                              </a>
                            </li>
                            <li>
                              <a href={Feature_02} data-fancybox="gallery">
                                <img src={Feature_02} alt="Feature" />
                              </a>
                            </li>
                            <li>
                              <a href={Feature_03} data-fancybox="gallery">
                                <img src={Feature_03} alt="Feature" />
                              </a>
                            </li>
                            <li>
                              <a href={Feature_04} data-fancybox="gallery">
                                <img src={Feature_04} alt="Feature" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="clinic-services">
                          <span>Makeup Artists</span>
                          <span> Straightening</span>
                        </div>
                      </div>
                    </div>
                    <div className="doc-info-right">
                      <div className="clini-infos">
                        <ul>
                          <li><i className="far fa-thumbs-up" /> 100%</li>
                          <li><i className="far fa-comment" /> 52 Feedback</li>
                          <li><i className="fas fa-map-marker-alt" /> Texas, USA</li>
                          <li><i className="far fa-money-bill-alt" /> $100 - $500 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" /></li>
                        </ul>
                      </div>
                      <div className="clinic-booking">
                        <Link className="view-pro-btn" to="/stylist-profile">View ProfileLink</Link>
                        <Link className="apt-btn" to="/booking">Book Appointment</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /provider Widget */}
                <div className="load-more text-center">
                  <a className="btn btn-primary btn-sm" href="">Load More</a>	
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
export default Search;