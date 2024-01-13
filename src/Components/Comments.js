import React, {useState,useEffect} from 'react'
import { database } from '../firebase';
import CircularProgress from '@mui/material/CircularProgress';
import Avatar from '@mui/material/Avatar';


function Comments({postData, userData}) {
  const [comments,setComments] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let arr = [];
      for (let i = 0; i < postData.comments.length; i++) {
        let data = await database.comments.doc(postData.comments[i]).get();
        arr.push(data.data());
      }
      setComments(arr);
    };
                                                                                 
    fetchData();
  }, [postData]);
  return (   
    <div >
      {
        comments===null?<CircularProgress/> :
        <>
          {comments.map((comment, index) => (
            <div style={{ display: 'flex', alignItems: 'center' }} key={index}>
              {comment && comment.uProfileImage && (
                <Avatar  src={comment.uProfileImage} />
              )}
              <p>
                &nbsp;&nbsp;
                <span style={{ fontWeight: 'bold' }}>
                  {comment && comment.uName}
                </span>
                &nbsp;&nbsp; {comment && comment.text}
              </p>
            </div>
          ))}
        </>
      }
      
    </div>
  )
}

export default Comments
