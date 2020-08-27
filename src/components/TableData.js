import React from 'react';
import {connect} from 'react-redux';

import './TableData.scss';
import {convertToIndian} from '../common/convertToIndia';
import {STATE_NAMES} from '../constants';


const mapStateToProps = (state) => {
    return { 
        covidData: state.covidData,
        };
    };


class TableData extends React.Component{

    callState=(key)=>{
        let path="/state/"+key;
        this.props.push(path);
    }


    renderTable(){
        const data=this.props.covidData.data;
        return Object.keys(data).map((key,value)=>{
            let x=String(parseInt(data[key].total.confirmed)-(parseInt(data[key].total.recovered)+parseInt(data[key].total.deceased)));
            return (
                <div className="row" key={key} onClick={()=>{this.callState(key)}}>
                    <div className="cell heading" >
                        <div>{STATE_NAMES[key]}</div>
                    </div>
                    <div className="cell">
                        <div>{convertToIndian(String(data[key].total.confirmed))} </div>
                    </div>
                    <div className="cell">
                        <div>{convertToIndian(String(x))}</div>
                    </div>
                    <div className="cell">
                        <div>{convertToIndian(String(data[key].total.recovered))}</div>
                    </div>
                    <div className="cell">
                        <div>{convertToIndian(String(data[key].total.deceased))}</div>
                    </div>
                    <div className="cell">
                        <div>{convertToIndian(String(data[key].total.tested))}</div>
                    </div>
                </div>
            );
        });
    }


    render(){
        if(this.props.covidData.isDataFetched){
        return(
            <div>
                <div className="table-container">
                    <div className="table fadeInUp" style={{ gridTemplateColumns: `repeat(6, auto)`,}}>
                        <div className="row heading">
                            <div className="cell heading">
                                <div>State/UT</div>
                            </div>
                            <div className="cell heading">
                                <div>Confirmed</div>
                            </div>
                            <div className="cell heading">
                                <div>Active</div>
                            </div>
                            <div className="cell heading">
                                <div>Recovered</div>
                            </div>
                            <div className="cell heading">
                                <div>Deceased</div>
                            </div>
                            <div className="cell heading">
                                <div>Tested</div>
                            </div>
                        </div>   
                        {this.renderTable()}
                    </div>
                </div>
            </div>
        );
        }
        else{
        return(
            <div>
                <div className="table-container">
                    <div className="table fadeInUp" style={{ gridTemplateColumns: `repeat(6, auto)`,}}>
                        <div className="row heading">
                            <div className="cell heading">
                                <div>State/UT</div>
                            </div>
                            <div className="cell heading">
                                <div>Confirmed</div>
                            </div>
                            <div className="cell heading">
                                <div>Active</div>
                            </div>
                            <div className="cell heading">
                                <div>Recovered</div>
                            </div>
                            <div className="cell heading">
                                <div>Deceased</div>
                            </div>
                            <div className="cell heading">
                                <div>Tested</div>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        );
        }
    }
}

export default connect(mapStateToProps)(TableData);
