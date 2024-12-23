import React from 'react';
import Map from "./map";
import { Link } from "react-router-dom";
// Import Images
import { Specialities_01,Specialities_03,Specialities_04,Specialities_05,
	provider_thumb_01,provider_thumb_02,provider_thumb_03,provider_thumb_04,provider_thumb_06,
	provider_01,provider_02,provider_03,provider_04,provider_05,provider_06,provider_07,
	provider_08,provider_09,provider_10,provider_11,provider_12,Feature_01,Feature_02,Feature_03,Feature_04 } from "../imagepath"

const data = [{
	id:"01",
	doc_name:"Sorell Sexton",
	"speciality":"Paraffin Wax",
	"address":"Florida, USA",
	"next_available":"Available on Fri, 22 Mar",
	"amount":"$300 - $1000",
	lat:-33.847927,
	lng:150.6517938,
	"icons":"default",
	"profile_link":"/stylist-profile",
	"total_review":"17",
	"image":provider_01
	}, {
		
	id:"02",
	doc_name:"Urban Mauldin",
	"speciality":"Glitter Nail Art",
	"address":"Newyork, USA",
	"next_available":"Available on Fri, 23 Mar",
	"amount":"$50 - $300",
	lat:-37.9722342,
	lng:144.7729561,
	"icons":"default",
	"profile_link":"/stylist-profile",
	"total_review":"35",
	"image":provider_02
	}, {
	id:"03",
	doc_name:"Cela Spence",
	"speciality":"Pedicure",
	"address":"Georgia, USA",
	"next_available":"Available on Fri, 24 Mar",
	"amount":"$100 - $400",
	lat:-31.9546904,
	lng:112.8350292,
	"icons":"default",
	"profile_link":"/stylist-profile",
	"total_review":"27",
	"image":provider_03
	}, {
	id:"04",
	doc_name:"Litia Green",
	"speciality":"Nail Filling",
	"address":"Louisiana, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$150 - $250",
	lat:-32.9546904,
	lng:115.8350292,
	"icons":"default",
	"profile_link":"/stylist-profile",
	"total_review":"4",
	"image":provider_04
	}, {
	id:"05",
	doc_name:"Aditi Menard",
	"speciality":"Get Nail Art",
	"address":"Michigan, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$50 - $700",
	lat:-34.9546904,
	lng:125.8650292,
	"icons":"default",
	"profile_link":"/stylist-profile",
	"total_review":"66",
	"image":provider_05
	}, {
	id:"06",
	doc_name:"Vix Schneider",
	"speciality":"Manicure",
	"address":"Texas, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$100 - $500",
	lat:-35.9546904,
	lng:153.8350292,
	"icons":"default",
	"profile_link":"/stylist-profile",
	"total_review":"52",
	"image":provider_06
	}, {
	id:"07",
	doc_name:"Jonalyn Graff",
	"speciality":"Foot Care",
	"address":"Kansas, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$100 - $1000",
	lat:-36.9548904,
	lng:105.8350292,
	"icons":"default",
	"profile_link":"/stylist-profile",
	"total_review":"43",
	"image":provider_07
	}, {
	id:"08",
	doc_name:"Yara Sauls",
	"speciality":"Paraffin Wax",
	"address":"California, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$100 - $400",
	lat:-38.9556904,
	lng:110.8350292,
	"icons":"default",
	"profile_link":"/stylist-profile",
	"total_review":"49",
	"image":provider_08
	}, {
	id:"09",
	doc_name:"Jaydee Mack",
	"speciality":"Pedicure",
	"address":"Oklahoma, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$500 - $2500",
	lat:-33.2191198,
	lng:120.8350292,
	"icons":"default",
	"profile_link":"/stylist-profile",
	"total_review":"112",
	"image":provider_09
	}, {
	id:"10",
	doc_name:"Lorissa Peters",
	"speciality":"Nail Art",
	"address":"Montana, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$75 - $250",
	lat:-37.1382198,
	lng:115.9359404,
	"icons":"default",
	"profile_link":"/stylist-profile",
	"total_review":"65",
	"image":provider_10
	}, {
	id:"11",
	doc_name:"Gilian Nixon",
	"speciality":"Manicure",
	"address":"Oklahoma, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$275 - $450",
	lat:-31.1546904,
	lng:145.8350292,
	"icons":"default",
	"profile_link":"/stylist-profile",
	"total_review":"5",
	"image":provider_11
	}, {
	id:"12",
	doc_name:"Emlin Kunz",
	"speciality":"Waxing",
	"address":"Indiana, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$150 - $350",
	lat:-35.1586194,
	lng:155.8350292,
	"icons":"default",
	"profile_link":"/stylist-profile",
	"total_review":"5",
	"image":provider_12
	}
];

class StylistList extends React.Component {

	componentDidMount(){
        document.body.classList.add('map-page');
    }
    componentWillUnmount(){
        document.body.classList.remove('map-page');
    }
	
    render() {
        return (
			<>
				 {/* Page Content */}
				 <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-7 col-lg-12 order-md-last order-sm-last order-last map-left">
              <div className="row align-items-center mb-4">
                <div className="col-md-6 col">
                  <h4>2545 Stylists found</h4>
                </div>
                <div className="col-md-6 col-auto">
                  <div className="view-icons">
                    <Link to="/map-grid" className="grid-view"><i className="fas fa-th-large" /></Link>
                    <Link to="/map-list" className="list-view active"><i className="fas fa-bars" /></Link>
                  </div>
                  <div className="sort-by d-sm-block d-none">
                    <span className="sortby-fliter">
                      <select className="form-control select">
                        <option>Sort by</option>
                        <option className="sorting">Rating</option>
                        <option className="sorting">Popular</option>
                        <option className="sorting">Latest</option>
                        <option className="sorting">Free</option>
                      </select>
                    </span>
                  </div>
                </div>
              </div>
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
            <div className="col-xl-5 col-lg-12 map-right">
				<Map places={data} center={{ lat: -24.9923319, lng: 135.2252427 }} />
              {/* map*/}
            </div>			            
          </div>	      	   
        </div>
      </div>		
      {/* /Page Content */}
			</>
        )
    }
}
export default StylistList;