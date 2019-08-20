import React from 'react'

export default function Sermon(props){
  return <div>
    <p className="sermon-date-text">{props.date}</p>
    <h3 className="sermon-audio-text">{props.title}</h3>
    <audio
        controls
        src={props.src}>
            Your browser does not support the
            <code>audio</code> element.
    </audio>
  </div>
}