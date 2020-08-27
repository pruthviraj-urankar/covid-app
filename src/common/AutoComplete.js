import React, { Component, Fragment } from "react";

import {STATE_CODES} from '../constants';

import './AutoComplete.css';


class Autocomplete extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ""
    };
  }

  navigateToState=(x)=>{
    const id =Object.keys(STATE_CODES).filter(key=> key===x );
    const key=(STATE_CODES[id[0]]);
    const path="/state/"+key;
    this.props.push(path);
  }

  onChange = e => {
    let value=e.currentTarget.value;
    const inputValue=value.trim().toLowerCase();
    const inputLength=value.length;
    const filteredSuggestions = inputLength===0 ? [] : Object.keys(STATE_CODES).filter(key=> key.toLowerCase().slice(0,inputLength)===inputValue);
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };


  onClick = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;
    if(!(filteredSuggestions===[]) && activeSuggestion>=0){
        let x= filteredSuggestions[activeSuggestion];
        this.navigateToState(x);
    }
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;
    if (e.keyCode === 13) {
      let x= filteredSuggestions[activeSuggestion];
      this.navigateToState(x);
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    }
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li
                  className={className}
                  key={suggestion}
                  onClick={onClick}
                >
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        );
      }
    }

    return (
      <Fragment>
        <div className="ui search">
        <div className="ui icon input">
        <input
          className="prompt"
          placeholder="Search for a State"
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        />
        </div>
        </div>
        <div className="results">
        {suggestionsListComponent}
        </div>
        
      </Fragment>
    );
  }
}

export default Autocomplete;