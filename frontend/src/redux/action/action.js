import Axios from "axios";

export const CANTAINER_TYPE ={
    Fetchingdata:"feching_data",
    resultdata:"result_data",
    resulterror:"result_error"
}

export const Fetchingdata=()=>{
    console.log("fetching data is calling");
    return{
            type:CANTAINER_TYPE.Fetchingdata,
            isFetching:true,
            result:false,
        }
}
export const resultdata=(data)=>{
    console.log("result data is calling");
    return{
            type:CANTAINER_TYPE.resultdata,
            isFetching:false,
            result:true,
            data,
    }
}
export const resulterror=(error)=>{
    console.log("result error is calling");
    return{
                type:CANTAINER_TYPE.resulterror,
                isFetching:false,
                result:false,
                error
        }
}
export const register=(data)=>{
    return(dispatch)=>{  
    dispatch(Fetchingdata());    
    Axios.post("http://192.168.100.152:8080/register",data)
    .then((res)=>{
        dispatch(resultdata(res.data.result));                
    })
    .catch((error)=>{
        dispatch(resulterror("network error"));
    }) 
    }
}