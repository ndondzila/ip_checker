import React from 'react';
import '../App.css';

const WhoIs = (props) => {
    
    if(props.whoIs_data != null && props.whoIs_data !== "No WhoIs data yet"){

        let data_size = props.whoIs_data.data.length;
        
        return (
             <div>
                 <h4>{data_size}</h4>
             </div>
        );
    } else {
        return (
            <div>
                <h5>Awaiting WhoIs data</h5>
            </div>
        );
    }
}

export default WhoIs;