import React from 'react';
import Gallery from "./Gallery/Gallery";
import VideoPlayer from './VideoPlayer/VideoPlayer';
import './Homepage.css';


let bodyText = 'Polished Automotive is a mobile detailing buisness dedicated to superb customer service and quality work.';

function Homepage(){
    return (
    <div className="Homepage">
        <div className="TitleText text-center"><h1>Polished Automotive</h1></div>
        <div className="BodyText text-center"><h5>{bodyText}</h5></div>
        <VideoPlayer />
        <Gallery /> 
    </div>
    );
}

export default Homepage;