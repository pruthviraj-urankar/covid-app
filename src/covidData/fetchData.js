import apis from '../apis'


export const fetchCovidData=()=>{
    return async (dispatch)=>{
        try{
            const response = await apis.get("/v4/min/data.min.json");
            dispatch({
                type:'SUCCESS_FETCH_COVID_DATA',
                payload:response.data
            });
        }
        catch(err){
            dispatch({
                type:'ERROR_FETCH_COVID_DATA',
                payload:err
            });
        }
    }
}