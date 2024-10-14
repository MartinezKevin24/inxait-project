import React from 'react'

export default function HeroSection() {
  return (
    <div className='h-screen w-screen overflow-hidden relative block bg-blue-700'>
      <div className='grayscale after:opacity-35 after:w-screen after:h-screen after:absolute after:block after:bg-black after:top-0 after:content-[""]'>
        <video src={'/hero_video.mp4'} className='w-full' autoPlay loop muted preload="none"/>
      </div>
    </div>
  )
}
