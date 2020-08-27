import React from 'react';
import {connect} from 'react-redux';


import DataDisplay from '../common/DataDisplay';
import DistrictTable from './DistrictTable';
import ErrorPage from './ErrorPage';
import {STATE_NAMES} from '../constants'

import './State.css'

const mapStateToProps = (state) => {
    return { 
        covidData: state.covidData,
        };
    };

class State extends React.Component{
    render(){
        const id=(this.props.match.params.id).toUpperCase();
        if(this.props.covidData.isDataFetched){
            if(this.props.covidData.data[id]===undefined)
            {
                this.props.history.push("/error404")
                return(
                    <ErrorPage/>
                )
            }
            const data=this.props.covidData.data[id].total;
            let time=(this.props.covidData.data[id].meta.last_updated).split("T");
            let ti=time[1].split("+");
            let x=String(parseInt(data.confirmed)-(parseInt(data.recovered)+parseInt(data.deceased)));
            return(
                <div>
                <div className="main-state-container">
                    <div className="state-container">
                        <div className="row">
                        <div className="col-left">
                            <div className="state-name">
                            {STATE_NAMES[id]}
                            </div>
                            <div className="time-display">
                            Last Updated on {time[0]} at {ti[0]} IST
                            </div>
                        </div>
                        <div className="col-right">
                            <div className="tested">
                            Tested
                            </div>
                            <div className="tested-value">
                            {data.tested}
                            </div>
                        </div>
                        </div>
                    </div>
                </div> 
                <div style={{marginTop:40,marginLeft:150, marginRight:150,clear:"both"}}>
                    <DataDisplay
                    total={data.confirmed}
                    recovered={data.recovered}
                    deceased={data.deceased}
                    active={x}
                    newCases=""
                    newRecovered=""
                    newDeath=""
                    />
                </div>
                <div className="table-data1"> 
                    <DistrictTable style={{marginTop:100}}
                        id={id}
                        push = {this.props.history.push}
                    />
                </div>
                </div>
            );
        }
        else{
            return(
            <div>
                <div className="main-state-container">
                    <div className="state-container">
                        <div className="row">
                        <div className="col-left">
                            <div className="state-name">
                            Please Wait
                            </div>
                            <div className="time-display">
                            No Updates
                            </div>
                        </div>
                        <div className="col-right">
                            <div className="tested">
                            Tested
                            </div>
                            <div className="tested-value">
                            ""
                            </div>
                        </div>
                        </div>
                    </div>
                </div> 
            </div>
            );

        }
    }
}

export default connect(mapStateToProps)(State);