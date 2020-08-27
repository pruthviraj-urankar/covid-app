import React from "react";
import { connect } from "react-redux";
import SearchBar from "../common/SearchBar";
import State from './State';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { fetchCovidData } from "../covidData/fetchData";
import { fetchCovidUpdates } from "../covidUpdates/fetchUpdates";
import Home from './Home';
import NavBar from "../common/NavBar";
import ErrorPage from './ErrorPage'

import './App.css'


class App extends React.Component {
  componentDidMount() {
    this.props.fetchCovidData();
    this.props.fetchCovidUpdates();
  }
  renderList() {
    return this.props.covidData
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route component={NavBar} />
          <div>
            <div className="searchClass" >
              <Route component={SearchBar} />
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/state/:id" component={State} />
            <Route exact path="/error404" component={ErrorPage} />
            <Route component={ErrorPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}



export default connect(null, { fetchCovidData, fetchCovidUpdates })(App);
