import Axios from "axios";
export const CANTAINER_TYPE_GETLIKE={
    getlike:"Like_is_moving"
}
export const resultLike = (resultLike)=>{
    return{
        type:CANTAINER_TYPE_GETLIKE.getlike,
        resultLike
    }
}
export const getLike = (data)=>{
    return (dispatch)=>{
        Axios.post("http://192.168.100.152:8080/like",data)
        .then((res)=>{
    console.log("adtaa is herer",res)

            dispatch(resultLike(res.data));
        })
        .catch((err)=>{
            dispatch(resultLike(false));
        })
    }
}