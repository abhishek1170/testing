
import React from "react";
import {connect} from "react-redux";
import {changeCategories} from "../redux/action/MainCategories";

class Categories extends React.Component{
    render(){
    return (        
        <div>
        <span className="list_icon"><img  src={"http://192.168.100.152:3000/images/"+this.props.data.path} alt="up" style={{width:"36px",height:"36px"}} /></span><span
            onClick={()=>{this.props.dispatch(changeCategories(this.props.data.categoriesName))}}
        >{this.props.data.categoriesName}</span>
        </div>
    )
    }
}

function makeConnect(state){
    return{
        
    }
}
export default connect(makeConnect,null)(Categories);