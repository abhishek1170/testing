import {CANTAINER_TYPE} from "../action/action";
import {CANTAINER_TYPE_Login} from "../action/actionLogin";
import {CANTAINER_TYPE_Post} from "../action/uplaodPost";
import {CANTAINER_TYPE_GetPost} from "../action/getPostAction";
import {CANTAINER_TYPE_Single} from "../action/singlePostAction";
import { CANTAINER_TYPE_Comment } from "../action/uploadComment";
import {CANTAINER_TYPE_GetComment} from "../action/getComment";
import {CANTAINER_TYPE_Reply} from "../action/uploadReply";
import {CANTAINER_TYPE_GetReply} from "../action/replyGet";
import {CANTAINER_TYPE_Categories} from "../action/categoriesUpload";
import {CANTAINER_TYPE_GetCategories} from "../action/getCategories";
import { CANTAINER_TYPE_GETLIKE } from "../action/likeAction";


const store ={
    isFetching:false,
    result:false,
    data:null,
    error:null,
    isFetchingLogin:false,
    resultLogin:false,
    dataLogin:null,
    errorLogin:null,
    isFetchingPost:false,
    resultPost:false,
    dataPost:[],
    errorPost:null,
    isFetchingGetPost:false,
    resultGetPost:false,
    GetPost:[],
    errorGetPost:null,
    isFetchingSingle:false,
    resultSingle:false,
    dataSingle:[],
    errorSingle:null,
    isFetchingComment:false,
    resultComment:false,
    dataComment:[],
    errorComment:null,
    isFetchingGetComment:false,
    resultGetComment:false,
    GetComment:[],
    resultdataComment:[],
    errorGetComment:null,
    isFetchingReply:false,
    resultReply:"default",
    errorReply:false,
    isFetchingGetReply:false,
    resultGetReply:false,
    GetReply:[],
    errorGetReply:false,
    replyUpload:[],
    isFetchingCategories:false,
    resultCategories:"default",
    dataCategories:[],
    errorCategories:false,
    isFetchingGetCategories:false,
    resultGetCategories:false,
    GetCategories:[],
    errorGetCategories:false,
    MainCategories:"ALL",
    resultLike:false,
}
export default function Reducer(state=store,action){
    switch(action.type){
        case CANTAINER_TYPE.Fetchingdata:
        {   
            return {
                ...state,
                ...action                  
            }
        }
        case CANTAINER_TYPE.resultdata:
        {
            return {
                ...state,
                ...action
            }
        }
        case CANTAINER_TYPE.resulterror:
        {
            return {
                ...state,
                ...action
            }                
        }
        case CANTAINER_TYPE_Login.FetchingdataLogin:
        {   
            return {
                ...state,
                ...action                  
            }
        }
        case CANTAINER_TYPE_Login.resultdataLogin:
        {
            return {
                ...state,
                ...action
            }
        }
        case CANTAINER_TYPE_Login.resulterrorLogin:
        {
            return {
                ...state,
                ...action
            }                
        }
        case CANTAINER_TYPE_Post.FetchingdataPost:
        {   
            return {
                ...state,
                ...action                  
            }
        }
        case CANTAINER_TYPE_Post.resultdataPost:
        {
            return {
                ...state,
                ...action,
                dataPost:[...state.dataPost,action.dataPost]
            }
        }
        case CANTAINER_TYPE_Post.resulterrorPost:
        {
            return {
                ...state,
                ...action
            }                
        }
        case CANTAINER_TYPE_GetPost.FetchingdataGetPost:
        {   
            return {
                ...state,
                ...action                  
            }
        }
        case CANTAINER_TYPE_GetPost.resultdataGetPost:
        {
            return {
                ...state,
                ...action
            }
        }
        case CANTAINER_TYPE_GetPost.resulterrorGetPost:
        {
            return {
                ...state,
                ...action
            }                
        }
        case CANTAINER_TYPE_Single.FetchingdataSingle:
        {   
            return {
                ...state,
                ...action                  
            }
        }
        case CANTAINER_TYPE_Single.resultdataSingle:
        {
            return {
                ...state,
                ...action
            }
        }
        case CANTAINER_TYPE_Single.resulterrorSingle:
        {
            return {
                ...state,
                ...action
            }                
        }
        case "dafaultthecondition":
        {
            return{
                ...state,
                ...action
            }
        }
        case CANTAINER_TYPE_Comment.FetchingdataComment:
        {   
            return {
                ...state,
                ...action                  
            }
        }
        case CANTAINER_TYPE_Comment.resultdataComment:
        {
            return {
                ...state,
                ...action,
                resultdataComment:[...state.resultdataComment,action.resultdataComment]
            }
        }
        case CANTAINER_TYPE_Comment.resulterrorComment:
        {
            return {
                ...state,
                ...action
            }                
        }
        case CANTAINER_TYPE_GetComment.FetchingdataGetComment:
        {   
            return {
                ...state,
                ...action                  
            }
        }
        case CANTAINER_TYPE_GetComment.resultdataGetComment:
        {
            return {
                ...state,
                ...action,
            }
        }
        case CANTAINER_TYPE_GetComment.resulterrorGetComment:
        {
            return {
                ...state,
                ...action
            }                
        }
        case CANTAINER_TYPE_Reply.FetchingdataReply:
        {   
            return {
                ...state,
                ...action                  
            }
        }
        case CANTAINER_TYPE_Reply.resultdataReply:
        {
            return {
                ...state,
                ...action,
                replyUpload:[...state.replyUpload,action.replyUpload],
            }
        }
        case CANTAINER_TYPE_Reply.resulterrorReply:
        {
            return {
                ...state,
                ...action
            }                
        }
        case CANTAINER_TYPE_GetReply.FetchingdataGetReply:
        {   
            return {
                ...state,
                ...action                  
            }
        }
        case CANTAINER_TYPE_GetReply.resultdataGetReply:
        {
            return {
                ...state,
                ...action,
            }
        }
        case CANTAINER_TYPE_GetReply.resulterrorGetReply:
        {
            return {
                ...state,
                ...action
            }                
        }
        case CANTAINER_TYPE_Categories.FetchingdataCategories:
        {
            return{
                ...state,
                ...action,
            }
        }
        case CANTAINER_TYPE_Categories.resultdataCategories:
        {
            return{
                ...state,
                ...action,
                dataCategories:[...state.dataCategories,action.dataCategories]
            }
        }
        case CANTAINER_TYPE_Categories.resulterrorCategories:
        {
            return{
                ...state,
                ...action,
            }
        }
        case CANTAINER_TYPE_GetCategories.FetchingdataGetCategories:
        {
            return{
                ...state,
                ...action,
            }
        }
        case CANTAINER_TYPE_GetCategories.resultdataGetCategories:
        {
            return{
                ...state,
                ...action,
            }
        }
        case CANTAINER_TYPE_GetCategories.resulterrorGetCategories:
        {
            return{
                ...state,
                ...action,
            }
        }
        case "MainCategories":
        {
            return{
                ...state,
                ...action,
            }
        }
        case CANTAINER_TYPE_GETLIKE.getlike:
        {
            return{
                ...state,
                ...action,
            }
        }
        default:
            {
            return {
               ...state
            };
        }
    }   

}