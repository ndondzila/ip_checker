import React from 'react';
import '../App.css';

const GeoIP = (props) => {
    
    if(props.geoIp_data != null && props.geoIp_data !== "No geographical data yet"){
        return (
            <div>
                <h2>GeoIP Data</h2>
                <h4>Country:{'   '}<strong>{props.geoIp_data.country}</strong></h4>
                <h4>State/Region:{'   '}<strong>{props.geoIp_data.region}</strong></h4>
                <h4>City:<strong>{'   '}{props.geoIp_data.city}</strong></h4>
            </div>
        );
    } else {
        return (
            <div>
                <h5>Awaiting GeoIP data</h5>
            </div>
        );
    }
}


export default GeoIP;