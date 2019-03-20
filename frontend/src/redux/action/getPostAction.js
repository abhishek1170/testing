import Axios from "axios";

export const CANTAINER_TYPE_GetPost ={
    FetchingdataGetPost:"feching_data_getpost",
    resultdataGetPost:"result_data_getpost",
    resulterrorGetPost:"result_error_getpost"
}

export const FetchingdataGetPost=()=>{
    return{
            type:CANTAINER_TYPE_GetPost.FetchingdataGetPost,
            isFetchingGetPost:true,
            resultGetPost:false,
        }
}
export const resultdataGetPost=(GetPost)=>{
    return{
            type:CANTAINER_TYPE_GetPost.resultdataGetPost,
            isFetchingGetPost:false,
            resultGetPost:true,
            GetPost,
    }
}
export const resulterrorGetPost=(errorGetPost)=>{
    return{
                type:CANTAINER_TYPE_GetPost.resulterrorGetPost,
                isFetchingGetPost:false,
                resultGetPost:false,
                errorGetPost,
        }
}
export const getPost=()=>{
    return(dispatch)=>{  
    dispatch(FetchingdataGetPost());    
    Axios.post("http://192.168.100.152:8080/getPost",{})
    .then((res)=>{
        dispatch(resultdataGetPost(res.data));                
    })
    .catch((error)=>{
        dispatch(resulterrorGetPost("network error"));
    }) 
    }
}