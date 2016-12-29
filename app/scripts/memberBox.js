/* Authors: Paige Brinks (plb7), Lydia Cupery (lac26)
 * Date: December 19, 2016
 *
 * memberBox.js diplays the list of members along with a form to add a new member */
import React from 'react';
import $ from 'jquery';
import { POLL_INTERVAL } from './global';
import Blog from './Blog';


module.exports = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    loadmembersFromServer: function() {
        $.ajax({
            url: 'https://public-api.wordpress.com/rest/v1.1/sites/mysquarecm.wordpress.com/posts',
            dataType: 'json',
            cache: false,
        })
         .done(function(result){
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
    render: function() {

        if (this.state.data.posts){
        var memberNodes = this.state.data.posts.map(function(post) {
            return (
                <Blog>
                content = {post.content}
                </Blog>
            );
        });
    }
    console.log(memberNodes);

        return (
            <div>
                <h1>Blogs</h1>

                <div>            
                {memberNodes}
                <br/>
                <br/>             
                </div>

            </div>
        );
    }
});
