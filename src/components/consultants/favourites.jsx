import React from 'react';
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Consultantsidebar } from './cunsultant_sidebar';
// Import Images
import { provider_01,provider_02,provider_03,provider_04,provider_05,provider_06,provider_07,
	provider_08,provider_09,provider_10,provider_11,provider_12} from "../imagepath"

class Favourites extends React.Component {
	
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
                    <li className="breadcrumb-item active" aria-current="page">Favourites</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Favourites</h2>
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
                <StickyBox offsetTop={20} offsetBottom={20}>
					<Consultantsidebar/>
                </StickyBox>               
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="row row-grid">
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="pro-img">
                        <Link to="/stylist-profile">
                          <img className="img-fluid" alt="User Image" src={provider_01} />
                        </Link>
                        <a href="" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/stylist-profile">Lark Enos</Link> 
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">Hairdressing</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span className="d-inline-block average-rating">(17)</span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> Florida, USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22 Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $300 - $1000 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <Link to="/stylist-profile" className="btn view-btn">View Profile</Link>
                          </div>
                          <div className="col-6">
                            <Link to="/booking" className="btn book-btn">Book Now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="pro-img">
                        <Link to="/stylist-profile">
                          <img className="img-fluid" alt="User Image" src={provider_02} />
                        </Link>
                        <a href="" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/stylist-profile">Conley Hagen</Link> 
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">Makeup Specialist</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">(35)</span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> Newyork, USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22 Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $50 - $300 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <Link to="/stylist-profile" className="btn view-btn">View Profile</Link>
                          </div>
                          <div className="col-6">
                            <Link to="/booking" className="btn book-btn">Book Now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="pro-img">
                        <Link to="/stylist-profile">
                          <img className="img-fluid" alt="User Image" src={provider_03} />
                        </Link>
                        <a href="" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/stylist-profile">Ermin Justus</Link> 
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">Aromatherapy</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">(27)</span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> Georgia, USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22 Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $100 - $400 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <Link to="/stylist-profile" className="btn view-btn">View Profile</Link>
                          </div>
                          <div className="col-6">
                            <Link to="/booking" className="btn book-btn">Book Now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="pro-img">
                        <Link to="/stylist-profile">
                          <img className="img-fluid" alt="User Image" src={provider_04} />
                        </Link>
                        <a href="" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/stylist-profile">Esmie Grier</Link> 
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">Body Treatments</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">(4)</span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> Louisiana, USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22 Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $150 - $250 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <Link to="/stylist-profile" className="btn view-btn">View Profile</Link>
                          </div>
                          <div className="col-6">
                            <Link to="/booking" className="btn book-btn">Book Now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="pro-img">
                        <Link to="/stylist-profile">
                          <img className="img-fluid" alt="User Image" src={provider_05} />
                        </Link>
                        <a href="" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/stylist-profile">Allson Shores</Link> 
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">Barber</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">(66)</span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> Michigan, USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22 Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $50 - $700 
                            <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <Link to="/stylist-profile" className="btn view-btn">View Profile</Link>
                          </div>
                          <div className="col-6">
                            <Link to="/booking" className="btn book-btn">Book Now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="pro-img">
                        <Link to="/stylist-profile">
                          <img className="img-fluid" alt="User Image" src={provider_06} />
                        </Link>
                        <a href="" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/stylist-profile">Lizy Russell</Link> 
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">Eyebrow Makeup</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">(52)</span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> Texas, USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22 Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $100 - $500 
                            <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <Link to="/stylist-profile" className="btn view-btn">View Profile</Link>
                          </div>
                          <div className="col-6">
                            <Link to="/booking" className="btn book-btn">Book Now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="pro-img">
                        <Link to="/stylist-profile">
                          <img className="img-fluid" alt="User Image" src={provider_07} />
                        </Link>
                        <a href="" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/stylist-profile">Fayda Cates</Link> 
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">Haircut Makeup</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">(43)</span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> Kansas, USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22 Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $100 - $1000 
                            <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <Link to="/stylist-profile" className="btn view-btn">View Profile</Link>
                          </div>
                          <div className="col-6">
                            <Link to="/booking" className="btn book-btn">Book Now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="pro-img">
                        <Link to="/stylist-profile">
                          <img className="img-fluid" alt="User Image" src={provider_08} />
                        </Link>
                        <a href="" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/stylist-profile">Elek Keating</Link> 
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">Eye Makeup</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">(49)</span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> California, USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22 Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $100 - $400 
                            <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <Link to="/stylist-profile" className="btn view-btn">View Profile</Link>
                          </div>
                          <div className="col-6">
                            <Link to="/booking" className="btn book-btn">Book Now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="pro-img">
                        <Link to="/stylist-profile">
                          <img className="img-fluid" alt="User Image" src={provider_09} />
                        </Link>
                        <a href="" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/stylist-profile">Achiram Jacobs</Link> 
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">Hairdressing</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">(112)</span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> Oklahoma, USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22 Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $500 - $2500 
                            <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <Link to="/stylist-profile" className="btn view-btn">View Profile</Link>
                          </div>
                          <div className="col-6">
                            <Link to="/booking" className="btn book-btn">Book Now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="pro-img">
                        <Link to="/stylist-profile">
                          <img className="img-fluid" alt="User Image" src={provider_10} />
                        </Link>
                        <a href="" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/stylist-profile">Ade Bills</Link> 
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">Hairdressing</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">(65)</span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> Montana, USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22 Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $75 - $250 
                            <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <Link to="/stylist-profile" className="btn view-btn">View Profile</Link>
                          </div>
                          <div className="col-6">
                            <Link to="/booking" className="btn book-btn">Book Now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="pro-img">
                        <Link to="/stylist-profile">
                          <img className="img-fluid" alt="User Image" src={provider_11} />
                        </Link>
                        <a href="" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/stylist-profile">Billy Frias</Link> 
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">Hair Stylist</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">(5)</span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> Oklahoma, USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22 Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $275 - $450 
                            <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <Link to="/stylist-profile" className="btn view-btn">View Profile</Link>
                          </div>
                          <div className="col-6">Link
                            <Link to="/booking" className="btn book-btn">Book Now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="profile-widget">
                      <div className="pro-img">
                        <Link to="/stylist-profile">
                          <img className="img-fluid" alt="User Image" src={provider_12} />
                        </Link>
                        <a href="" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/stylist-profile">Levar Fraley</Link> 
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">Hairdressing Specialist</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">(5)</span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" /> Indiana, USA
                          </li>
                          <li>
                            <i className="far fa-clock" /> Available on Fri, 22 Mar
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $150 - $350 
                            <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <Link to="/stylist-profile" className="btn view-btn">View Profile</Link>
                          </div>
                          <div className="col-6">
                            <Link to="/booking" className="btn book-btn">Book Now</Link>
                          </div>
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
export default Favourites;