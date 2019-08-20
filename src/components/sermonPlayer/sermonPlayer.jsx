import React from 'react'
import Sermon from './sermon.jsx'

const testAudio = [
  {src: 'audio/2019-07-28.mp3', title: 'The Race Is Not to The Swift', date: 'July 28, 2019'},
  {src: 'audio/2019-08-04.mp3', title: 'The Vulnerability of Wisdom', date: 'August 4, 2019'},
  {src: 'audio/2019-08-11.mp3', title: 'Is There A House Big Enough For God?', date: 'August 11, 2019'}
]

export default function SermonPlayer(props){

  return (
    <div className="container">
      {testAudio.map((item)=>{
        return <div><Sermon src={item.src} title={item.title} date={item.date}/><hr/></div>
      })}
    </div>
  )
}