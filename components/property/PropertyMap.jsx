import * as React from 'react';
import Head from 'next/head';
import Map, {Marker  , NavigationControl} from 'react-map-gl';
import { GeolocateControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState, useEffect,useContext,useRef } from "react";
const MAPBOX_TOKEN = "pk.eyJ1IjoiamFtYWxkb2UiLCJhIjoiY2xlMDAwZWlhMTM5OTN3b2F0YnVscHFoYSJ9.N_J3cEVw10zYYVBGf3dMmg"; // Set your mapbox token here
import "mapbox-gl/dist/mapbox-gl.css";

const PropertyMap = ({geoDetail,sizes,ChooseLocation}) =>{
  const map = useRef(null);
  console.log(geoDetail)
    const [lat,lng] =[geoDetail[0],geoDetail[1]]
    // {geoDetail?[...geoDetail]}
    console.log(geoDetail )
    const {mapW ,mapH} = {...sizes}
  const [viewport,setViewport] = useState({latitude:lat,longitude:lng});
  // useEffect(()=>{
  //   navigator.geolocation.getCurrentPosition((pos)=>{
  //     setViewport({
  //       ...viewport,
  //       latitude:viewport.latitude,
  //       longitude:viewport.longitude,
  //       zoom:7
  //     })
  //   })
  // },[])


  return (
    <div style={{width:mapW,height:mapH}}>
      {/* {viewport.latitude && viewport.longitude && ( */}
      <div style={{width:mapW,height:mapW}}>
      <Map
      style={{width:mapW,height:mapH}}
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={{...viewport,zoom:14}}
        getCurrentPosition={true}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        // zoom={4}
        boxZoom={true}
        center={[lng,lng]}
       >
      <Marker
    
              longitude={viewport.longitude}
              latitude={viewport.latitude}
            />
            <GeolocateControl
            positionOptions={viewport}
            trackUserLocation={true}
        />
            <NavigationControl />
      </Map>
      </div>
    {/* )} */}
        

    
    </div>
  );
}

export default PropertyMap;