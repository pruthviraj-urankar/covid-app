import apis from "../apis";

export const fetchCovidUpdates = () => {
    return async (dispatch) => {
        try {
            const response = await apis.get("/updatelog/log.json");
            dispatch({
                type: "SUCCESS_FETCH_COVID_UPDATES",
                payload: response.data,
            });
        }
        catch (err) {
            dispatch({
            type: "ERROR_FETCH_UPDATES",
            payload: err,
            });
        
    }}
};
