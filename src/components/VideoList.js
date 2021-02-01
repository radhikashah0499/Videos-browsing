
import React from 'react';
import VideoItem from './VideoItem';
//here instead of contnously using the word props pass the videos and then you 
//use it directly
const VideoList = ({videos,onVideoSelect})=>{
    //props.videos
    const renderedList = videos.map((video)=>{
            return <VideoItem 
                key={video.id.videoId} 
                onVideoSelect ={onVideoSelect}
                video={video}/>;
    });
    return <div className="ui relaxed divided list"> {renderedList}</div>;
}
export default VideoList;