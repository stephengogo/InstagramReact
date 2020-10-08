import React from 'react';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="app">

      {/* {Header, instagram logo } */}
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      {/* {Posts} */}
      <Post username="stephen" caption="wow it works" imageUrl="https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/>
      <Post />
      <Post />

      {/* {Posts} */}

    </div>
  );
}

export default App;
