import React from 'react';

export default function Carousel(props){
  function populate(){
    return props.items.map((item, index)=>{
      return <div key={index}className={(index===0) ? "carousel-item active" : "carousel-item"}>
          <img className="d-block w-100" src={item.src} alt={item.alt}/>
          <div className="carousel-caption d-none d-md-block">
            <h3 style={{textShadow: "1px 1px 5px black"}}>{item.caption}</h3>
          </div>
        </div>
    })
  }

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {populate()}
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}