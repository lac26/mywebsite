/* Authors: Lydia Cupery
 * 
 * Date: December 19, 2016
 * App.js is the default route, has the header, menu bar, and content */
 
import React from 'react'
import NavLink from './NavLink'
import style from '../css/style.css'

export default React.createClass({
  render() {
    return (
      <div>
      <div>
        
          <h1 className={style.pageHeader}>Click on the blog you would like to read. </h1>
          <div className={style.blogMenu}>
          <div role="nav">
          <ul>
            <li><NavLink to="/blog/blog1">Travel Blog</NavLink></li>
            <li><NavLink to="/blog/blog2">Technical Blog</NavLink></li>
          </ul>
          </div>
        </div>
        {this.props.children}
        </div>
    
        </div>
    )
  }
})


