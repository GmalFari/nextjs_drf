import * as React from 'react';
import Head from 'next/head';
import Map, {Marker  , NavigationControl} from 'react-map-gl';
import { GeolocateControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState,useCallback, useEffect,useContext,useRef } from "react";
import  {MarkerDragEvent, LngLat} from 'react-map-gl';

const MAPBOX_TOKEN = "pk.eyJ1IjoiamFtYWxkb2UiLCJhIjoiY2xlMDAwZWlhMTM5OTN3b2F0YnVscHFoYSJ9.N_J3cEVw10zYYVBGf3dMmg"; // Set your mapbox token here
import "mapbox-gl/dist/mapbox-gl.css";

const initialViewState = {
  latitude: 40,
  longitude: -100,
  zoom: 3.5
};
const MyMap = ({sizes,ChooseLocation}) =>{
  const [events, logEvents] = useState({LngLat});
  const [marker, setMarker] = useState({
    latitude: 40,
    longitude: -100
  });
  const map = useRef(null);
    const [lat,lng] =[15.3590855,44.1733807]
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
  //   console.log(viewport.latitude)
  // },[viewport])
  function onClickMap(e) {
    // console.log(e.lngLat);
 {ChooseLocation?
   ChooseLocation({latitude:e.lngLat.lat,longitude:e.lngLat.lng}):null}

  }
  const onMarkerDragStart = useCallback(event => {
    logEvents(_events => ({..._events, onDragStart: event.lngLat}));
  }, []);
  const onMarkerDrag = useCallback(event => {
    logEvents(_events => ({..._events, onDrag: event.lngLat}));
    setViewport({
      ...viewport,
      latitude:event['lngLat'].lat,
      longitude:event['lngLat'].lng,
      zoom:7
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(viewport)

  const onMarkerDragEnd = useCallback(event => {
    logEvents(_events => ({..._events, onDragEnd: event.lngLat}));
    setMarker({
      longitude: event.lngLat[0],
      latitude: event.lngLat[1]
    });
  }, []);
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
        onClick={onClickMap}
       >
       
       <Marker
          longitude={viewport.longitude}
          latitude={viewport.latitude}
          offsetTop={-20}
          offsetLeft={-10}
          draggable={true}
          onDragStart={onMarkerDragStart}
          onDrag={onMarkerDrag}
          onDragEnd={onMarkerDragEnd}
        ></Marker>
      
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

export default MyMap;
