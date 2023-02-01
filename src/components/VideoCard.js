import React from 'react'



const playButton = <svg className='text-white bg-gray-300 border-none rounded-3xl' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/></svg>
const VideoCard = ({image,name}) => {
    return (
        <div className="videoCard w-[30vw] h-[50vh] flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center mx-1 text-white" style={{backgroundImage:`url(${image})`}}>
        
        <a href="/">{playButton}</a>          
        <p>{name}</p>  
       </div>

    )
}

export default VideoCard
