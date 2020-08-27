import React from 'react';

import {convertToIndian} from './convertToIndia';
import './DataDisplay.css';


class DataDisplay extends React.Component{
    render(){
        return(
            <div>
                <div className="row">
                    <div className="column data-holder is-confirmed">
                        <div className="row-data"> Confirmed </div>
                        <div className="row-data"> +{convertToIndian(String(this.props.newCases))}</div>
                        <div className="case-data">{convertToIndian(String(this.props.total))} </div>
                    </div>
                    
                    <div className="column data-holder is-active">
                        <div className="row-data"> Active </div>
                        <div className="row-data"> </div>
                        <div className="case-data"> {convertToIndian(String(this.props.active))}</div>
                    </div>
                    <div className="column data-holder is-recovered">
                        <div className="row-data"> Recovered</div>
                        <div className="row-data"> +{convertToIndian(String(this.props.newRecovered))}</div>
                        <div className="case-data"> {convertToIndian(String(this.props.recovered))}</div>
                    </div>
                    <div className="column data-holder is-deceased">
                        <div className="row-data"> Deceased </div>
                        <div className="row-data"> +{convertToIndian(String(this.props.newDeath))}</div>
                        <div className="case-data"> {convertToIndian(String(this.props.deceased))}</div>
                    </div>
                </div> 
            </div>
        );
    }
}

export default DataDisplay;