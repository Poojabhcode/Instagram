import React, {useState} from 'react'
import { database,storage } from '../firebase';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import MovieIcon from '@material-ui/icons/Movie';
import LinearProgress from '@mui/material/LinearProgress';
import {Link, useNavigate} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';

function UploadFile(props) {
    const [error,setError] = useState("");
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = async(file) => {
           if(file==null){
                setError("Please select a file first");
                setTimeout(()=>{
                  setError("")
                },2000)
                return;
           }
           if(file.size/(1024*1024)>100){
              setError("Please select a file first");
              setTimeout(()=>{
                 setError("")
              },2000)
              return;
           }
           
           let uid= uuidv4();
           setLoading(true);
           const uploadTask = storage.ref(`/posts/${uid}/${file.name}`).put(file);
           uploadTask.on('state_changed',fn1,fn2,fn3);
           function fn1(snapshot){
             let progress = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
             console.log(`Upload is ${progress}  done.`)
           }

          function fn2(error) {
            console.error("Upload error:", error);
            setError(error.message);
            setTimeout(() => {
              setError("");
            }, 2000); 
            setLoading(false);
          }
           
           function fn3(){
             uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
               console.log(url);
               
               let obj = {
                likes:[],
                comments:[],
                pId:uid,
                pUrl:url,
                uName:props.user.fullname,
                uProfile: props.user.profileUrl,
                userId: props.user.userId,
                createdAt: database.getTimeStamp(),
              }
            
              database.posts.add(obj).then(async(ref)=>{
                console.log("Post added successfully:", ref);
                let updatedPostIds = Array.isArray(props.user.postIds)
                ? [...props.user.postIds, ref.id]
                : [ref.id];

              let res = await database.users
                .doc(props.user.userId)
                .update({
                  postIds: updatedPostIds,
                });
                console.log("User postIds updated successfully");
                
              }).then((ref)=>{
                  setLoading(false)
                  const input = document.getElementById('upload input');
                   if (input) {
                  input.value = '';
                 }
              }).catch((err)=>{
                console.error("Firestore error:", err); 
                setError(err)
                setTimeout(()=>{
                  setError("")
                },5000)
                setLoading(false);
              })
            });    
    }
}
  return (
    <div>
      {
        error!==""? <Alert severity="error"><div>{error}</div></Alert>:
        <>
           <input type='file' accept='video/' onChange={(e)=>handleChange(e.target.files[0])} id='upload input' style={{display:'none'}}/>
            <label htmlFor="upload input">
            <Button 
            variant="outlined" 
            color="secondary"
            component="span" 
            disabled={loading}
            >
                <MovieIcon/>Upload Video</Button>
            </label>
            {loading && <LinearProgress color="secondary" style={{marginTop:'3%'}} />}
        </>
      }
    </div>
  )
}

export default UploadFile
