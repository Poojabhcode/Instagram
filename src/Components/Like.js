import React, {useState, useEffect} from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { database } from '../firebase';

function Like({userData,postData}) {
  const [like,setLike] = useState(null);

  useEffect(()=>{
     let check = postData.likes.includes(userData.userId)?true:false
     setLike(check)
  },[postData, userData.userId]);

  const handleLike=()=>{
    console.log("Like button clicked");
    console.log("like:", like);
    console.log("postData.likes:", postData.likes);
    console.log("userData.userId:", userData.userId);
    if(like===true){
       let narr = postData.likes.filter((el)=>el!==userData.userId)
       database.posts.doc(postData.postId).update({
        likes:narr
       })
    }else{
      let narr = [...postData.likes, userData.userId]
       database.posts.doc(postData.postId).update({
        likes:narr
      })
    }
  }



  return (
     <div>
    {like !== null ? (
      <>
        {like === true ? (
          <FavoriteIcon className={'icon-styling like'} onClick={handleLike} />
        ) : (
          <FavoriteIcon className={'icon-styling unlike'} onClick={handleLike} />
        )}
      </>
    ) : (
      <></>
    )}
  </div>
  )
}

export default Like
