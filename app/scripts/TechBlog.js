/* Authors: Paige Brinks (plb7), Lydia Cupery (lac26)
 * Date: December 19, 2016
 *
 * memberBox.js diplays the list of members along with a form to add a new member */
import React from 'react';
import $ from 'jquery';
import { POLL_INTERVAL } from './global';
import Blog from './Blog';
import style from '../css/style.css'


var num = 0;
var found = 0;

module.exports = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    loadmembersFromServer: function() {
        num = num + 5;

        $.ajax({
            url: 'https://public-api.wordpress.com/rest/v1.1/sites/buildingtechadv.wordpress.com/posts?number=' + num,
            dataType: 'json',
            cache: false,
        })
         .done(function(result){
            found = result.found; 

            //console.log("results are", found);
             this.setState({data: result});
         }.bind(this))
         .fail(function(xhr, status, errorThrown) {
             console.error(this.props.url, status, errorThrown.toString());
         }.bind(this));
    },
    componentDidMount: function() {
        this.loadmembersFromServer();
        setInterval(this.loadeventsFromServer, POLL_INTERVAL);
    },
    handleSubmit: function() {
        num = num + 5;
        $.ajax({
            url: 'https://public-api.wordpress.com/rest/v1.1/sites/mysquarecm.wordpress.com/posts?number=' + num,
            dataType: 'json',
            cache: false,
        })
         .done(function(result){
             this.setState({data: result});
             console.log("num is " + num);
             console.log("found is " + found);
             if (num >= found){
                $("button").hide();
             }
         }.bind(this))
         .fail(function(xhr, status, errorThrown) {
             console.error(this.props.url, status, errorThrown.toString());
         }.bind(this));
    },
    render: function() {

        if (this.state.data.posts){
        var memberNodes = this.state.data.posts.map(function(post) {
            console.log("nodes", post);
            return (
                <Blog>
                title = {post.title}
                content = {post.content}
                URL = {post.URL}
                </Blog>
            );
        });
    }
    console.log(memberNodes);

        return (
            <div>
                <div>   
                <div className = {style.blogContent}>         
                {memberNodes}
                </div>
                <br/>
                <br/>             
                </div>

               <button type="submit" onClick={this.handleSubmit}>Load More </button>

            </div>
        );
    }
});
