import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const Maps = ({ data }) => {
    const mapStyles = {
        height: '50vh',
        width: '100%'
    }
    console.log(data)
    const defaultCenter = {
        lat: parseFloat(data.lat), lng: parseFloat(data.lng)
    }
    return (
        <LoadScript googleMapsApiKey='AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={9}
                center={defaultCenter}
            >
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    );
}

export default Maps;