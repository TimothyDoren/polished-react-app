import React from 'react';
import Gallery from "./Gallery/Gallery";
import VideoPlayer from './VideoPlayer/VideoPlayer';


function Homepage(){
    return (
    <div>
        <h1>Polished Automotive</h1>
        <VideoPlayer />
        <Gallery /> 
    </div>
    );
}

export default Homepage;