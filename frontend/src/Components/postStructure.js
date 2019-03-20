import React from "react";
import {Link} from "react-router-dom";
export default function postStructure(data){
  const time = new Date(data.data.time);
  let time1="";
  if(time.getHours()>12)
  {
    time1=time.getHours()%12+":"+time.getMinutes()+" pm";
  }
  else{
    time1=time.getHours()+":"+time.getMinutes()+" am";
  }
    return(
            <div className="contnt_2">
            <div className="div_a">
              <div className="div_title"><Link to={"/singlepost"+data.data._id} style={{textDecoration:"none",color:"inherit"}}>{data.data.title}</Link></div>
              <div className="btm_rgt">
                <div className="btm_arc">{data.data.categories}</div>
              </div>
              <div className="div_top">
                <div className="div_top_lft"><img src="images/img_6.png" />{data.data.email}</div>
                <div className="div_top_rgt"><span className="span_date">{new Date(data.data.time).getDate()} {new Date(data.data.time).getMonth()} {new Date(data.data.time).getFullYear()}</span><span className="span_time">{time1}</span></div>
              </div>
              <div className="div_image"><img src={"http://192.168.100.152:8080"+data.data.path} alt="pet" /></div>
              <div className="div_btm">
                <div className="btm_list">
                  <ul>
                    <li><a href="#"><span className="btn_icon"><img src="images/icon_001.png" alt="share" /></span>Share</a></li>
                    <li><a href="#"><span className="btn_icon"><img src="images/icon_002.png" alt="share" /></span>Flag</a></li>
                    <li><a href="#"><span className="btn_icon"><img src="images/icon_003.png" alt="share" /></span>0 Likes</a></li>
                    <li><a href="#"><span className="btn_icon"><img src="images/icon_004.png" alt="share" /></span>4 Comments</a></li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
    )
};   
