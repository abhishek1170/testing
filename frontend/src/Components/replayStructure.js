import React from "react";
export default function Reply(data){

    return (
        <div>
        <div className="list_image">
               <div className="image_sec"><img src="images/post_img.png" /></div>
               <div className="image_name">{data.data.email}</div>
        </div>
        <div className="list_info">
            {data.data.Reply}
        </div>
        </div>
    );

}