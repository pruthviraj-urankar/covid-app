

const initialState={
    isUpdateFetched:false,
    data:null,
};
export const covidUpdateReducer= (state=initialState,action)=>{
    switch(action.type){
        case 'SUCCESS_FETCH_COVID_UPDATES':
            return { ...state,
                isUpdateFetched:true,
                covidUpdates:action.payload,
                errorUpdate:null
            };
        
        case 'ERROR_FETCH_UPDATES':
            return{ ...state,
                isUpdateFetched:false,
                covidUpdates:null,
                errorUpdate:action.payload
            };
        default:
            return state;
        }
};