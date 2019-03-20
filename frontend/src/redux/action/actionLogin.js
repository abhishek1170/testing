import Axios from "axios";
export const CANTAINER_TYPE_Login ={
    FetchingdataLogin:"feching_data_login",
    resultdataLogin:"result_data_login",
    resulterrorLogin:"result_error_login"
}

export const FetchingdataLogin=()=>{
    console.log("fetching data is calling Login");
    return{
            type:CANTAINER_TYPE_Login.FetchingdataLogin,
            isFetchingLogin:true,
            resultLogin:false,
        }
}
export const resultdataLogin=(dataLogin)=>{
    return{
            type:CANTAINER_TYPE_Login.resultdataLogin,
            isFetchingLogin:false,
            resultLogin:true,
            dataLogin,
    }
}
export const resulterrorLogin=(errorLogin)=>{
    console.log("result error is calling login");
    return{
                type:CANTAINER_TYPE_Login.resulterrorLogin,
                isFetchingLogin:false,
                resultLogin:false,
                errorLogin,
        }
}
export const login=(data)=>{
    return(dispatch)=>{  
    dispatch(FetchingdataLogin());    
    Axios.post("http://192.168.100.152:8080/login",data)
    .then((res)=>{
      dispatch(resultdataLogin(res.data.result));
                        
    })
    .catch((error)=>{
        dispatch(resulterrorLogin("network error"));
    }) 
    }
}