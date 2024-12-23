import React from 'react';
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";

// Import Blog Sidebar
import { BlogSidebar } from './blog_sidebar';
// Import Images
import { Blog_01,Blog_02,Blog_03,Blog_04,Blog_05,Blog_06,Blog_07,Blog_08,Blog_09,Blog_10,
    provider_thumb_01,provider_thumb_02,provider_thumb_03,provider_thumb_04,provider_thumb_05,
    provider_thumb_06,provider_thumb_07,provider_thumb_08,provider_thumb_09,provider_thumb_10 } from "../imagepath"

class BlogGrid extends React.Component {
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
                <h2 className="breadcrumb-title">Blog Grid</h2>
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
                <div className="row blog-grid-row">
                  <div className="col-md-6 col-sm-12">
                    {/* Blog Post */}
                    <div className="blog grid-blog">
                      <div className="blog-image">
                        <Link to="/blog-details"><img className="img-fluid" src={Blog_01} alt="Post Image" /></Link>
                      </div>
                      <div className="blog-content">
                        <ul className="entry-meta meta-item">
                          <li>
                            <div className="post-author">
                              <Link to="/stylist-profile"><img src={provider_thumb_01} alt="Post Author" /> <span>Lark Enos</span></Link>
                            </div>
                          </li>
                          <li><i className="far fa-clock" /> 4 Dec 2020</li>
                        </ul>
                        <h3 className="blog-title"><Link to="/blog-details">A Top Stylist’s Long-Hair Secret</Link></h3>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                      </div>
                    </div>
                    {/* /Blog Post */}
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {/* Blog Post */}
                    <div className="blog grid-blog">
                      <div className="blog-image">
                        <Link to="/blog-details"><img className="img-fluid" src={Blog_02} alt="Post Image" /></Link>
                      </div>
                      <div className="blog-content">
                        <ul className="entry-meta meta-item">
                          <li>
                            <div className="post-author">
                              <Link to="/stylist-profile"><img src={provider_thumb_02} alt="Post Author" /> <span>Conley Hagen</span></Link>
                            </div>
                          </li>
                          <li><i className="far fa-clock" /> 3 Dec 2020</li>
                        </ul>
                        <h3 className="blog-title"><Link to="/blog-details">The most Colourful Name in Cosmetics?.</Link></h3>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                      </div>
                    </div>
                    {/* /Blog Post */}
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {/* Blog Post */}
                    <div className="blog grid-blog">
                      <div className="blog-image">
                        <Link to="/blog-details"><img className="img-fluid" src={Blog_03} alt="Post Image" /></Link>
                      </div>
                      <div className="blog-content">
                        <ul className="entry-meta meta-item">
                          <li>
                            <div className="post-author">
                              <Link to="/stylist-profile"><img src={provider_thumb_03} alt="Post Author" /> <span>Ermin Justus</span></Link>
                            </div>
                          </li>
                          <li><i className="far fa-clock" /> 3 Dec 2020</li>
                        </ul>
                        <h3 className="blog-title"><Link to="/blog-details">New foot massages</Link></h3>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                      </div>
                    </div>
                    {/* /Blog Post */}
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {/* Blog Post */}
                    <div className="blog grid-blog">
                      <div className="blog-image">
                        <Link to="/blog-details"><img className="img-fluid" src={Blog_04} alt="Post Image" /></Link>
                      </div>
                      <div className="blog-content">
                        <ul className="entry-meta meta-item">
                          <li>
                            <div className="post-author">
                              <Link to="/stylist-profile"><img src={provider_thumb_04} alt="Post Author" /> <span>Esmie Grier</span></Link>
                            </div>
                          </li>
                          <li><i className="far fa-clock" /> 2 Dec 2020</li>
                        </ul>
                        <h3 className="blog-title"><Link to="/blog-details">The Beginners Guide to Voluminous Hair</Link></h3>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                      </div>
                    </div>
                    {/* /Blog Post */}
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {/* Blog Post */}
                    <div className="blog grid-blog">
                      <div className="blog-image">
                        <Link to="/blog-details"><img className="img-fluid" src={Blog_05} alt="Post Image" /></Link>
                      </div>
                      <div className="blog-content">
                        <ul className="entry-meta meta-item">
                          <li>
                            <div className="post-author">
                              <Link to="/stylist-profile"><img src={provider_thumb_05} alt="Post Author" /> <span>Allson Shores</span></Link>
                            </div>
                          </li>
                          <li><i className="far fa-clock" /> 1 Dec 2020</li>
                        </ul>
                        <h3 className="blog-title"><Link to="/blog-details">Beauty - salon Facial treatments</Link></h3>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                      </div>
                    </div>
                    {/* /Blog Post */}
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {/* Blog Post */}
                    <div className="blog grid-blog">
                      <div className="blog-image">
                        <Link to="/blog-details"><img className="img-fluid" src={Blog_06} alt="Post Image" /></Link>
                      </div>
                      <div className="blog-content">
                        <ul className="entry-meta meta-item">
                          <li>
                            <div className="post-author">
                              <Link to="/stylist-profile"><img src={provider_thumb_06} alt="Post Author" /> <span>Lizy Russell</span></Link>
                            </div>
                          </li>
                          <li><i className="far fa-clock" /> 30 Nov 2020</li>
                        </ul>
                        <h3 className="blog-title"><Link to="/blog-details">	The Secret Weapon For Long, Healthy Hair</Link></h3>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                      </div>
                    </div>
                    {/* /Blog Post */}
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {/* Blog Post */}
                    <div className="blog grid-blog">
                      <div className="blog-image">
                        <Link to="/blog-details"><img className="img-fluid" src={Blog_07} alt="Post Image" /></Link>
                      </div>
                      <div className="blog-content">
                        <ul className="entry-meta meta-item">
                          <li>
                            <div className="post-author">
                              <Link to="/stylist-profile"><img src={provider_thumb_07} alt="Post Author" /> <span>Fayda Cates</span></Link>
                            </div>
                          </li>
                          <li><i className="far fa-clock" /> 28 Nov 2020</li>
                        </ul>
                        <h3 className="blog-title"><Link to="/blog-details">	Choose your own Online Stylist Appointment</Link></h3>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                      </div>
                    </div>
                    {/* /Blog Post */}
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {/* Blog Post */}
                    <div className="blog grid-blog">
                      <div className="blog-image">
                        <Link to="/blog-details"><img className="img-fluid" src={Blog_08} alt="Post Image" /></Link>
                      </div>
                      <div className="blog-content">
                        <ul className="entry-meta meta-item">
                          <li>
                            <div className="post-author">
                              <Link to="/stylist-profile"><img src={provider_thumb_08} alt="Post Author" /> <span>Elek Keating</span></Link>
                            </div>
                          </li>
                          <li><i className="far fa-clock" /> 25 Nov 2020</li>
                        </ul>
                        <h3 className="blog-title"><Link to="/blog-details">	Endulge while waiting</Link></h3>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                      </div>
                    </div>
                    {/* /Blog Post */}
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {/* Blog Post */}
                    <div className="blog grid-blog">
                      <div className="blog-image">
                        <Link to="/blog-details"><img className="img-fluid" src={Blog_09} alt="Post Image" /></Link>
                      </div>
                      <div className="blog-content">
                        <ul className="entry-meta meta-item">
                          <li>
                            <div className="post-author">
                              <Link to="/stylist-profile"><img src={provider_thumb_09} alt="Post Author" />
                               <span>Achiram Jacobs</span></Link>
                            </div>
                          </li>
                          <li><i className="far fa-clock" /> 24 Nov 2020</li>
                        </ul>
                        <h3 className="blog-title"><Link to="/blog-details">The Beginners Guide to Voluminous Hair</Link></h3>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                      </div>
                    </div>
                    {/* /Blog Post */}
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {/* Blog Post */}
                    <div className="blog grid-blog">
                      <div className="blog-image">
                        <Link to="/blog-details"><img className="img-fluid" src={Blog_10} alt="Post Image" /></Link>
                      </div>
                      <div className="blog-content">
                        <ul className="entry-meta meta-item">
                          <li>
                            <div className="post-author">
                              <Link to="/stylist-profile"><img src={provider_thumb_10} alt="Post Author" /> 
                              <span>Ade Bills</span></Link>
                            </div>
                          </li>
                          <li><i className="far fa-clock" /> 23 Nov 2020</li>
                        </ul>
                        <h3 className="blog-title"><Link to="/blog-details">Simple steps to visit your Stylist today </Link></h3>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                      </div>
                    </div>
                    {/* /Blog Post */}
                  </div>
                </div>
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
export default BlogGrid;