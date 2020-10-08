import React from 'react';
import './Post.css';

function Post() {
    return (
        <div className="post">
            {/* {header -> avatar + username} */}
            <h3>Username</h3>

            {/* {image} */}
            <img className="post__image" src="https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"></img>
            
            {/* {username + caption} */}
            <h4>Username: caption</h4>
        </div>
    )
}

export default Post
