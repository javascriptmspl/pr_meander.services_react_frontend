import React from "react";
import config from "config";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
//home
import Home from "./components/home/index.jsx";
//our stylists
import StylistDashboard from "./components/stylist/stylist_dashboard";
import Appointments from "./components/stylist/appointments";
import ScheduleTimings from "./components/stylist/schedule_timings";
import MyConsultant from "./components/stylist/my_consultants";
import ConsultantProfile from "./components/consultants/cunsultant_profile";
import AddBilling from "./components/billing/add_billing";
import EditBilling from "./components/billing/edit_billing";
import AddFollowUp from "./components/billing/add_follow_up";
import EditFollowUp from "./components/billing/edit_follow_up";
import Invoices from "./components/stylist/invoices";
import ChatStylist from "./components/stylist/chat";
import StylistProfileSettings from "./components/stylist/stylist_profile_settings";
import Reviews from "./components/stylist/reviews";
import StylistRegister from "./components/stylist/stylist_register";
import SocialMedia from "./components/stylist/social_media";
import StylistChangePassword from "./components/stylist/stylist_change_password";
//consultants
import StylistGrid from "./components/consultants/stylist_grid";
import StylistList from "./components/consultants/stylist_list";
import Search from "./components/consultants/search";
import StylistProfile from "./components/consultants/stylist_profile";
import Booking from "./components/consultants//booking";
import Checkout from "./components/consultants/checkout";
import BookingSuccess from "./components/consultants/booking_success";
import ConsultantDashboard from "./components/consultants/consultant_dashboard";
import Favourites from "./components/consultants/favourites";
import Chat from "./components/consultants/chat";
import ChangePassword from "./components/consultants/change_password";
import ProfileSettings from "./components/consultants/profile_settings";
//pages
import VoiceCall from "./components/pages/voice_call";
import VideoCall from "./components/pages/video_call";
import Calendar from "./components/pages/calendar";
import Components from "./components/pages/components";
import InvoiceView from "./components/pages/invoice_view";
import BlankPage from "./components/pages/blank_page";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import ForgotPassword from "./components/pages/forgot_password";
//blog
import BlogList from "./components/blogs/blog_list";
import BlogGrid from "./components/blogs/blog_grid";
import BlogDetails from "./components/blogs/blog_details";

import PrivacyPolicy from "./components/privacyPages/privacy_policy";
import TermsCondition from "./components/privacyPages/term_condition";
// CSS Files
// Bootstrap CSS
import './assets/css/bootstrap.min.css';
// Font Awesome
import './assets/plugins/fontawesome/css/fontawesome.min.css';
import './assets/plugins/fontawesome/css/all.min.css';
//Fancybox JS
import './assets/plugins/fancybox/jquery.fancybox.min.css';
import './assets/plugins/fancybox/jquery.fancybox.min.js';
// Custom CSS
import './assets/css/style.css';
import './assets/js/bootstrap.bundle.min.js';
import './assets/js/script.js';

const AppUniversal = () => {
  return (
    <Router basename={`${config.publicPath}`}>
      <div className="main-wrapper">
        <Route render={(props) => <Header {...props} />} />
        <Switch>
          {/* home  set the path as  */}
          <Route exact path="/" element={<Home/>} /> 
          {/* stylists */}
          <Route exact path="/stylist-dashboard" element={<StylistDashboard/>} />
          <Route exact path="/appointments" component={Appointments} />
          <Route exact path="/schedule-timings" component={ScheduleTimings} />
          <Route exact path="/my-consultants" component={MyConsultant} />
          <Route exact path="/consultant-profile" component={ConsultantProfile} />
          <Route exact path="/add-billing" component={AddBilling} />
          <Route exact path="/edit-billing" component={EditBilling} />
          <Route exact path="/add-followup" component={AddFollowUp} />
          <Route exact path="/edit-followup" component={EditFollowUp} />
          <Route exact path="/invoices" component={Invoices} />
          <Route exact path="/stylist-profile-settings" component={StylistProfileSettings} />
          <Route exact path="/reviews" component={Reviews} />
          <Route exact path="/chat-stylist" component={ChatStylist} />
          <Route exact path="/stylist-register" component={StylistRegister} />
          <Route exact path="/social-media" component={SocialMedia} />
          <Route exact path="/stylist-change-password" component={StylistChangePassword} />
          {/* consultants */}
          <Route exact path="/map-grid" component={StylistGrid} />
          <Route exact path="/map-list" component={StylistList} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/stylist-profile" component={StylistProfile} />
          <Route exact path="/booking" component={Booking} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/booking-success" component={BookingSuccess} />
          <Route exact path="/consultant-dashboard" component={ConsultantDashboard} />
          <Route exact path="/favourites" component={Favourites} />
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/change-password" component={ChangePassword} />
          <Route exact path="/profile-settings" component={ProfileSettings} />
          {/* pages */}
          <Route exact path="/voice-call" component={VoiceCall} />
          <Route exact path="/video-call" component={VideoCall} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/components" component={Components} />
          <Route exact path="/invoice-view" component={InvoiceView} />
          <Route exact path="/blank-page" component={BlankPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          {/* blog */}
          <Route exact path="/blog-list" component={BlogList} />
          <Route exact path="/blog-grid" component={BlogGrid} />
          <Route exact path="/blog-details" component={BlogDetails} />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Route exact path="/terms-condition" component={TermsCondition} />
        </Switch>
        <Route render={(props) => <Footer {...props} />} />
      </div>
    </Router>
  );
};

export default AppUniversal;
