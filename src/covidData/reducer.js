
const initialState={
    isDataFetched:false,
    data:null,
};
export const covidDataReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'SUCCESS_FETCH_COVID_DATA':
            return {
                isDataFetched:true,
                data:action.payload,
                errorData:null
            };
        case 'ERROR_FETCH_COVID_DATA':
            return{
                isDataFetched:false,
                data:null,
                errorData:action.payload
            }
        default:
            return state;
    }

};