"use client"
import React, { useRef, useState } from 'react'

export default function VideoBackground() {

  const [videoPlayer, setVideoPlayer] = useState(true)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const handlePlayPause = () => {
    if (videoRef?.current?.paused) {
      videoRef?.current.play();
      setVideoPlayer(true)
    } else {
      videoRef?.current?.pause();
      setVideoPlayer(false)
    }
  };

  return (
    <div>
      <div className='after:opacity-35 h-screen after:w-screen relatve after:h-full after:absolute after:block after:bg-black after:top-0 after:content-[""] z-0 '>
        <video ref={videoRef} src={'/videos/hero_video.mp4'} className='absolute grayscale w-screen h-screen object-cover' autoPlay loop muted preload="none"/>
      </div>
      <div onClick={handlePlayPause} className="hover:bg-gray-700 hover:cursor-pointer text-white text-xl fixed bottom-8 right-8 rounded-full flex justify-center items-center bg-black w-10 h-10">
        <span className={`${videoPlayer ? "icon-pause" : "icon-play"}`}/>
      </div>
    </div>  
  )
}
