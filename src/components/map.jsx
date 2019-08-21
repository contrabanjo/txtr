import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'


export default function Map(){
  return <div>
    <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyB98No4o51OfPz9gW_9EItkL7vzbKb5lD4"
      />
      <GoogleMap
        id='example-map'
      />
  </div>
}