import React from "react";
import {uploadPost,resultdataPost} from "../redux/action/uplaodPost";
import {connect} from "react-redux";
import {Session} from "bc-react-session";
import {getPost} from "../redux/action/getPostAction";
import PostStructure from "../Components/postStructure";
import { CategoriesUpload} from "../redux/action/categoriesUpload";
import  Categories  from "../Components/categories";
import {getCategories} from "../redux/action/getCategories";
import {socket} from "../index";


class Timeline extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            show:"none",
            title:"",
            file:"",
            array:[],
            toolbar:null,
            categories:"",
            uploadImageCategories:"",
            realtime:"none",
            filter:"",
            selectCategories:"",
        }
    }
    selectCategories=(event)=>{
      this.setState({selectCategories:event.target.value});
    }
    onRealtimeCategories=()=>{
      this.setState({realtime:"block"})
    }
    onhandletext=(event)=>{
        this.setState({[event.target.name]:event.target.value});
    }
    onhandlefile=(event)=>{
        this.setState({[event.target.name]:event.target.files[0]});
    }
    onClick=(event)=>{
        event.preventDefault();
        if(this.state.show ==="none")
        {
          this.setState({show:"block"});
        }
        else{
           this.setState({show:"none"});
        }
    }
    sendData=(event)=>{
        let formData = new FormData();
        formData.append("categories",this.state.selectCategories);
        formData.append("title",this.state.title);
        formData.append("myfile",this.state.file);
        formData.append("email",Session.getSession().payload.email)
       this.props.dispatch(uploadPost(formData));
    }
    onClickDropdown=(event)=>{
      if(this.state.toolbar==null)
      {
        this.setState({toolbar: <div style={{
          backgroundColor:"orange",
          position:"relative",
          zIndex:80000,
          float:"right",
          color:"white",
          border:"1px solid black",
          marginTop:10,
          fontSize:30
          ,width:"200px",
          }}>
            <ul>
              <li
                style={{
                   margin:"10px 10px 0px 10px",
                   padding:0
                }}
              >
                  <div className="image_div" style={{float:"right"}}> <img src="images/pic.png"  /></div>
              Profile
            </li>
              <li
                style={{
                   margin:"10px 10px 10px 10px"
                }}
              ><div
              onClick={()=>{Session.destroy();
                this.props.history.push("/");
              }}
              >Logout</div></li>
            </ul>
        </div>
      })
      }
      else{
        this.setState({toolbar:null});
      }
    }

    onChangeCategories=(event)=>{
      this.setState({[event.target.name]:event.target.value});
    }
    onClickCategoriesImage=(event)=>{
      this.setState({[event.target.name]:event.target.files[0]})
    }
    onClickAddButton=()=>{
      let formData = new FormData();
      formData.append("Categories",this.state.categories);
      formData.append("myfile",this.state.uploadImageCategories);
      if(this.state.categories!=="" && this.state.uploadImageCategories!=="")
            this.props.dispatch(CategoriesUpload(formData));
      else
      {
        alert("name and img both required");
      }      
      document.getElementById("upload-text-categories").value="";
      document.getElementById("upload-file-categories").value="";

    }

    render(){ 
        return (
            <div>
           
            <div
              style={{
                display:this.state.realtime,
                position:"fixed",
                zIndex:10000000,
                top:0,
                left:0,
                right:0,
                bottom:0,
                background:"rgba(0,0,0,0.9)"
              }}
            >
                
                <div
                  style={{
                    position:"relative",
                    width:"400px",
                    margin:"10% auto",
                    background:"orange",
                  }}
                >
                        <button
                             onClick={()=>{this.setState({realtime:"none"})}}
                             style={{
                               position:"absolute",
                               right:0,
                               top:0,
                               background:"orange",
                               borderRadius:"50%",
                             }}
                         >X</button>
                 <div className="rght_cate">
                <div className="rght_cate_hd" id="rght_cat_bg">Categories</div>
                <div className="rght_cate_hd" id="rght_cat_bg">
                <input id="upload-file-categories" type="file" name="uploadImageCategories" style={{
                  display:"none"
                }}
                onChange={this.onClickCategoriesImage}/>   
                <label style={{
                    display:"inline-block",
                    margin:"0px",
                    padding:"0px",
                    height:"36px"
                }}for="upload-file-categories">
                <span className="rght_btn_icon"><img src="images/uploadCategories.png" width="36px" height="36px" alt="up" /></span>
                </label>             
                <input type="text" id="upload-text-categories" placeholder="  add categories here" onChange={this.onChangeCategories} name="categories" style={{pading:"20px",height:"auto",width:"50%",lineHeight:"30px",padding:"0px",margin:"0px"}}/>
                <span onClick={this.onClickAddButton}><img src="images/add.png" alt="add icon" width="36px" height="100%"/></span>
                </div>
                <div className="rght_list" style={{height:"350px",overflow:"scroll"}}>
                  <ul>
                       {
                        this.props.GetCategories!==[]?
                        this.props.GetCategories.map((value)=>{
                          return <li><Categories data={value}/></li>
                        }):null
                      }
                      {
                        this.props.dataCategories!==[]?
                        this.props.dataCategories.map((value)=>{
                          return <li><Categories data={value}/></li>
                        }):null
                      }
                  </ul>
                </div>
              </div>                        
                </div>
            </div> 

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
            <div className="logo"><a href="#"><img src="images/logo.png" /></a></div>
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
              <div className="info_div1" onClick={this.onClickDropdown}>Me</div>
              {this.state.toolbar}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <div className="content_rgt">
              <div className="rght_btn"> <span className="rght_btn_icon"><img src="images/btn_iconb.png" alt="up" /></span> <span className="btn_sep"><img src="images/btn_sep.png" alt="sep" /></span> <a  onClick={this.onClick}>Upload Post</a> </div>
              <div className="rght_cate">
                <div className="rght_cate_hd" id="rght_cat_bg">Categories</div>
                <div className="rght_cate_hd" id="rght_cat_bg">
                <input id="upload-file-categories" type="file" name="uploadImageCategories" style={{
                  display:"none"
                }}
                onChange={this.onClickCategoriesImage}/>   
                <label style={{
                    display:"inline-block",
                    margin:"0px",
                    padding:"0px",
                    height:"36px"
                }}for="upload-file-categories">
                <span className="rght_btn_icon"><img src="images/uploadCategories.png" width="36px" height="36px" alt="up" /></span>
                </label>             
                <input type="text" id="upload-text-categories" placeholder="  add categories here" onChange={this.onChangeCategories} name="categories" style={{paddingLeft:"10px",height:"auto",width:"50%",lineHeight:"30px"}}/>
                <span onClick={this.onClickAddButton}><img src="images/add.png" alt="add icon" width="36px" height="100%"/></span>
                </div>
                <div className="rght_list">
                <ul>
                  <li><Categories  data={{categoriesName:"ALL",path:"uploadCategories.png"}}/></li>
                  </ul>
                </div>
                <div className="rght_list" style={{height:"350px",overflow:"scroll"}}>
                 
                  <ul>
                       {
                        this.props.GetCategories!==[]?
                        this.props.GetCategories.map((value)=>{
                          return <li><Categories data={value}/></li>
                        }):null
                      }
                      {
                        this.props.dataCategories!==[]?
                        this.props.dataCategories.map((value)=>{
                          return <li><Categories data={value}/></li>
                        }):null
                      }
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
              <div className="contnt_1">
                <div className="list_1">
                  <ul>
                    <li>
                      <input type="checkbox" className="chk_bx" />
                      Friends</li>
                    <li>
                      <input type="checkbox" className="chk_bx" />
                      Flaged</li>
                  </ul>
                </div>
                <div className="timeline_div">
                  <div className="timeline_div1">
                    <div className="profile_pic">
                      <img src="images/timeline_img1.png" />
                      <div className="profile_text"><a href="#">Change Profile Pic</a></div>
                    </div>
                    <div classNameshe="profile_info">
                      <div className="edit_div"><a href="#">Edit <img src="images/timeline_img.png" /></a></div>
                      <div className="profile_form">
                        <ul>
                          <li>
                            <div className="div_name1">Name :</div>
                            <div className="div_name2">Stefiney Gibbs</div>
                          </li>
                          <li>
                            <div className="div_name1">Sex :</div>
                            <div className="div_name2">Female</div>
                          </li>
                          <li>
                            <div className="div_name1">Description :</div>
                            <div className="div_name3">This is an example of a comment. You can create as many comments like this one
                              or sub comments as you like and manage all of your content inside Account.</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="timeline_div2">
                    <ul>
                      <li><a href="#" className="active">Timeline    </a></li>
                      <li><a href="#">About  </a></li>
                      <li><a href="#">Album</a></li>
                      <li><a href="#"> Pets</a></li>
                      <li><a href="#">My Uploads </a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div style={
                        {
                         zIndex:999999,   
                         display:this.state.show,   
                         position:"fixed",
                         top:0,
                         bottom:0,
                         left:0,
                         right:0,
                         backgroundColor:"rgba(0,0,0,0.2)",
                        }}>
                        <div
                                style={{
                                    color:"white",
                                    width:400,
                                    position:"relative",
                                    margin:"10% auto",
                                    padding:"5px 20px 13px 20px",
                                    borderRadius:"10px",
                                    background:"orange",
                                    height:500,
                                }}
                        >
                            <a 
                                style={{
                                    diplay:"block",
                                    float:"right",
                                    marginTop:"2%",
                                    color:"orange",
                                    backgroundColor:"white",
                                    borderRadius:"50%",
                                    fontSize:"30px"
                                }}
                            onClick={this.onClick}>X</a>


                            <h2>Uplaod Post</h2>

                             <input type="text" placeholder="post title" name="title" required
                                style={{
                                    margin:"3% 9% 3% -2%",
                                    width:"100%",
                                }}
                                onChange={this.onhandletext}
                             /> 
                             <select onChange={this.selectCategories} required>
                             <option onClick={this.onRealtimeCategories} value="add">add a new</option>
                              {    
                                 this.props.dataCategories.length!==0?
                                    this.props.dataCategories.map((value)=>{
                                      return <option value={value.categoriesName}>{value.categoriesName}</option>
                                    })
                                :
                                 null  
                                }
                               {    
                                 this.props.GetCategories.length!==0?
                                    this.props.GetCategories.map((value)=>{
                                      return <option value={value.categoriesName}>{value.categoriesName}</option>
                                    })
                                :
                                    <option value="none">none</option>  
                                }
                             </select>          
                             <input type="file" placeholder="post title" name="file" required
                                style={{
                                    margin:"3% 9% 3% -2%",
                                    width:"100%",
                                }}
                                onChange={this.onhandlefile}
                             />      

                             <button
                                style={{
                                    display:"inline-block",
                                    position:"relative",
                                    background:"white",
                                     marginTop:"10%",
                                    color:"orange",
                                    fontSize:"20px",
                                    padding:"5px",
                                    borderRadius:"10%",
                                    textDecoration:"none",
                                }}
                                onClick={this.sendData}
                            >
                                Post
                            </button>
                            
                        </div> 
              </div>
                          
                   {
                     this.props.GetPost.filter(
                      (value)=>{
                        if(value.categories === this.props.MainCategories || this.props.MainCategories==="ALL")
                        return true;
                      }
                    ).length==0 &&  this.props.dataPost
                    .filter(
                     (value)=>{
                       if(value.categories === this.props.MainCategories || this.props.MainCategories==="ALL")
                       return true;
                     }
                    ).length==0?"there is no post regarding these categorie":null
                   }               

                    {
                      this.props.isFetchingPost?<div><h3>Post are loading</h3></div>:this.props.resultPost? <div>
                   {
                     this.props.dataPost
                     .filter(
                      (value)=>{
                        if(value.categories === this.props.MainCategories || this.props.MainCategories==="ALL")
                        return true;
                      }
                    ).sort((value,value2)=>{
                       return new Date(value2.time)-new Date(value.time); 
                     }).map((value,index)=>{
                     return <PostStructure data={value}   />
                   })
                   } 
                   </div>:""}             

                   {this.props.isFetchingGetPost?<div><h3>Post are loading</h3></div>:this.props.resultGetPost? <div>
                   {
                     this.props.GetPost.filter(
                      (value)=>{
                        if(value.categories === this.props.MainCategories || this.props.MainCategories==="ALL")
                        return true;
                      }
                    ).sort((value,value2)=>{
                       return new Date(value2.time)-new Date(value.time); 
                     }).map((value,index)=>{
                     return <PostStructure data={value}   />
                   })
                   } 
                   </div>:"Something get wrong"}
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

        )
    }

    componentDidMount(){
      if(Session.getSession().active==false)
      {
        this.props.history.push("/");
      }
      else
      {
        this.props.dispatch(getPost());
        this.props.dispatch(getCategories());
        socket.on("recPost",data=>{
          this.props.dispatch(resultdataPost(data))
        })
      }
    }

}

function connectStatefromProps(state){
    return{
        ...state
    }
}
export default connect(connectStatefromProps,null)(Timeline)