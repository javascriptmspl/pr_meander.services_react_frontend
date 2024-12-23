import React from 'react';
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";

// Import Blog Sidebar
import { BlogSidebar } from './blog_sidebar';
// Import Images
import { Blog_01,Blog_02,provider_thumb_01,provider_thumb_02,provider_thumb_03,provider_thumb_04 } from "../imagepath"

class BlogList extends React.Component {
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
                <h2 className="breadcrumb-title">Blog List</h2>
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
                {/* Blog Post */}
                <div className="blog">
                  <div className="blog-image">
                    <Link to="/blog-details"><img className="img-fluid" src={Blog_01} alt="Post Image" /></Link>
                  </div>
                  <h3 className="blog-title"><Link to="/blog-details">A Top Stylist’s Long-Hair Secret</Link></h3>
                  <div className="blog-info clearfix">
                    <div className="post-left">
                      <ul>
                        <li>
                          <div className="post-author">
                            <Link to="/stylist-profile"><img src={provider_thumb_01} alt="Post Author" /> <span>Lark Enos</span></Link>
                          </div>
                        </li>
                        <li><i className="far fa-clock" />4 Dec 2020</li>
                        <li><i className="far fa-comments" />12 Comments</li>
                        <li><i className="fa fa-tags" />Beauty Tips</li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Link to="/blog-details" className="read-more">Read More</Link>
                  </div>
                </div>
                {/* /Blog Post */}
                {/* Blog Post */}
                <div className="blog">
                  <div className="blog-image">
                    <Link to="/blog-details"><img className="img-fluid" src={Blog_02} alt="" /></Link>
                  </div>
                  <h3 className="blog-title"><Link to="/blog-details">The most Colourful Name in Cosmetics?.</Link></h3>
                  <div className="blog-info clearfix">
                    <div className="post-left">
                      <ul>
                        <li>
                          <div className="post-author">
                            <Link to="/stylist-profile"><img src={provider_thumb_02} alt="Post Author" /> <span>Conley Hagen</span></Link>
                          </div>
                        </li>
                        <li><i className="far fa-clock" />3 Dec 2020</li>
                        <li><i className="far fa-comments" />7 Comments</li>
                        <li><i className="fa fa-tags" />Massage</li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Link to="/blog-details" className="read-more">Read More</Link>
                  </div>
                </div>
                {/* /Blog Post */}
                {/* Blog Post */}
                <div className="blog">
                  <div className="blog-image">
                    <div className="video">
                      <iframe src="https://www.youtube.com/embed/SFrc1EvQ80k" width={940} allowFullScreen />
                    </div>
                  </div>
                  <h3 className="blog-title"><Link to="/blog-details">New foot massages</Link></h3>
                  <div className="blog-info clearfix">
                    <div className="post-left">
                      <ul>
                        <li>
                          <div className="post-author">
                            <Link to="/stylist-profile"><img src={provider_thumb_03} alt="Post Author" /> <span>Ermin Justus</span></Link>
                          </div>
                        </li>
                        <li><i className="far fa-clock" />3 Dec 2020</li>
                        <li><i className="far fa-comments" />2 Comments</li>
                        <li><i className="fa fa-tags" />CTM Routine</li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Link to="/blog-details" className="read-more">Read More</Link>
                  </div>
                </div>
                {/* /Blog Post */}
                {/* Blog Post */}
                <div className="blog">
                  <div className="blog-image">
                    <div className="video">
                      <iframe src="https://www.youtube.com/embed/wWKHMv5dqgY" width={940} />
                    </div>
                  </div>
                  <h3 className="blog-title"><Link to="/blog-details">The Beginners Guide to Voluminous Hair</Link></h3>
                  <div className="blog-info clearfix">
                    <div className="post-left">
                      <ul>
                        <li>
                          <div className="post-author">
                            <Link to="/stylist-profile"><img src={provider_thumb_04} 
                            alt="Post Author" /> <span>Esmie Grier</span></Link>
                          </div>
                        </li>
                        <li><i className="far fa-clock" />2 Dec 2020</li>
                        <li><i className="far fa-comments" />41 Comments</li>
                        <li><i className="fa fa-tags" />Beauty Tips</li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Link to="/blog-details" className="read-more">Read More</Link>
                  </div>
                </div>
                {/* /Blog Post */}
                {/* Blog Pagination */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="blog-pagination">
                      <nav>
                        <ul className="pagination justify-content-center">
                          <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex={-1}><i className="fas fa-angle-double-left" /></a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">1</a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">3</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#"><i className="fas fa-angle-double-right" /></a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                {/* /Blog Pagination */}
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
export default BlogList;