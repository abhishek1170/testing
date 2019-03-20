import Axios from "axios";
import {socket} from "../../index";

export const CANTAINER_TYPE_Post ={
    FetchingdataPost:"feching_data_post",
    resultdataPost:"result_data_post",
    resulterrorPost:"result_error_post"
}

export const FetchingdataPost=()=>{
    console.log("fetching data is calling uploadpost");
    return{
            type:CANTAINER_TYPE_Post.FetchingdataPost,
            isFetchingPost:true,
            resultPost:false,
        }
}
export const resultdataPost=(dataPost)=>{
    console.log("result data is calling post",dataPost);
    return{
            type:CANTAINER_TYPE_Post.resultdataPost,
            isFetchingPost:false,
            resultPost:true,
            dataPost
    }
}
export const resulterrorPost=(errorPost)=>{
    console.log("result error is calling pOst");
    return{
                type:CANTAINER_TYPE_Post.resulterrorPost,
                isFetchingPost:false,
                resultPost:false,
                errorPost,
        }
}
export const uploadPost=(data)=>{
    return(dispatch)=>{  
    dispatch(FetchingdataPost());    
    Axios.post("http://192.168.100.152:8080/uploadPost",data)
    .then((res)=>{
      dispatch(resultdataPost(res.data));
      socket.emit("recPost",res.data);
    })
    .catch((error)=>{
        dispatch(resulterrorPost("network error"));
    }) 
    }
}