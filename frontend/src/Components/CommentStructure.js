import React from "react";
import {connect} from "react-redux";
import {Session} from "bc-react-session";
import { uploadReply} from "../redux/action/uploadReply";
import Reply from "../Components/replayStructure";

class Comment extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
        alert:"hide",
        Reply:"",
        show:"none",
        cantain:"",
        color:"orng_btn"
    }
  }

  handleOnChange=(event)=>{
      this.setState({[event.target.name]:event.target.value});
  }
  onSubmitHandler=(event)=>{
    event.preventDefault();
    const obj={
      commentId:this.props.data._id,
      Reply:this.state.Reply,
      email:Session.getSession().payload.email,
      time:Date.now(),
    }
    this.props.dispatch(uploadReply(obj));
    document.getElementById("clear_form_ppl").reset();
    this.setState({cantain:null,color:"orng_btn"});
  }

  onChangeButton=(event)=>{
    if(this.state.cantain==null)
    {
      this.setState({cantain:  
      <div className="cmnt_div" style={{marginBottom:20}}>
      <form id="clear_form_ppl" onSubmit={this.onSubmitHandler}>
      <input type="text" placeholder="Add a Comment" className="cmnt_bx" name="Reply" onChange={this.handleOnChange}  required autoComplete="off"/>
      <input type="submit" className="sub_bttn" defaultValue="Submit Comment" />
            
      </form>
      </div>,
       show:"display",color:"black_btn",alert:"show"
    });
    }
    else{
      this.setState({cantain:null,show:"none",color:"orng_btn",alert:"hide"});
    }

    
  }
  render(){

    return (
      <ul>
      <li>
        <div className="list_image">
          <div className="image_sec"><img src="images/post_img.png" /></div>
          <div className="image_name">{this.props.data.email}</div>
        </div>
        <div className="list_info">
            {this.props.data.Comment}
            
        </div>     
     
        <input type="button" defaultValue="Reply" className={this.state.color} onClick={this.onChangeButton} style={{marginBottom:20}}/>
        {/* <div className="list_info">{this.errorReply?"Network error":this.props.isFetchingReply?"data is fetching":this.props.resultReply=="default"?"":this.props.resultReply==true?"reply done":"something goes wrong"} </div>    */}
        {this.state.cantain}
             <ul>
              {
                this.props.replyUpload.length==0?null
                  :this.props.replyUpload.map((value)=>{
                    if(value.commentId==this.props.data._id)
                      return <li><Reply data={value}/></li>
                  })
              }
              {
                this.props.GetReply.length==0?"":
                  this.props.GetReply.map((value)=>{
                     if(value.commentId==this.props.data._id)
                         return <li><Reply data={value}/></li>
                  })
                }
             </ul>
      </li>
      </ul>        
    );
  }
 
}


function connectStatefromProps(state){
  return {
    isFetchingReply:state.isFetchingReply,
    resultReply:state.resultReply,
    errorReply:state.errorReply,
    GetReply:state.GetReply,
    replyUpload:state.replyUpload,
  }
}
export default connect(connectStatefromProps,null)(Comment);


