/* Authors: Paige Brinks (plb7), Lydia Cupery (lac26)
 * Date: December 19, 2016
 *
 * Home.js renders content for the home page */
import React from 'react';
import style from '../css/style.css';
import AbsoluteGrid from 'react-absolute-grid';

export default React.createClass({

  render() {
  		 var sampleItems = [
  {key: 1, name: 'Test', sort: 0, filtered: 0},
  {key: 2, name: 'Test 1', sort: 1, filtered: 0},
];

    return <div>
    	
    	<p>Welcome to my corner of the web :) </p>

		<AbsoluteGrid items={sampleItems} />

    
    	   	</div>
  }
})
