import React, { Component } from "react";
import { Link } from "react-router-dom";
// Import Slick Slider
import Slider from "react-slick";
// Import Images
import {Beauty,Beicon,ProdIcon,service_01,service_02,service_03,service_04,service_05,service_06,
    Equ_01,Equ_02,Equ_03,Equ_04,Calender,news_01,news_02,news_03,news_04,news_05,news_06,
    stylist_01,stylist_02,stylist_03,stylist_04,stylist_05,stylist_06,stylist_07,BB_img,Bag,Team1,
    Team2,Team3,Team4,Team5,Team6,Course_01,Course_02,Course_03,Course_04,Course_05,Course_06,provider_thumb_01,
    provider_thumb_02,provider_thumb_03,provider_thumb_04,provider_thumb_05,provider_thumb_06   } from "../imagepath"
  var slideIndex = 1
class Home extends Component {
    
    componentDidMount(){
        this.showSlides(slideIndex);
    }
    plusSlides(n) {
        slideIndex = slideIndex + n 
        this.showSlides(slideIndex);
    }
    
    // Thumbnail image controls
    currentSlide(n) {
        slideIndex = n
        this.showSlides(n);
    }
    showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("testi-user-img");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }
    
    
    myStylist() {
        window.location.href = "/stylist-profile";
    }
    myBlog() {
        window.location.href = "/blog-details";
    }
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 700,
            slidesToShow: 4,
            slidesToScroll: 1,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 776,
					settings: {
						slidesToShow: 2
				  	}
			},
			{
				breakpoint: 567,
					settings: {
						slidesToShow: 1
					}
			}]
        };
        var newssettings = {
            dots: false,
            infinite: true,
            speed: 700,
            slidesToShow: 3,
            slidesToScroll: 1,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 776,
					settings: {
						slidesToShow: 2
				  	}
			},
			{
				breakpoint: 567,
					settings: {
						slidesToShow: 1
					}
			}]
        };
        return (
            <>                
             {/* Home Banner */}
                <section className="section section-banner">
                    <div className="container">
                        <div className="banner-wrapper">
                        <div className="banner-header text-center">
                            <img src={Beauty} className="mb-4" alt="beauty-icon" />
                            <h3>CREATIVE STYLIST’S</h3>
                            <h2 className="mb-0">BEAUTY SALON </h2> 
                            <h2> FASHION FOR WOMAN &amp; MEN’S</h2>
                            <div className="d-flex justify-content-center">
                            <Link to="/login" className="bg-btn">Get Started</Link>
                            <Link to="/map-list" className="out-btn">All Stylists</Link>
                            </div>
                        </div>						
                        </div>
                    </div>
                </section>
                {/* /Home Banner */}
                {/* Beauty Select */}
                <section className="beauty-select">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 beauty-sel1">
                                <div className="beauty-wrap">
                                <div className="overlay-content">	
                                    <div className="beauty-content">
                                    <a href="#" className="beauty-icon">
                                        <img src={Beicon} alt="beauty-icon" />
                                    </a>
                                    <h3>Stylists</h3>
                                    <Link to="/map-grid"><h2>Experienced Stylist's</h2></Link>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. nc vulputate aliquam in.Lorem ipsum d</p>
                                    <Link to="/map-grid" className="view-all">View All</Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 beauty-sel2">
                                <div className="beauty-wrap">
                                <div className="overlay-content">	
                                    <div className="beauty-content">
                                    <a href="#" className="beauty-icon">
                                        <img src={ProdIcon} alt="beauty-icon" />
                                    </a>
                                    <h3>Consultants</h3>
                                    <Link to="/my-consultants"><h2>Find Beauty Consultants</h2></Link>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. nc vulputate aliquam in.Lorem ipsum d</p>
                                    <Link to="/my-consultants" className="view-all">Know more</Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6" />
                        </div>
                    </div>
                </section>
                {/* /Beauty Select */}
                {/* Services */}
                <section className="services">
                    <div className="container">					
                        <div className="section-header text-center">
                            <img src={Beauty} className="mb-3" alt="beauty-icon" />
                            <h2>Our Services</h2>
                            <p>Parlour’s talented team specializes in customized haiecuts, color &amp; waxing services to create unique looks for every client.</p>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <Slider {...settings} className="service provider-slider">
                                {/* <div className="service provider-slider slider"> */}
                                    {/* Service Widget */}
                                    <div className="profile-widget">
                                        <div className="pro-img">
                                        <Link to="/stylist-dashboard">
                                            <img className="img-fluid" alt="User Image" src={service_01} />
                                        </Link>
                                        </div>
                                        <div className="pro-content text-center">
                                        <h3 className="title">
                                            <Link to="/stylist-dashboard">Hair Cuts</Link> 
                                        </h3>
                                        <p className="speakers-pro">200 Stylists</p>			
                                        <Link to="/booking" className="now-btn">Book now </Link>
                                        <img src={Equ_01} alt="" className="equ-img" />
                                        </div>
                                    </div>
                                    {/* /Service Widget */}
                                    {/* Service Widget */}
                                    <div className="profile-widget">
                                        <div className="pro-img">
                                        <Link to="/stylist-dashboard">
                                            <img className="img-fluid" alt="User Image" src={service_02} />
                                        </Link>
                                        </div>
                                        <div className="pro-content text-center">
                                        <h3 className="title">
                                            <Link to="/stylist-dashboard">Makeup</Link> 
                                        </h3>
                                        <p className="speakers-pro">200 Stylists</p>								
                                        <div className="row row-sm align-items-center d-flex">
                                            <div className="col-12">
                                            <Link to="/booking" className="now-btn">Book now </Link>
                                            </div>
                                            <img src={Equ_02} alt="" className="equ-img small" />
                                        </div>
                                        </div>
                                    </div>
                                    {/* /Service Widget */}
                                    {/* Service Widget */}
                                    <div className="profile-widget">
                                        <div className="pro-img">
                                        <Link to="/stylist-dashboard">
                                            <img className="img-fluid" alt="User Image" src={service_03} />
                                        </Link>
                                        </div>
                                        <div className="pro-content text-center">
                                        <h3 className="title">
                                            <Link to="/stylist-dashboard">Brow</Link> 
                                        </h3>
                                        <p className="speakers-pro">200 Stylists</p>								
                                        <div className="row row-sm align-items-center d-flex">
                                            <div className="col-12">
                                            <Link to="/booking" className="now-btn">Book now</Link>
                                            </div>
                                            <img src={Equ_03} alt="" className="equ-img" />
                                        </div>
                                        </div>
                                    </div>
                                    {/* /Service Widget */}
                                    {/* Service Widget */}
                                    <div className="profile-widget">
                                        <div className="pro-img">
                                        <Link to="/stylist-dashboard">
                                            <img className="img-fluid" alt="User Image" src={service_04} />
                                        </Link>
                                        </div>
                                        <div className="pro-content text-center">
                                        <h3 className="title">
                                            <Link to="/stylist-dashboard">Cosmetology</Link> 
                                        </h3>
                                        <p className="speakers-pro">200 Stylists</p>								
                                        <div className="row row-sm align-items-center d-flex">
                                            <div className="col-12">
                                            <Link to="/booking" className="now-btn">Book now</Link>
                                            </div>
                                            <img src={Equ_04} alt="" className="equ-img" />
                                        </div>
                                        </div>
                                    </div>
                                    {/* /Service Widget */}
                                    {/* Service Widget */}
                                    <div className="profile-widget">
                                        <div className="pro-img">
                                        <Link to="/stylist-dashboard">
                                            <img className="img-fluid" alt="User Image" src={service_05} />
                                        </Link>
                                        </div>
                                        <div className="pro-content text-center">
                                        <h3 className="title">
                                            <Link to="/stylist-dashboard">Facial</Link> 
                                        </h3>
                                        <p className="speakers-pro">200 Stylists</p>								
                                        <div className="row row-sm align-items-center d-flex">
                                            <div className="col-12">
                                            <Link to="/booking" className="now-btn">Book now</Link>
                                            </div>
                                            <img src={Equ_01} alt="" className="equ-img" />
                                        </div>
                                        </div>
                                    </div>
                                    {/* /Service Widget */}
                                    {/* Service Widget */}
                                    <div className="profile-widget">
                                        <div className="pro-img">
                                        <Link to="/stylist-dashboard">
                                            <img className="img-fluid" alt="User Image" src={service_06} />
                                        </Link>
                                        </div>
                                        <div className="pro-content text-center">
                                        <h3 className="title">
                                            <Link to="/stylist-dashboard">Pedicure</Link> 
                                        </h3>
                                        <p className="speakers-pro">200 Stylists</p>								
                                        <div className="row row-sm align-items-center d-flex">
                                            <div className="col-12">
                                            <Link to="/booking" className="now-btn">Book now</Link>
                                            </div>
                                            <img src={Equ_02} alt="" className="equ-img small" />
                                        </div>
                                        </div>
                                    </div>
								</Slider>
                                    {/* /Service Widget */}
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <Link to="/map-list" className="more-btn">More Services</Link>
                        </div>
                    </div>
                </section>
                {/* /Services */}
                {/* Upcoming Course */}
                <section className="courses">
                <div className="container">					
                    <div className="section-header text-center">
                    <img src={Beauty} className="mb-3" alt="beauty-icon" />
                    <h2>Upcoming Courses</h2>
                    <p>Our talanted specialists are ready to share their secrets. Don’t loose this opportunity, join the course.</p>
                    </div>
                    <div className="row">
                    <div className="col-md-12">
                        <Slider {...settings} className="course provider-slider">
                            {/* <div className="course provider-slider slider"> */}
                            {/* Service Widget */}
                            <div className="profile-widget">
                                <div className="pro-img">
                                <a href="/stylist-profile">
                                    <img className="img-fluid" src={Course_01} alt="" />
                                </a>
                                </div>
                                <div className="pro-content">
                                <a href="/stylist-profile" className="user-img">
                                    <img src={provider_thumb_01} alt="" />
                                </a>
                                <h3 className="title">
                                    <span>20-26 March</span>
                                    <a href="/stylist-profile">Clipper Cut &amp; Bang Trim - BASIC</a> 
                                </h3>
                                <p className="speakers-pro">$400</p>					
                                <a href="/booking" className="now-btn">Book now </a>
                                </div>
                            </div>
                            {/* /Service Widget */}
                            {/* Service Widget */}
                            <div className="profile-widget">
                                <div className="pro-img">
                                <a href="/stylist-profile">
                                    <img className="img-fluid" alt="User Image" src={Course_02} />
                                </a>
                                </div>
                                <div className="pro-content">
                                <a href="/stylist-profile" className="user-img">
                                    <img src={provider_thumb_02} alt="" />
                                </a>
                                <h3 className="title">
                                    <span>20-26 March</span>
                                    <a href="/stylist-profile">Clipper Cut &amp; Bang Trim - BASIC</a> 
                                </h3>
                                <p className="speakers-pro">$400</p>
                                <a href="/booking" className="now-btn">Book now </a>
                                </div>
                            </div>
                            {/* /Service Widget */}
                            {/* Service Widget */}
                            <div className="profile-widget">
                                <div className="pro-img">
                                <a href="/stylist-profile">
                                    <img className="img-fluid" alt="User Image" src={Course_03} />
                                </a>
                                </div>
                                <div className="pro-content">
                                <a href="/stylist-profile" className="user-img">
                                    <img src={provider_thumb_03} alt="" />
                                </a>
                                <h3 className="title">
                                    <span>20-26 March</span>
                                    <a href="/stylist-profile">Clipper Cut &amp; Bang Trim - BASIC</a> 
                                </h3>
                                <p className="speakers-pro">$400</p>
                                <a href="/booking" className="now-btn">Book now </a>
                                </div>
                            </div>
                            {/* /Service Widget */}
                            {/* Service Widget */}
                            <div className="profile-widget">
                                <div className="pro-img">
                                <a href="/stylist-profile">
                                    <img className="img-fluid" alt="User Image" src={Course_04} />
                                </a>
                                </div>
                                <div className="pro-content">
                                <a href="/stylist-profile" className="user-img">
                                    <img src={provider_thumb_04} alt="" />
                                </a>
                                <h3 className="title">
                                    <span>20-26 March</span>
                                    <a href="/stylist-profile">Clipper Cut &amp; Bang Trim - BASIC</a> 
                                </h3>
                                <p className="speakers-pro">$400</p>
                                <a href="/booking" className="now-btn">Book now </a>
                                </div>
                            </div>
                            {/* /Service Widget */}
                            {/* Service Widget */}
                            <div className="profile-widget">
                                <div className="pro-img">
                                <a href="/stylist-profile">
                                    <img className="img-fluid" alt="User Image" src={Course_05} />
                                </a>
                                </div>
                                <div className="pro-content">
                                <a href="/stylist-profile" className="user-img">
                                    <img src={provider_thumb_05} alt="" />
                                </a>
                                <h3 className="title">
                                    <span>20-26 March</span>
                                    <a href="/stylist-profile">Clipper Cut &amp; Bang Trim - BASIC</a> 
                                </h3>
                                <p className="speakers-pro">$400</p>	
                                <a href="/booking" className="now-btn">Book now </a>
                                </div>
                            </div>
                            {/* /Service Widget */}
                            {/* Service Widget */}
                            <div className="profile-widget">
                                <div className="pro-img">
                                <a href="/stylist-profile">
                                    <img className="img-fluid" alt="User Image" src={Course_06} />
                                </a>
                                </div>
                                <div className="pro-content">
                                <a href="/stylist-profile" className="user-img">
                                    <img src={provider_thumb_06} alt="" />
                                </a>
                                <h3 className="title">
                                    <span>20-26 March</span>
                                    <a href="/stylist-profile">Clipper Cut &amp; Bang Trim - BASIC</a> 
                                </h3>
                                <p className="speakers-pro">$400</p>
                                <a href="/booking" className="now-btn">Book now </a>
                                </div>
                            </div>
                            {/* /Service Widget */}
                        </Slider>
                    </div>
                    </div>
                    <div className="row justify-content-center">
                    <a href="/map-grid" className="more-btn">More Services</a>
                    </div>
                </div>
                </section>
                {/* /Upcoming Course */}
                {/* Trending Stylists */}
                <section className="stylists">
                <div className="container">
                    <div className="section-header text-center">
                    <img src={Beauty} className="mb-3" alt="beauty-icon" />
                    <h2>Trending Stylists</h2>
                    <p>Our professional team is ready to provide the greatest service you’ve ever had.</p>
                    </div>
                    <div className="row">
                    <div className="col-md-12">
                        <Slider {...settings} className="stylists provider-slider">
                        {/* Service Widget */}
                        <div className="profile-widget">
                            <div className="pro-img">
                            <img className="img-fluid" alt="User Image" src={Team5} />
                            <div className="stylist-content" onClick={()=>this.myStylist()}>
                                <div className="stylist-info">
                                <div className="info-content">							
                                    <div className="rating">
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star" />
                                    </div>
                                    <h3><a href="/stylist-profile"> Jim Carry</a></h3>
                                    <p>Haircut, Makeup</p>
                                    <div className="row row-sm">
                                    <div className="col-6">
                                        <span className="d-flex img-small">
                                        <img src={BB_img} alt="" />
                                        <span>200</span>
                                        </span>
                                    </div>
                                    <div className="col-6">
                                        <span className="d-flex img-small">
                                        <img src={Bag} alt="" />
                                        <span>$1500/Hr</span>
                                        </span>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="pro-content text-center p-0">				
                            <a href="/booking" className="now-btn">Book now</a>
                            </div>
                        </div>
                        {/* /Service Widget */}
                        {/* Service Widget */}
                        <div className="profile-widget">
                            <div className="pro-img">
                            <img className="img-fluid" alt="User Image" src={Team1} />
                            <div className="stylist-content" onClick={()=>this.myStylist()}>
                                <div className="stylist-info">
                                <div className="info-content">							
                                    <div className="rating">
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star" />
                                    </div>
                                    <h3><a href="/stylist-profile">Liliya Fox</a></h3>
                                    <p>Masseur</p>
                                    <div className="row row-sm">
                                    <div className="col-6">
                                        <span className="d-flex img-small">
                                        <img src={BB_img} alt="" />
                                        <span>200</span>
                                        </span>
                                    </div>
                                    <div className="col-6">
                                        <span className="d-flex img-small">
                                        <img src={Bag} alt="" />
                                        <span>$1500/Hr</span>
                                        </span>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="pro-content text-center p-0">
                            <a href="/booking" className="now-btn">Book now</a>
                            </div>
                        </div>
                        {/* /Service Widget */}
                        {/* Service Widget */}
                        <div className="profile-widget">
                            <div className="pro-img">
                            <img className="img-fluid" alt="User Image" src={Team2} />
                            <div className="stylist-content" onClick={()=>this.myStylist()}>
                                <div className="stylist-info">
                                <div className="info-content">	
                                    <div className="rating">
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star" />
                                    </div>
                                    <h3><a href="/stylist-profile">Carolina Miller</a></h3>
                                    <p>Haircut , Makeup</p>
                                    <div className="row row-sm">
                                    <div className="col-6">
                                        <span className="d-flex img-small">
                                        <img src={BB_img} alt="" />
                                        <span>200</span>
                                        </span>
                                    </div>
                                    <div className="col-6">
                                        <span className="d-flex img-small">
                                        <img src={Bag} alt="" />
                                        <span>$1500/Hr</span>
                                        </span>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="pro-content text-center p-0">
                            <a href="/booking" className="now-btn">Book now</a>
                            </div>
                        </div>
                        {/* /Service Widget */}
                        {/* Service Widget */}
                        <div className="profile-widget">
                            <div className="pro-img">
                            <img className="img-fluid" alt="User Image" src={Team3} />
                            <div className="stylist-content" onClick={()=>this.myStylist()}>
                                <div className="stylist-info">
                                <div className="info-content">							
                                    <div className="rating">
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star" />
                                    </div>
                                    <h3><a href="/stylist-profile">Aaron</a></h3>
                                    <p>Haircut</p>
                                    <div className="row row-sm">
                                    <div className="col-6">
                                        <span className="d-flex img-small">
                                        <img src={BB_img} alt="" />
                                        <span>200</span>
                                        </span>
                                    </div>
                                    <div className="col-6">
                                        <span className="d-flex img-small">
                                        <img src={Bag} alt="" />
                                        <span>$1500/Hr</span>
                                        </span>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="pro-content text-center p-0">
                            <a href="/booking" className="now-btn">Book now</a>
                            </div>
                        </div>
                        {/* /Service Widget */}
                        {/* Service Widget */}
                        <div className="profile-widget">
                            <div className="pro-img">
                            <img className="img-fluid" alt="User Image" src={Team4} />
                            <div className="stylist-content" onClick={()=>this.myStylist()}>
                                <div className="stylist-info">
                                <div className="info-content">							
                                    <div className="rating">
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star" />
                                    </div>
                                    <h3><a href="/stylist-profile">Toya Head</a></h3>
                                    <p>Haircut</p>
                                    <div className="row row-sm">
                                    <div className="col-6">
                                        <span className="d-flex img-small">
                                        <img src={BB_img} alt="" />
                                        <span>200</span>
                                        </span>
                                    </div>
                                    <div className="col-6">
                                        <span className="d-flex img-small">
                                        <img src={Bag} alt="" />
                                        <span>$1500/Hr</span>
                                        </span>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="pro-content text-center p-0">	
                            <a href="/booking" className="now-btn">Book now</a>	
                            </div>
                        </div>
                        {/* /Service Widget */}
                        {/* Service Widget */}
                        <div className="profile-widget">
                            <div className="pro-img">
                            <img className="img-fluid" alt="User Image" src={Team6} />
                            <div className="stylist-content" onClick={()=>this.myStylist()}>
                                <div className="stylist-info">
                                <div className="info-content">							
                                    <div className="rating">
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star" />
                                    </div>
                                    <h3><a href="/stylist-profile">Felia Snead</a></h3>
                                    <p>Haircut</p>
                                    <div className="row row-sm">
                                    <div className="col-6">
                                        <span className="d-flex img-small">
                                        <img src={BB_img} alt="" />
                                        <span>200</span>
                                        </span>
                                    </div>
                                    <div className="col-6">
                                        <span className="d-flex img-small">
                                        <img src={Bag} alt="" />
                                        <span>$1500/Hr</span>
                                        </span>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="pro-content text-center p-0">
                            <a href="/booking" className="now-btn">Book now</a>
                            </div>
                        </div>
                        {/* /Service Widget */}								
                        </Slider>
                    </div>
                    </div>
                </div>
                </section>
                {/* /Trending Stylists */}
                {/* Featured Stylists */}
                <section className="feature-stylist beauty-select">
                    <div className="container">
                        <div className="section-header text-center">
                            <img src={Beauty} className="mb-3" alt="beauty-icon" />
                            <h2>FEATURED STYLISTS</h2>
                            <p>They are highly qualified and trained in their areas</p>
                        </div>
                        <div className="row feature-stylist">
                            <div className="col-md-6 col-lg-6">
                                <div className="beauty-wrap">
                                    <div className="overlay-content">	
                                        <div className="beauty-content">
                                        <div className="d-flex align-items-center mb-4">
                                            <a href="/stylist-profile" className="mr-3">
                                            <img src={stylist_01} alt="beauty-icon" />
                                            </a>
                                            <div className="stylist-detail">
                                            <h3><a href="/stylist-profile">Antony</a></h3>
                                            <div className="row row-sm align-items-center mb-3">
                                                <div className="col-6 col-md-12 col-lg-6">
                                                <h5>Makeup Artist</h5>
                                                </div>
                                                <div className="col-6 col-md-12 col-lg-6 text-right">
                                                <div className="rating">
                                                    <i className="fas fa-star filled" />
                                                    <i className="fas fa-star filled" />
                                                    <i className="fas fa-star filled" />
                                                    <i className="fas fa-star filled" />
                                                    <i className="fas fa-star" />
                                                </div>
                                                </div>
                                            </div>
                                            <p>This informative and interactive hands on experience is designed to educate you to achieve the look you've always wanted such as the perfect smoky eye</p>
                                            </div>
                                        </div>
                                        <div className="row row-sm">
                                            <div className="col-12 col-md-4">
                                            <div className="row row-sm">
                                                <div className="col-6">
                                                <span className="d-flex img-small">
                                                    <img src={BB_img} alt="" />
                                                    <span>200</span>
                                                </span>
                                                </div>
                                                <div className="col-6">
                                                <span className="d-flex img-small">
                                                    <img src={Bag} alt="" />
                                                    <span>$1500/Hr</span>
                                                </span>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="col-12 col-md-8 text-right">
                                            <a href="/stylist-dashboard" className="viewpro-btn">View Profile <i className="fas fa-chevron-circle-right" /></a>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="beauty-wrap">
                                    <div className="overlay-content">	
                                        <div className="beauty-content">
                                            <div className="d-flex align-items-center mb-4">
                                                <a href="/stylist-profile" className="mr-3">
                                                <img src={stylist_02} alt="beauty-icon" />
                                                </a>
                                                <div className="stylist-detail">
                                                <h3> <a href="/stylist-profile"> Antony </a></h3>
                                                <div className="row row-sm mb-3">
                                                    <div className="col-6 col-md-12 col-lg-6">
                                                    <h5>Makeup Artist</h5>
                                                    </div>
                                                    <div className="col-6 col-md-12 col-lg-6 text-right">
                                                    <div className="rating">
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star" />
                                                    </div>
                                                    </div>
                                                </div>
                                                <p>This informative and interactive hands on experience is designed to educate you to achieve the look you've always wanted such as the perfect smoky eye</p>
                                                </div>
                                            </div>
                                            <div className="row row-sm">
                                                <div className="col-12 col-md-4">
                                                <div className="row row-sm">
                                                    <div className="col-6">
                                                    <span className="d-flex img-small">
                                                        <img src={BB_img} alt="" />
                                                        <span>200</span>
                                                    </span>
                                                    </div>
                                                    <div className="col-6">
                                                    <span className="d-flex img-small">
                                                        <img src={Bag} alt="" />
                                                        <span>$1500/Hr</span>
                                                    </span>
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="col-12 col-md-8 text-right">
                                                <a href="/stylist-dashboard" className="viewpro-btn">View Profile <i className="fas fa-chevron-circle-right" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>					
                        <div className="row justify-content-center">
                            <a href="/stylist-profile" className="more-btn bg-primary mt-3">Become an Stylist</a>
                        </div>
                    </div>
                </section>
                {/* /Featured Stylists */}
                {/* Reviews */}
                <section className="reviews">
                    <div className="container">
                        <div className="section-header text-center">
                        <img src={Beauty} className="mb-3" alt="beauty-icon" />
                        <h2>REVIEWS</h2>
                        <p>They are highly qualified and trained in their areas</p>
                        </div>
                        <div className="testimonial-container">
                        {/* Testimonial Images */}
                        <div className="row image-row">
                            <a className="prev" onClick={()=>this.plusSlides(-1)}>❮</a>
                            <img className="testi-user-img cursor" src={stylist_01} onClick={()=>this.currentSlide(1)} alt="User" />	
                            <img className="testi-user-img cursor" src={stylist_02} onClick={()=>this.currentSlide(2)} alt="User" />
                            <img className="testi-user-img cursor" src={stylist_03} onClick={()=>this.currentSlide(3)} alt="User" />
                            <img className="testi-user-img cursor" src={stylist_04} onClick={()=>this.currentSlide(4)} alt="User" />
                            <img className="testi-user-img cursor" src={stylist_05} onClick={()=>this.currentSlide(5)} alt="User" />
                            <img className="testi-user-img cursor" src={stylist_06} onClick={()=>this.currentSlide(6)} alt="User" />
                            <img className="testi-user-img cursor" src={stylist_07} onClick={()=>this.currentSlide(7)} alt="User" />
                            <a className="next" onClick={()=>this.plusSlides(1)}>❯</a>
                        </div>
                        {/* Testimonial Contents */}
                        <div className="mySlides text-center">
                            <h3>Daicey Becker</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat sed fermentum, eget tincidunt aliquet. Et, amet, scelerisque ultrices fermentum, adipiscing</p>
                            <h4>Matohinsda - <span> Makeup Artist </span></h4>
                        </div>
                        <div className="mySlides text-center">
                            <h3>Allta Slocum</h3>
                            <p>Quam eu tellus congue ridiculus quam scelerisque sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat sed fermentum, eget tincidunt.</p>
                            <h4>Amil Warfield - <span> Makeup Artist </span></h4>
                        </div>
                        <div className="mySlides text-center">
                            <h3>Phauns Molina</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <h4>Lilibeth - <span> Makeup Artist </span></h4>
                        </div>
                        <div className="mySlides text-center">
                            <h3>Aurora Earl</h3>
                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
                            <h4>Noach Rossi - <span> Makeup Artist </span></h4>
                        </div>
                        <div className="mySlides text-center">
                            <h3>Tibold Staples</h3>
                            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur</p>
                            <h4>Tore Reis - <span> Makeup Artist </span></h4>
                        </div>
                        <div className="mySlides text-center">
                            <h3>Lowretta</h3>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                            <h4>Dyna Alger - <span> Makeup Artist </span></h4>
                        </div>
                        <div className="mySlides text-center">
                            <h3>Murdock</h3>
                            <p>similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis.</p>
                            <h4>Blandino - <span> Makeup Artist </span></h4>
                        </div>
                        </div>
                    </div>
                </section>
                {/* /Reviews */}
                {/* News */}
                <section className="news">
                <div className="container">
                    <div className="section-header text-center">
                        <img src={Beauty} className="mb-3" alt="beauty-icon" />
                        <h2>NEWS</h2>
                        <p>Checkout our Latest Feed and Events</p>
                    </div>
                    <Slider {...newssettings} className="row carousel review">
                        <div className="card">
                            <div className="card-content">
                            <div className="news-wrapper">
                                <div className="pro-img">
                                <img className="img-fluid" alt="User Image" src={news_01} />
                                <div className="overlay" onClick={()=>this.myBlog()}>
                                    <div className="overlay-border" />
                                </div>
                                </div>
                                <div className="pro-content">
                                <p><img src={Calender} alt="" className="mr-2 float-left" />Janauary 13, 2021</p>
                                <h3 className="title">
                                    <a href="/blog-details">Looks reasonable. The generate is therefore always.</a> 
                                </h3>					
                                <a href="/booking" className="now-btn">Book now </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-content">
                            <div className="news-wrapper">
                                <div className="pro-img">
                                <img className="img-fluid" alt="User Image" src={news_02} />
                                <div className="overlay" onClick={()=>this.myBlog()}>
                                    <div className="overlay-border" />
                                </div>
                                </div>
                                <div className="pro-content">
                                <p><img src={Calender} alt="" className="mr-2 float-left" />Janauary 13, 2021</p>
                                <h3 className="title">
                                    <a href="/blog-details">Looks reasonable. The generate is therefore always.</a> 
                                </h3>
                                <a href="/booking" className="now-btn">Book now </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-content">
                            <div className="news-wrapper">
                                <div className="pro-img">
                                <img className="img-fluid" alt="User Image" src={news_03} />
                                <div className="overlay" onClick={()=>this.myBlog()}>
                                    <div className="overlay-border" />
                                </div>
                                </div>
                                <div className="pro-content">
                                <p><img src={Calender} alt="" className="mr-2 float-left" />Janauary 13, 2021</p>
                                <h3 className="title">
                                    <a href="/blog-details">Looks reasonable. The generate is therefore always.</a> 
                                </h3>
                                <a href="/booking" className="now-btn">Book now </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* second row */}
                        <div className="card">
                            <div className="card-content">
                            <div className="news-wrapper">
                                <div className="pro-img">
                                <a href="#">
                                    <img className="img-fluid" alt="User Image" src={news_04} />
                                </a>
                                <div className="overlay">
                                    <div className="overlay-border" />
                                </div>
                                </div>
                                <div className="pro-content">
                                <p><img src={Calender} alt="" className="mr-2 float-left" />Janauary 13, 2021</p>
                                <h3 className="title">
                                    <a href="#">Looks reasonable. The generate is therefore always.</a> 
                                </h3>	
                                <a href="/booking" className="now-btn">Book now </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-content">
                                <div className="news-wrapper">
                                    <div className="pro-img">
                                        <a href="#">
                                            <img className="img-fluid" alt="User Image" src={news_05} />
                                        </a>
                                        <div className="overlay">
                                            <div className="overlay-border" />
                                        </div>
                                    </div>
                                    <div className="pro-content">
                                        <p><img src={Calender} alt="" className="mr-2 float-left" />Janauary 13, 2021</p>
                                        <h3 className="title">
                                            <a href="#">Looks reasonable. The generate is therefore always.</a> 
                                        </h3>
                                        <a href="/booking" className="now-btn">Book now </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                        <div className="card-content">
                            <div className="news-wrapper">
                                <div className="pro-img">
                                    <a href="#">
                                        <img className="img-fluid" alt="User Image" src={news_06} />
                                    </a>
                                    <div className="overlay">
                                        <div className="overlay-border" />
                                    </div>
                                </div>
                                <div className="pro-content">
                                    <p><img src={Calender} alt="" className="mr-2 float-left" />Janauary 13, 2021</p>
                                    <h3 className="title">
                                        <a href="#">Looks reasonable. The generate is therefore always.</a> 
                                    </h3>	
                                    <a href="/booking" className="now-btn">Book now </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Slider>
                </div>
                </section>
                {/* /News */}
            </>
        )
    }
}
export default Home;