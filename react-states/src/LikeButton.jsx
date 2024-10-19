import { useState } from 'react';
export default function LikeButton() {
    let [isLiked,setisliked]=useState(false);
    let[clicks,setclicks]=useState(0);
    let toggleLike=()=>{
    
        setisliked(!isLiked);
        setclicks(clicks+1);
    }
    let likeStyle={
        color:"red"
    }

    return (
        <div>
            <p>clicks={clicks}</p>
<p onClick={toggleLike}> 
  {isLiked?<i className="fa-solid fa-heart" style={likeStyle}></i>:<i className="fa-sharp fa-regular fa-heart"></i>}
 
 
   
    </p>
        </div>
    );
}
