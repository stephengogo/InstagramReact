import React from 'react';
import './Post.css';
import Avatar from "@material-ui/core/Avatar"

function Post() {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar className="post__avatar"
                alt="RemySharp" 
                src="/static/images/avatar/1.jpg" 
                />

                {/* {header -> avatar + username} */}
                <h3>Username</h3>
            </div>
            

            {/* {image} */}
            <img className="post__image" src="https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"></img>
            
            {/* {username + caption} */}
            <h4 className="post__text"><strong>Username</strong> caption</h4>
        </div>
    )
}

export default Post
