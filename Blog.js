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
              <div dangerouslySetInnerHTML={{__html: this.props.content}} />
        );
    }
});