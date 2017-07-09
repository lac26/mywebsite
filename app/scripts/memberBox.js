/* Authors: Paige Brinks (plb7), Lydia Cupery (lac26)
 * Date: December 19, 2016
 *
 * memberBox.js diplays the list of members along with a form to add a new member */
import React from 'react';
import $ from 'jquery';
import { POLL_INTERVAL } from './global';
import Blog from './Blog';
import Comment from './Comment';
import style from '../css/style.css'


var num = 0;
var found = 0;
var myComments = {};


module.exports = React.createClass({
    getInitialState: function() {
        this.loadCommentsFromWordpess = this.loadCommentsFromWordpess.bind(this);
        return {data: [], comments: {}};
    },
     loadCommentsFromWordpess: function(postID) {
        $.ajax({
                    url: 'https://public-api.wordpress.com/rest/v1.1/sites/mysquarecm.wordpress.com/posts/' + postID + '/replies/',
                    dataType: 'json',
                    cache: false,
                })
                 .done(function(result){
                    myComments = this.state.comments;
                    myComments[postID] = result; 

                    //console.log("comments", result);
                     this.setState({comments: myComments});
                 }.bind(this))
                 .fail(function(xhr, status, errorThrown) {
                     console.error(this.props.url, status, errorThrown.toString());
                 }.bind(this));

    },
    loadmembersFromServer: function() {
        num = num + 5;

        $.ajax({
            url: 'https://public-api.wordpress.com/rest/v1.1/sites/mysquarecm.wordpress.com/posts?number=' + num,
            dataType: 'json',
            cache: false,
        })
         .done(function(result){
            //number of posts found
            found = result.found; 
            console.log("found", found);

            console.log("result posts", result.posts);            
             this.setState({data: result});
             
             this.loadCommentsFromWordpess(130);

             result.posts.map(function(post){
                console.log('post id', post.ID);
                //TO DO: there is some duplicatoin of effort, keep loading comments even if already loaded, fix that
                this.loadCommentsFromWordpess(post.ID);
             }, this);
             
            /*
             if (this.state.data.posts){
                   this.state.data.posts.map(function(post) {
                console.log('post id', post.ID);
                //TO DO: there is some duplicatoin of effort, keep loading comments even if already loaded, fix that
                this.loadCommentsFromWordpess(130);
           });
               }
               */

         }.bind(this))
         .fail(function(xhr, status, errorThrown) {
             console.error(this.props.url, status, errorThrown.toString());
         }.bind(this));
    },
    componentDidMount: function() {
        this.loadmembersFromServer();
        this.loadCommentsFromWordpess(130);
        this.tempAuthorize();

                   

        console.log("it worked", this.state.comments);
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

            result.posts.map(function(post){
                console.log('post id', post.ID);
                //TO DO: there is some duplicatoin of effort, keep loading comments even if already loaded, fix that
                this.loadCommentsFromWordpess(post.ID);
             }, this);

            console.log("it worked", this.state.comments);


             this.setState({data: result});
             console.log("num is " + num);
             console.log("found is " + found);
             if (num >= found){
                //TODO: hide button
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

            if(this.state.comments[post.ID]!=null){
            console.log( "comments", this.state.comments[post.ID].comments);

                var displayComments = this.state.comments[post.ID].comments.map(function(comment){
                    return (
                    <Comment>
                    title = {comment.author.name}
                    content = {comment.content} 
                    URL = {comment.URL}
                    </Comment>
                    );
            }, this);
        }
           


           

            return (
                <div>
                <div>
                <Blog>
                title = {post.title}
                content = {post.content}
                URL = {post.URL}
                </Blog>
                </div>
                <div>
                {displayComments}
                </div>
                </div>
            );
        }, this);
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
