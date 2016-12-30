/* Authors: Paige Brinks (plb7), Lydia Cupery (lac26)
 * Date: December 19, 2016
 *
 * member.js displays and formats information for a specific member */
 
import React from 'react';
import Remarkable from 'remarkable';
import { Link } from 'react-router';
import style from '../css/style.css';

module.exports = React.createClass({
    render: function() {
        return (
        	  
              <div dangerouslySetInnerHTML={{__html: '<h1>' + this.props.children[1] + '</h1>' + this.props.children[3] 
              + '<a title=\"Zhong Lane\" href=' + this.props.children[5] + ' target=\"_blank\">Comment on this post. </a></p>\n<p style=\"text-align:left;\">'
              +  '</br>' }} />

        );
    }
});