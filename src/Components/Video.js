import React from 'react'
import ReactDOM from 'react-dom';
import './Video.css'

function Video(props) {
    const handleClick = (e) =>{
        e.preventDefault();
        e.target.muted = !e.target.muted
    }
    const handleScroll = (e) => {
        let next = ReactDOM.findDOMNode(e.target).parentNode.nextSibling
        if(next){
            next.scrollIntoView()
            e.target.muted = true
        }
    }
  return (
    <video className = 'videos-styling'  src = {props.src} onEnded={handleScroll} id={props.id} onClick={handleClick} muted='muted'>
      
    </video>
  )
}

export default Video
