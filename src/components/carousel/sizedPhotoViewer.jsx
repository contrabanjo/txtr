import React from 'react'
import Carousel from './carousel.jsx'

const testPhotos = [
  {src: 'images/2.jpg', alt: '2', caption: "Easter 2019"},
  {src: 'images/5.jpg', alt: '5', caption: "Dedicating Baby Logan"},
  {src: 'images/6.jpg', alt: '6', caption: "New member service"},
  {src: 'images/7.jpg', alt: '7', caption: "Praying over our new board members"},
  {src: 'images/3.jpg', alt: '3', caption: "Our young ladies enjoying the Ladies' Tea"},
  {src: 'images/4.jpg', alt: '4', caption: "Leading the young ones in prayer"},
  {src: 'images/dustin.jpg', alt: 'dustin', caption: "Stock car races!"},
]


export default function SizedPhotoViewer(props){
  return (
    <div className="container w-75">
      <Carousel items={testPhotos}/>
    </div>
  )
}