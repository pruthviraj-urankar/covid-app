import React from 'react';
import {connect} from 'react-redux';

import DataDisplay from '../common/DataDisplay';
import TableData from './TableData';
import apis from '../apis';

import './Home.css';


const mapStateToProps = (state) => {
return { 
    covidData: state.covidData,
    covidUpdate:state.covidUpdate
    };
};



class Home extends React.Component{
    state={
        updateFetched:false,
        total:null,
        recovered:null,
        deceased:null,
        active:null,
        newCases:null,
        newRecovered:null,
        newDeath:null
    };



    componentDidMount(){
        this.fetch();
    }


    render(){
        return(
            <div>
                <div style={{marginTop:40,marginLeft:150, marginRight:150,clear:"both"}}>
                    <DataDisplay
                        total={this.state.total}
                        recovered={this.state.recovered}
                        deceased={this.state.deceased}
                        active={this.state.active}
                        newCases={this.state.newCases}
                        newRecovered={this.state.newRecovered}
                        newDeath={this.state.newDeath}
                    />
                </div><br/><br/>
                <div className="table-data1">
                    <TableData style={{marginTop:100}}
                        push={this.props.history.push}
                    />
                </div>
            </div>
        );
    }


    fetch=()=>{
        try{
            apis.get("/data.json").then((response) => this.dataPasser(response)).then(err=>console.log(err));
        }
        catch(err){
            console.log(err);
        }
    };


    dataPasser=(response)=>{
        if(response!=null){
        let temp=response.data.cases_time_series;
        const result=temp[temp.length-1];
        let x=String(parseInt(result.totalconfirmed)-(parseInt(result.totalrecovered)+parseInt(result.totaldeceased)));
        this.setState({
            updateFetched:true,
            total:result.totalconfirmed,
            recovered:result.totalrecovered,
            deceased:result.totaldeceased,
            active:x,
            newCases:result.dailyconfirmed,
            newRecovered:result.dailyrecovered,
            newDeath:result.dailydeceased,
        });
        }
    }
}

export default connect(mapStateToProps)(Home);