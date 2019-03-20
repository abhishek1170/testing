import Axios from "axios";

export const CANTAINER_TYPE_GetCategories ={
    FetchingdataGetCategories:"feching_data_getCategories",
    resultdataGetCategories:"result_data_getCategories",
    resulterrorGetCategories:"result_error_getCategories"
}

export const FetchingdataGetCategories=()=>{
    console.log("fetching data is calling getCategories");
    return{
            type:CANTAINER_TYPE_GetCategories.FetchingdataGetCategories,
            isFetchingGetCategories:true,
            resultGetCategories:false,
        }
}
export const resultdataGetCategories=(GetCategories)=>{
    return{
            type:CANTAINER_TYPE_GetCategories.resultdataGetCategories,
            isFetchingGetCategories:false,
            resultGetCategories:true,
            GetCategories,
    }
}
export const resulterrorGetCategories=(errorGetCategories)=>{
    console.log("result error is calling Categories");
    return{
                type:CANTAINER_TYPE_GetCategories.resulterrorGetCategories,
                isFetchingGetCategories:false,
                errorGetCategories,
        }
}
export const getCategories=()=>{
    return(dispatch)=>{  
    dispatch(FetchingdataGetCategories());    
    Axios.post("http://192.168.100.152:8080/getCategories",{})
    .then((res)=>{
        dispatch(resultdataGetCategories(res.data));                
    })
    .catch((error)=>{
        dispatch(resulterrorGetCategories("network error"));
    }) 
    }
}