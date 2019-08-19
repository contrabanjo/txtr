import React from 'react';

export default function HeroBanner(props){
  return (
    <div className="jumbotron jumbotron-fluid" style={{backgroundImage: "url(images/banner.jpg)", backgroundSize: "cover"}}>
      <h1 className="display-1" style={{color: "white", textAlign: "center", textShadow: "0px 0px 5px black"}}>Antioch Wesleyan Church</h1>
    </div>
  )
}