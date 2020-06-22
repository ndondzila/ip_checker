import React from 'react';
import WhoIs from './WhoIs';

const WhoIsContainer = (props) => {

    if(props.whoIs_data != null && props.whoIs_data !== "No WhoIs data yet"){


        const levelOneData = Object.keys(props.whoIs_data.data)
        .map(arrIndex => {
            return props.whoIs_data.data[arrIndex];
        });
        var whoIsDataArray = {}; 
        for(var i = 0; i < levelOneData.length; i++){
            Object.keys(levelOneData[i].data)
            .map(data_arrIndex => {
                let dictVal = levelOneData[i].data[data_arrIndex];
                whoIsDataArray[data_arrIndex] = dictVal;
            })
        }
        let finalOutput = Object.keys(whoIsDataArray).map(finKey => {
            let returnData = finKey + " : " + whoIsDataArray[finKey];
            return <WhoIs data={returnData}></WhoIs>
        });

        return (
            <div>
                <h1>WhoIs Data</h1>
                {finalOutput}
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

export default WhoIsContainer;