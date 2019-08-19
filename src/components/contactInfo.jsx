import React from 'react';

export default function ContactInfo(props){
  return (
   <div className="container d-inline-flex my-4">
     <div className="mx-5">
      <p>Come join us!</p>
      <p className="font-weight-bold">Sunday Morning Worship:</p>
      <p>Sunday 10:00am-11:45am</p>
      <p className="font-weight-bold">Sunday School:</p>
      <p>Sunday 9:00am-10:00am</p>
      <p className="font-weight-bold">Bible Study:</p>
      <p>Wednesday 7:00pm-8:00pm</p>

     </div>

     <img style={{height: '500px', width: '500px'}} src="images/map.png"/>

     <div className="mx-5">
      <p className="font-weight-bold">Location:</p>
      <p>2800 Sunset Ln</p>
      <p>Antioch, CA 94509</p>
      <br/>
      <p className="font-weight-bold">Phone:</p>
      <p>(925) 778-8056</p>
     </div>
   </div>
  )
}