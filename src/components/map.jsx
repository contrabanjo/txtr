import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import GOOGLE_API_KEY from './api.json'

export default function Map(){
  return <div>
    <LoadScript
        id="script-loader"
        googleMapsApiKey={GOOGLE_API_KEY}
      />
      <GoogleMap
        id='example-map'
      />
  </div>
}