import React, { Component, useState } from 'react';
import Layout from '../components/Layout/Layout'
import { 
    GoogleMap, 
    withScriptjs, 
    withGoogleMap, 
    Marker,
    InfoWindow,
    Polyline
} from 'react-google-maps'
// import mapStyles from './mapStyles'

function Map() {
    const [selectedTracker, setSelectedTracker] = useState(null)
    const positionCoordinates = [
        {lat:45.321532, lng:-75.497189},
        {lat:45.421532, lng:-75.697189},
        {lat:45.621532, lng:-75.597189},
        {lat:45.821532, lng:-75.897189}
    ]
    const pathCoordinates = [ 
        {lat:45.321532, lng:-75.497189},
        {lat:45.421532, lng:-75.697189},
        {lat:45.621532, lng:-75.597189},
        {lat:45.821532, lng:-75.897189}
    ]

    return (
        <GoogleMap 
            defaultZoom={10}
            defaultOptions={{
                gestureHandling: 'cooperative',
            }}
            defaultCenter={{lat: 45.421532, lng: -75.697189}}
            // defaultOptions={{style: mapStyles}}
        >
            {positionCoordinates.map((positionCoordinate, index) => (
                <Marker
                    key={index}
                    position={positionCoordinate}
                    onClick={()=>{setSelectedTracker(positionCoordinate)}}
                    icon={{
                        url:'/assets/favicon.ico',
                        scaledSize: new window.google.maps.Size(50,50)
                    }}
                /> 
            ))}
            
            {selectedTracker && (
                <InfoWindow
                    position={selectedTracker}
                    onCloseClick={()=>setSelectedTracker(null)}
                >
                    <div>tracker details</div>
                </InfoWindow>
            )}
            <Polyline 
                path={pathCoordinates} 
                options={{ 
                    strokeColor: '#3878c7',
                    strokeOpacity: 0,
                    icons: [{ 
                        icon: {
                            path: 'M 0,-1 0,1',
                            strokeOpacity: 1,
                            strokeWeight: 5,
                            scale: 4
                        },        
                        offset: '0',
                        repeat: '20px'
                }],
                }}
            />
        </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default class CustomMap extends Component {
    
    render() {
        return(
            <Layout>
                <div className="map" style={{width: '100vw', height: '100vh'}}>
                    <WrappedMap 
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBKQPAYvbPuAEC7t0XjVFIBXDruOnO4JCw`} 
                        loadingElement={<div style={{height:'100%'}}/>}
                        containerElement={<div style={{height:'100%'}}/>}
                        mapElement={<div style={{height:'100%'}}/>}
                    />
                </div>
            </Layout>
        )
    }
}
