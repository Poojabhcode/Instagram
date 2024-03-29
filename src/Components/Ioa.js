import React, {useEffect} from 'react'
import vid1 from '../videos/vid1.mp4';
import vid2 from '../videos/vid2.mp4';
import vid3 from '../videos/vid3.mp4'

function Ioa() {
  const callback=(entries)=>{
    entries.forEach((entry)=>{
      let ele = entry.target.childNodes[0]
      console.log(ele)
      ele.play().then(()=>{
        if(!ele.paused && !entry.isIntersecting){
          ele.pause()
        }
      })
    })
  }

  let observer = new IntersectionObserver(callback, {threshold:0.6});
  useEffect(()=>{
    const elements= document.querySelectorAll(".videos")
    elements.forEach((element)=>{
      observer.observe(element)
    })
  },[])
  return (
    <div className="video-containers">
      <div className="videos">
        <video src={vid1} style={{height:'85vh'}}></video>
      </div>
      <div className="videos">
        <video src={vid1} style={{height:'85vh'}}></video>
      </div>
      <div className="videos">
        <video src={vid1} style={{height:'85vh'}}></video>
      </div>
      
    </div>
  )
}

export default Ioa
