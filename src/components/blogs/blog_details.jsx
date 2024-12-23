import React from 'react';
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";

// Import Blog Sidebar
import { BlogSidebar } from './blog_sidebar';
// Import Images
import { Blog_01,UserAvatar3,UserAvatar4,UserAvatar5,UserAvatar6,UserAvatar7,provider_thumb_02 } from "../imagepath"

class BlogDetails extends React.Component {
    render() {
        return(
            <>
                {/* Breadcrumb */}
        <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-12 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Blog</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Blog Details</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="blog-view">
                  <div className="blog blog-single-post">
                    <div className="blog-image">
                      <a href=""><img alt="" src={Blog_01} className="img-fluid" /></a>
                    </div>
                    <h3 className="blog-title">A Top Stylist’s Long-Hair Secret</h3>
                    <div className="blog-info clearfix">
                      <div className="post-left">
                        <ul>
                          <li>
                            <div className="post-author">
                              <Link to="/stylist-profile"><img src={provider_thumb_02} alt="Post Author" /> <span>Conley Hagen</span></Link>
                            </div>
                          </li>
                          <li><i className="far fa-calendar" />4 Dec 2020</li>
                          <li><i className="far fa-comments" />12 Comments</li>
                          <li><i className="fa fa-tags" />Beauty Tips</li>
                        </ul>
                      </div>
                    </div>
                    <div className="blog-content">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                    </div>
                  </div>
                  <div className="card blog-share clearfix">
                    <div className="card-header">
                      <h4 className="card-title">Share the post</h4>
                    </div>
                    <div className="card-body">
                      <ul className="social-share">
                        <li><a href="#" title="Facebook"><i className="fab fa-facebook" /></a></li>
                        <li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
                        <li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
                        <li><a href="#" title="Google Plus"><i className="fab fa-google-plus" /></a></li>
                        <li><a href="#" title="Youtube"><i className="fab fa-youtube" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="card author-widget clearfix">
                    <div className="card-header">
                      <h4 className="card-title">About Author</h4>
                    </div>
                    <div className="card-body">
                      <div className="about-author">
                        <div className="about-author-img">
                          <div className="author-img-wrap">
                            <Link to="/stylist-profile"><img className="img-fluid rounded-circle" alt="" src={provider_thumb_02} /></Link>
                          </div>
                        </div>
                        <div className="author-details">
                          <Link to="/stylist-profile" className="blog-author-name">Conley Hagen</Link>
                          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card blog-comments clearfix">
                    <div className="card-header">
                      <h4 className="card-title">Comments (12)</h4>
                    </div>
                    <div className="card-body pb-0">
                      <ul className="comments-list">
                        <li>
                          <div className="comment">
                            <div className="comment-author">
                              <img className="avatar" alt="" src={UserAvatar4} />
                            </div>
                            <div className="comment-block">
                              <span className="comment-by">
                                <span className="blog-author-name">Cacie Helms</span>
                              </span>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              <p className="blog-date">Dec 6, 2017</p>
                              <a className="comment-btn" href="#">
                                <i className="fas fa-reply" /> Reply
                              </a>
                            </div>
                          </div>
                          <ul className="comments-list reply">
                            <li>
                              <div className="comment">
                                <div className="comment-author">
                                  <img className="avatar" alt="" src={UserAvatar5} />
                                </div>
                                <div className="comment-block">
                                  <span className="comment-by">
                                    <span className="blog-author-name">Jey Munson</span>
                                  </span>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae.</p>
                                  <p className="blog-date">Dec 6, 2017</p>
                                  <a className="comment-btn" href="#">
                                    <i className="fas fa-reply" /> Reply
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="comment">
                                <div className="comment-author">
                                  <img className="avatar" alt="" src={UserAvatar3} />
                                </div>
                                <div className="comment-block">
                                  <span className="comment-by">
                                    <span className="blog-author-name">Aloysius Selby</span>
                                  </span>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae.</p>
                                  <p className="blog-date">December 7, 2017</p>
                                  <a className="comment-btn" href="#">
                                    <i className="fas fa-reply" /> Reply
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div className="comment">
                            <div className="comment-author">
                              <img className="avatar" alt="" src={UserAvatar6} />
                            </div>
                            <div className="comment-block">
                              <span className="comment-by">
                                <span className="blog-author-name">Calandra Geer</span>
                              </span>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              <p className="blog-date">December 11, 2017</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="comment">
                            <div className="comment-author">
                              <img className="avatar" alt="" src={UserAvatar7} />
                            </div>
                            <div className="comment-block">
                              <span className="comment-by">
                                <span className="blog-author-name">Lynea Skipper</span>
                              </span>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              <p className="blog-date">December 13, 2017</p>
                              <a className="comment-btn" href="#">
                                <i className="fas fa-reply" /> Reply
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card new-comment clearfix">
                    <div className="card-header">
                      <h4 className="card-title">Leave Comment</h4>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="form-group">
                          <label>Name <span className="text-danger">*</span></label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Your Email Address <span className="text-danger">*</span></label>
                          <input type="email" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Comments</label>
                          <textarea rows={4} className="form-control" defaultValue={""} />
                        </div>
                        <div className="submit-section">
                          <button className="btn btn-primary submit-btn" type="submit">Submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* Blog Sidebar */}
              <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">
                <StickyBox offsetTop={20} offsetBottom={20}>
                    <BlogSidebar/>
                </StickyBox>
              </div>
              {/* /Blog Sidebar */}
            </div>
          </div>
        </div>		
        {/* /Page Content */}
            </>
        )
    }
}
export default BlogDetails;