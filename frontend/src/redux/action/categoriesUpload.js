import Axios from "axios";
export const CANTAINER_TYPE_Categories ={
    FetchingdataCategories:"feching_data_Categories",
    resultdataCategories:"result_data_Categories",
    resulterrorCategories:"result_error_Categories"
}

export const FetchingdataCategories=()=>{
    console.log("fetching data is calling Categories");
    return{
            type:CANTAINER_TYPE_Categories.FetchingdataCategories,
            isFetchingCategories:true,
            resultCategories:false,
        }
}
export const resultdataCategories=(result,dataCategories)=>{
    return{
            type:CANTAINER_TYPE_Categories.resultdataCategories,
            isFetchingCategories:false,
            resultCategories:result,
            dataCategories,
    }
}
export const resulterrorCategories=(errorCategories)=>{
    console.log("result error is calling Categories");
    return{
                type:CANTAINER_TYPE_Categories.resulterrorCategories,
                isFetchingCategories:false,
                errorCategories,
        }
}

export const CategoriesUpload=(data)=>{
    return(dispatch)=>{  
    dispatch(FetchingdataCategories());    
    Axios.post("http://192.168.100.152:8080/Categories",data)
    .then((res)=>{
        if(res.data.resultdata!==undefined)
        { 
             dispatch(resultdataCategories(res.data.result,res.data.resultdata));
        }
 
    })
    .catch((error)=>{
        dispatch(resulterrorCategories(true));
    }) 
    }
}