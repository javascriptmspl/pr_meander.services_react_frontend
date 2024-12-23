import React from 'react';
import { Link } from 'react-router-dom';
// Import Images
import { Blog_thumb_01,Blog_thumb_02,Blog_thumb_03,Blog_thumb_04,Blog_thumb_05 } from "../imagepath"

class BlogSidebar extends React.Component {
    render() {
        return(
            <>
            {/* Search */}
            <div className="card search-widget">
                  <div className="card-body">
                    <form className="search-form">
                      <div className="input-group">
                        <input type="text" placeholder="Search..." className="form-control" />
                        <div className="input-group-append">
                          <button type="submit" className="btn btn-primary"><i className="fa fa-search" /></button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/* /Search */}
                {/* Latest Posts */}
                <div className="card post-widget">
                  <div className="card-header">
                    <h4 className="card-title">Latest Posts</h4>
                  </div>
                  <div className="card-body">
                    <ul className="latest-posts">
                      <li>
                        <div className="post-thumb">
                          <Link to="/blog-details">
                            <img className="img-fluid" src={Blog_thumb_01} alt="" />
                          </Link>
                        </div>
                        <div className="post-info">
                          <h4>
                            <Link to="/blog-details">A Top Stylist’s Long-Hair Secret</Link>
                          </h4>
                          <p>4 Dec 2020</p>
                        </div>
                      </li>
                      <li>
                        <div className="post-thumb">
                          <Link to="/blog-details">
                            <img className="img-fluid" src={Blog_thumb_02} alt="" />
                          </Link>
                        </div>
                        <div className="post-info">
                          <h4>
                            <Link to="/blog-details">The most Colourful Name in Cosmetics?.</Link>
                          </h4>
                          <p>3 Dec 2020</p>
                        </div>
                      </li>
                      <li>
                        <div className="post-thumb">
                          <Link to="/blog-details">
                            <img className="img-fluid" src={Blog_thumb_03} alt="" />
                          </Link>
                        </div>
                        <div className="post-info">
                          <h4>
                            <Link to="/blog-details">New foot massages</Link>
                          </h4>
                          <p>3 Dec 2020</p>
                        </div>
                      </li>
                      <li>
                        <div className="post-thumb">
                          <Link to="/blog-details">
                            <img className="img-fluid" src={Blog_thumb_04} alt="" />
                          </Link>
                        </div>
                        <div className="post-info">
                          <h4>
                            <Link to="/blog-details">The Beginners Guide to Voluminous Hair</Link>
                          </h4>
                          <p>2 Dec 2020</p>
                        </div>
                      </li>
                      <li>
                        <div className="post-thumb">
                          <Link to="/blog-details">
                            <img className="img-fluid" src={Blog_thumb_05} alt="" />
                          </Link>
                        </div>
                        <div className="post-info">
                          <h4>
                            <Link to="/blog-details">Beauty - salon Facial treatments</Link>
                          </h4>
                          <p>1 Dec 2020</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /Latest Posts */}
                {/* Categories */}
                <div className="card category-widget">
                  <div className="card-header">
                    <h4 className="card-title">Blog Categories</h4>
                  </div>
                  <div className="card-body">
                    <ul className="categories">
                      <li><a href="#">Massage <span>(62)</span></a></li>
                      <li><a href="#">CTM Routine <span>(27)</span></a></li>
                      <li><a href="#">Hairdressing <span>(41)</span></a></li>
                      <li><a href="#">Beauty Tips <span>(16)</span></a></li>
                      <li><a href="#">Acne Treatments <span>(55)</span></a></li>
                      <li><a href="#">Hairstyles <span>(07)</span></a></li>
                    </ul>
                  </div>
                </div>
                {/* /Categories */}
                {/* Tags */}
                <div className="card tags-widget">
                  <div className="card-header">
                    <h4 className="card-title">Tags</h4>
                  </div>
                  <div className="card-body">
                    <ul className="tags">
                      <li><a href="#" className="tag">Facial</a></li>
                      <li><a href="#" className="tag">Massage</a></li>
                      <li><a href="#" className="tag">Appointment</a></li>
                      <li><a href="#" className="tag">Booking</a></li>
                      <li><a href="#" className="tag">CTM</a></li>
                      <li><a href="#" className="tag">Food Routine</a></li>
                      <li><a href="#" className="tag">Beauty</a></li>
                      <li><a href="#" className="tag">Tips</a></li>
                      <li><a href="#" className="tag">Shedule</a></li>
                      <li><a href="#" className="tag">Treatment</a></li>
                      <li><a href="#" className="tag">Stylist</a></li>
                      <li><a href="#" className="tag">Salon</a></li>
                      <li><a href="#" className="tag">Online</a></li>
                      <li><a href="#" className="tag">CTM Routine</a></li>
                      <li><a href="#" className="tag">Consulting</a></li>
                      <li><a href="#" className="tag">Specialists</a></li>
                      <li><a href="#" className="tag">Hair Treatments</a></li>
                      <li><a href="#" className="tag">Makeup Specialists</a></li>
                      <li><a href="#" className="tag">Specialist</a></li>
                      <li><a href="#" className="tag">Beauty - Salon</a></li>
                    </ul>
                  </div>
                </div>
                {/* /Tags */}
            </>
        )
    }
}
export { BlogSidebar };