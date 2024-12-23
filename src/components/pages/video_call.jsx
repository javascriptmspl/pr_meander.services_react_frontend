import React from 'react';
import { Link } from "react-router-dom";
// Import Image
import { UserAvatar1,VideoCall_Img } from '../imagepath';

class VideoCall extends React.Component {

	
    render() {
        return (
			<>
			 {/* Page Content */}
			 <div className="content">
        <div className="container-fluid">
          {/* Call Wrapper */}
          <div className="call-wrapper">
            <div className="call-main-row">
              <div className="call-main-wrapper">
                <div className="call-view">
                  <div className="call-window">
                    {/* Call Header */}
                    <div className="fixed-header">
                      <div className="navbar">
                        <div className="user-details">
                          <div className="float-left user-img">
                            <Link className="avatar avatar-sm mr-2" to="/consultant-profile" title="Faviola Stegall">
                              <img src={UserAvatar1} alt="User Image" className="rounded-circle" />
                              <span className="status online" />
                            </Link>
                          </div>
                          <div className="user-info float-left">
                            <Link to="/consultant-profile"><span>Faviola Stegall</span></Link>
                            <span className="last-seen">Online</span>
                          </div>
                        </div>
                        <ul className="nav float-right custom-menu">
                          <li className="nav-item dropdown dropdown-action">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-cog" /></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a href="" className="dropdown-item">Settings</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Call Header */}
                    {/* Call Contents */}
                    <div className="call-contents">
                      <div className="call-content-wrap">
                        <div className="user-video">
                          <img src={VideoCall_Img} alt="User Image" />
                        </div>
                        <div className="my-video">
                          <ul>
                            <li>
                              <img src={UserAvatar1} className="img-fluid" alt="User Image" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Call Contents */}
                    {/* Call Footer */}
                    <div className="call-footer">
                      <div className="call-icons">
                        <span className="call-duration">00:59</span>
                        <ul className="call-items">
                          <li className="call-item">
                            <a href="" title="Enable Video" data-placement="top" data-toggle="tooltip">
                              <i className="fas fa-video camera" />
                            </a>
                          </li>
                          <li className="call-item">
                            <a href="" title="Mute Audio" data-placement="top" data-toggle="tooltip">
                              <i className="fa fa-microphone microphone" />
                            </a>
                          </li>
                          <li className="call-item">
                            <a href="" title="Add User" data-placement="top" data-toggle="tooltip">
                              <i className="fa fa-user-plus" />
                            </a>
                          </li>
                          <li className="call-item">
                            <a href="" title="Full Screen" data-placement="top" data-toggle="tooltip">
                              <i className="fas fa-arrows-alt-v full-screen" />
                            </a>
                          </li>
                        </ul>
                        <div className="end-call">
                          <a href="">
                            <i className="material-icons">call_end</i>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* /Call Footer */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Call Wrapper */}
        </div>
      </div>		
      {/* /Page Content */}
			</>
        )
    }
}
export default VideoCall;