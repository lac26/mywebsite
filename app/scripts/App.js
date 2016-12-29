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
        <div className={style.menu}>
          <h1 className={style.pageHeader}>Welcome to my corner of the web.  Nice to meet you! </h1>
          <div className={style.nav} role="nav">
          <ul>
            <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
            <li><NavLink to="/about">About Me</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/event">Event</NavLink></li>
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


