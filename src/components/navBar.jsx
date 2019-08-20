import React from 'react';

export default function NavBar(props){
  return <>
      <nav className="navbar">
        <button className="navbar-toggler" onClick={()=>{props.setPage('home')}}>Home</button>
        <button className="navbar-toggler" onClick={()=>{props.setPage('calendar')}}>Calendar</button>
        <button className="navbar-toggler" onClick={()=>{props.setPage('pictures')}}>Pictures</button>
        <button className="navbar-toggler" onClick={()=>{props.setPage('sermons')}}>Sermons</button>
        <button className="navbar-toggler" onClick={()=>{props.setPage('about')}}>About Us</button>
      </nav>
  </>
}