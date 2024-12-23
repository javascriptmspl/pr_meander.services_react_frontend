import React from 'react';
import Map from "./map";
import { Link } from "react-router-dom";
// Import Images
import {provider_01,provider_02,provider_03,provider_04,provider_05,provider_06,provider_07,
	provider_08,provider_09,provider_10,provider_11,provider_12} from "../imagepath"

const data = [
	{
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

class StylistGrid extends React.Component {

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
            {/* content-left*/}
            <div className="col-xl-6 col-lg-12 order-md-last order-sm-last order-last map-left">
              <div className="row align-items-center mb-4">
                <div className="col-md-6 col">
                  <h4>2545 Stylists found</h4>
                </div>
                <div className="col-md-6 col-auto">
                  <div className="view-icons ">
                    <Link to="/map-grid" className="grid-view active"><i className="fas fa-th-large" /></Link>
                    <Link to="/map-list" className="list-view"><i className="fas fa-bars" /></Link>
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
              <div className="row">
                <div className="col-sm-6 col-md-4 col-xl-6">
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
                <div className="col-sm-6 col-md-4 col-xl-6">
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
                <div className="col-sm-6 col-md-4 col-xl-6">
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
                <div className="col-sm-6 col-md-4 col-xl-6">
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
                <div className="col-sm-6 col-md-4 col-xl-6">
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
                <div className="col-sm-6 col-md-4 col-xl-6">
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
                <div className="col-sm-6 col-md-4 col-xl-6">
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
                <div className="col-sm-6 col-md-4 col-xl-6">
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
                <div className="col-sm-6 col-md-4 col-xl-6">
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
                <div className="col-sm-6 col-md-4 col-xl-6">
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
                <div className="col-sm-6 col-md-4 col-xl-6">
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
                        <div className="col-6">
                          <Link to="/booking" className="btn book-btn">Book Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-xl-6">
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
              <div className="load-more text-center">
                <a className="btn btn-primary btn-sm" href="">Load More</a>	
              </div>
            </div>
            {/* /content-left*/}
            {/* map-right*/}
            <div className="col-xl-6 col-lg-12 map-right">
				<Map places={data} center={{ lat: -24.9923319, lng: 135.2252427 }} />
              {/* map*/}
            </div>
            {/* /map-right*/}
          </div>	   
        </div>
      </div>		
      {/* /Page Content */}
			</>
        )
    }
}
export default StylistGrid;