import Axios from "axios";
import {Session} from "bc-react-session";

export const CANTAINER_TYPE_Single ={
    FetchingdataSingle:"feching_data_Single",
    resultdataSingle:"result_data_Single",
    resulterrorSingle:"result_error_Single"
}
export const defaultthecondition=()=>{
    return{
        type:"dafaultthecondition",
        dataSingle:[],
        isFetchingSingle:false,
        resultSingle:false,
        errorSingle:false,

    }
}
export const FetchingdataSingle=()=>{
    return{
            type:CANTAINER_TYPE_Single.FetchingdataSingle,
            isFetchingSingle:true,
            resultSingle:false,
        }
}
export const resultdataSingle=(dataSingle)=>{
    return{
            type:CANTAINER_TYPE_Single.resultdataSingle,
            isFetchingSingle:false,
            resultSingle:true,
            dataSingle,
    }
}
export const resulterrorSingle=(errorSingle)=>{
    return{
                type:CANTAINER_TYPE_Single.resulterrorSingle,
                isFetchingSingle:false,
                errorSingle
        }
}
export const getSinglePost=(props,data)=>{
 
    return(dispatch)=>{  
    dispatch(FetchingdataSingle());    
    Axios.post("http://192.168.100.152:8080/singlePost",{_id:data})
    .then((res)=>{
        if(res.data == "No Post found")
        {
            props.history.push("/timeline");
        }
        dispatch(resultdataSingle(res.data));                
    })
    .catch((error)=>{
        dispatch(resulterrorSingle(error));
    }) 
    }
}