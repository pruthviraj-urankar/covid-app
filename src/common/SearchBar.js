import React from 'react';

import AutoComplete from './AutoComplete';

/*const getSuggestions=value=>{
    const inputValue=value.trim().toLowerCase();
    const inputLength=value.length;
    return inputLength===0 ? [] : Object.keys(STATE_CODES).filter(key=> key.toLowerCase().slice(0,inputLength)===inputValue);
}*/


class SearchBar extends React.Component{
    render(){
        return(
            <div>
                <AutoComplete
                push={this.props.history.push}
                />
            </div>
        );
    }

    
}

export default SearchBar;