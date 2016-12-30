/* Authors: Paige Brinks (plb7), Lydia Cupery (lac26)
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
        <div className={style.blogMenu}>
          <h1 className={style.pageHeader}>Click on the blog you would like to read. </h1>
          <div role="nav">
          <ul>
            <li><NavLink to="/blog/blog1">Blog1</NavLink></li>
            <li><NavLink to="/blog/blog2">Blog2</NavLink></li>
          </ul>
          </div>
        </div>
        {this.props.children}
        </div>
    
        <footer>Calvin College Women in Computing</footer>
        </div>
    )
  }
})


