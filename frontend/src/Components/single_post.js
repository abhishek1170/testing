import React from "react";
import { connect } from "react-redux";
import {getSinglePost,defaultthecondition} from "../redux/action/singlePostAction";
import {Session} from "bc-react-session";
import {uploadComment,resultdataComment} from "../redux/action/uploadComment";
import {Link} from "react-router-dom";
import Comment from "./CommentStructure";
import {getComment} from "../redux/action/getComment";
import {getReply} from "../redux/action/replyGet";
import {getLike} from "../redux/action/likeAction";
import {resultdataReply} from "../redux/action/uploadReply";
import {socket} from "../index";

class Singlepost extends React.Component{
    constructor(props){
      super(props)
      this.state={
        postId:this.props.match.params.data,
        email:Session.getSession().payload.email,
        Comment:"",
        count:0,
        likeYes:false,
        noOfLikes:0,
      }
    }
    onChangeComment=(event)=>{
      this.setState({[event.target.name]:event.target.value});
    }
    onSubmitComment=(event)=>{
      event.preventDefault();
      this.props.dispatch(uploadComment(this.state));
      document.getElementById("clear_form_haha").reset();
    }

    onLikeClick=(event)=>{
      event.preventDefault();
      this.props.dispatch(getLike({
            postId:this.props.dataSingle._id,
            email:Session.getSession().payload.email,
      }));
      if(this.state.likeYes==true)
      {
          this.setState({noOfLikes:this.state.noOfLikes-1,likeYes:false})
      }
      else{
          this.setState({noOfLikes:this.state.noOfLikes+1,likeYes:true})
        }

    }
    render(){
        console.log("likes >>>>",this.props.dataSingle.title,"   ",this.props.dataSingle);
        if(this.props.dataSingle.likes!==undefined)
        {
            if(this.props.dataSingle.likes.indexOf(Session.getSession().payload.email)!==-1)
            {
               if(this.state.count==0)
                this.setState({likeYes:true,count:1,noOfLikes:this.props.dataSingle.likes.length});
               console.log("value is >>>",this.props.dataSingle.likes); 
            }
        }
        const length = this.props.dataSingle.likes!==undefined?this.props.dataSingle.likes.length:0
        const time = new Date(this.props.dataSingle.time);
        let time1="";
        if(time.getHours()>12)
        {
          time1=time.getHours()%12+":"+time.getMinutes()+" pm";
        }
        else{
          time1=time.getHours()+":"+time.getMinutes()+" am";
        }
        return (
            <div>
              <div className="navbar navbar-inverse navbar-fixed-top">
                <div className="navbar-inner">
                  <div className="container">
                    <button type="button" className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> </button>
                    <a className="brand" href>PPL</a>
                    <div className="pro_info pull-right">
                      <div className="pro_icn"><img src="images/pic_small.png" /></div>
                      <div className="pro_txt">Me<b className="caret" /></div>
                      <ul className="dropdown-menu" role="menu" aria-labelledby="dLabel">
                        <li><a tabIndex={-1} href="#">My Profile</a></li>
                        <li><a tabIndex={-1} href="#">Message Box</a></li>
                        <li><a tabIndex={-1} href="#">Change Language</a></li>
                        <li className="divider" />
                        <li><a tabIndex={-1} href="#">
                            <input type="text" placeholder="search" />
                          </a></li>
                      </ul>
                    </div>
                    <div className="nav-collapse collapse">
                      <ul className="nav">
                        <li className="active"> <a href>Home</a> </li>
                        <li className> <a href>E-Coupons</a> </li>
                        <li className> <a href>E-Brands</a> </li>
                        <li className> <a href>Resuse Market</a> </li>
                        <li className> <a href>Lost and Found</a> </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header">
                <div className="header_lft">
                  <div className="logo"><img src="images/logo.png" onClick={()=>{this.props.history.push("/")}}/></div>
                  <div className="navigatn">
                    <ul>
                      <li><a href="#" className="active">Home</a></li>
                      <li><a href="#"> E-Coupons </a></li>
                      <li><a href="#">E-Brands </a></li>
                      <li><a href="#"> Resuse Market </a></li>
                      <li><a href="#"> Lost and Found</a></li>
                    </ul>
                  </div>
                </div>
                <div className="header_rgt">
                  <div className="flag_div"><img src="images/flag.png" /></div>
                  <input type="text" placeholder="Search" className="txt_box" />
                  <div className="msg_box"><a href="#"><span className="msg_count">100</span></a></div>
                  <div className="info_div">
                    <div className="image_div"> <img src="images/pic.png" /> </div>
                    <div className="info_div1">Me</div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="content">
                  <div className="content_rgt">
                    <div className="rght_btn"> <span className="rght_btn_icon"><img src="images/btn_iconb.png" alt="up" /></span> <span className="btn_sep"><img src="images/btn_sep.png" alt="sep" /></span> <a href="#">Upload Post</a> </div>
                    <div className="rght_btn"> <span className="rght_btn_icon"><img src="images/btn_icona.png" alt="up" /></span> <span className="btn_sep"><img src="images/btn_sep.png" alt="sep" /></span> <a href="#">Invite Friends</a> </div>
                    <div className="rght_cate">
                      <div className="rght_cate_hd" id="rght_cat_bg">Categories</div>
                      <div className="rght_list">
                        <ul>
                          <li><a href="#"><span className="list_icon"><img src="images/icon_01.png" alt="up" /></span> CATS</a></li>
                          <li><a href="#"><span className="list_icon"><img src="images/icon_02.png" alt="up" /></span> Dogs</a></li>
                          <li><a href="#"><span className="list_icon"><img src="images/icon_03.png" alt="up" /></span> Birds</a></li>
                          <li><a href="#"><span className="list_icon"><img src="images/icon_04.png" alt="up" /></span> Rabbit</a></li>
                          <li><a href="#"><span className="list_icon"><img src="images/icon_05.png" alt="up" /></span> Others</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="rght_cate">
                      <div className="rght_cate_hd" id="opn_cat_bg">Featured</div>
                      <div className="sub_dwn">
                        <div className="feat_sec">
                          <div className="feat_sec_img"><img src="images/feat_img1.png" alt="image" /></div>
                          <div className="feat_txt">Lorem Ipusum Text</div>
                        </div>
                        <div className="feat_sec">
                          <div className="feat_sec_img"><img src="images/feat_img2.png" alt="image" /></div>
                          <div className="feat_txt">Lorem Ipusum Text</div>
                          <div className="btm_rgt">
                            <div className="btm_arc">Dogs</div>
                          </div>
                        </div>
                        <div className="feat_sec">
                          <div className="feat_sec_img"><img src="images/feat_img3.png" alt="image" /></div>
                          <div className="feat_txt">Lorem Ipusum Text</div>
                          <div className="btm_rgt">
                            <div className="btm_arc">Rabbits</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content_lft">
                    <div className="contnt_2">
                      <div className="div_a">
                        <div className="div_title">{this.props.dataSingle.title}</div>
                        <div className="btm_rgt">
                          <div className="btm_arc">Cats</div>
                        </div>
                        <div className="div_top">
                          <div className="div_top_lft"><img src="images/img_6.png" />{this.props.dataSingle.email}</div>
                          <div className="div_top_rgt"><span className="span_date">{new Date(this.props.dataSingle.time).getDate()} {new Date(this.props.dataSingle.time).getMonth()} {new Date(this.props.dataSingle.time).getFullYear()}</span><span className="span_time">{time1}</span></div>
                        </div>
                        <div className="div_image"><img src={"http://192.168.100.152:8080"+this.props.dataSingle.path} alt="pet" /></div>
                        <div className="div_btm">
                          <div className="btm_list">
                            <ul>
                              <li><a href="#"><span className="btn_icon"><img src="images/icon_001.png" alt="share" /></span>Share</a></li>
                              <li><a href="#"><span className="btn_icon"><img src="images/icon_002.png" alt="share" /></span>Flag</a></li>
                              <li style={{
                                background:this.state.color
                              }}
                              ><a href="#" id="yoyihaha" value={length} onClick={this.onLikeClick}><span className="btn_icon"><img src="images/icon_003.png" alt="share"/></span>{
                                  this.state.noOfLikes
                                } Likes</a></li>
                              <li><a href="#"><span className="btn_icon"><img src="images/icon_004.png" alt="share" /></span>4 Comments</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="contnt_3">
                      <ul>
                        <li>
                             
                        {
                          this.props.resultdataComment.length==0?"Comment something here":
                                this.props.resultdataComment.sort((value,value2)=>{
                                  return new Date(value2.time)-new Date(value.time); 
                                }).map((value)=>{
                                return <Comment data={value}/> }
                                )
                        } 
                           
                        </li>
                          
                           {this.props.GetComment.length==0?this.props.resultdataComment.length==0?"No Comments here":null:
                            this.props.GetComment.sort((value,value2)=>{
                              return new Date(value2.time)-new Date(value.time); 
                            }).map(
                              (value)=>{
                            return <li><Comment data={value}/></li> }
                            )
                           } 
                        
                        <li>
                        <div className="cmnt_div1">
                          <form  id="clear_form_haha" onSubmit={this.onSubmitComment} >
                            <input   type="text" placeholder="Enter your Comment" className="cmnt_bx1" name="Comment" onChange={this.onChangeComment} required/>
                            <input type="submit" className="sub_bttn1" defaultValue="Submit Comment" />
                            <div>{this.props.errorComment?"Network error plse try again":this.props.isFetchingComment?"Comment is loading plse stay":this.props.resultComment?"uploaded comment":""}</div>
                            <div>{this.props.errorComment?"Network error here":""}</div>
                          </form>
                          </div>
                        </li>
                      </ul>
                      <div className="view_div"><a href="#">View more</a></div>
                    </div>
                  </div>
                </div>
                <div className="clear" />
              </div>
              <div className="footr">
                <div className="footr_lft">
                  <div className="footer_div1">Copyright © Pet-Socail 2014 All Rights Reserved</div>
                  <div className="footer_div2"><a href="#">Privacy Policy </a>| <a href="#"> Terms &amp; Conditions</a></div>
                </div>
                <div className="footr_rgt">
                  <ul>
                    <li><a href="#"><img src="images/social_1.png" /></a></li>
                    <li><a href="#"><img src="images/social_2.png" /></a></li>
                    <li><a href="#"><img src="images/social_3.png" /></a></li>
                    <li><a href="#"><img src="images/social_4.png" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          );
      
    }



    componentDidMount(){
          socket.on("recComment",data=>{
            this.props.dispatch(resultdataComment(true,data));
          })
          socket.on("recReply",data=>{
            this.props.dispatch(resultdataReply(true,data));
          })
          this.props.dispatch(getSinglePost(this.props,this.props.match.params.data));      
          this.props.dispatch(getComment(this.props.match.params.data));
          this.props.dispatch(getReply())

    }
    componentWillUnmount(){
        this.props.dispatch(defaultthecondition());
    }

}

function connectStateToProps(state){
    return {
      isFetchingSingle:state.isFetchingSingle,
      resultSingle:state.resultSingle,
      dataSingle:state.dataSingle,
      errorSingle:state.errorSingle,
      isFetchingComment:state.isFetchingComment,
      resultComment:state.resultComment,
      dataComment:state.dataComment,
      errorComment:state.errorComment,
      isFetchingGetComment:state.isFetchingGetComment,
      resultGetComment:state.resultGetComment,
      GetComment:state.GetComment,
      resultdataComment:state.resultdataComment,
      errorGetComment:state.errorGetComment,
      resultLike:state.resultLike,
      GetPost:state.GetPost,
      dataPost:state.dataPost,
    }
}

export default connect(connectStateToProps,null)(Singlepost);