import React from 'react'
import ImageGallery from 'react-image-gallery'

import carImage1 from './assets/images/cars/pexels-mike-bird-244206.jpg';
import carImage2 from './assets/images/cars/pexels-mike-bird-810357.jpg';
import carImage3 from './assets/images/cars/pexels-mike-bird-977003.jpg';
import carImage4 from './assets/images/cars/pexels-mike-bird-1335077.jpg';
import carImage5 from './assets/images/cars/pexels-mike-bird-2365572.jpg';
import carImage6 from './assets/images/cars/pexels-nordic-overdrive-627678.jpg';
import carImage7 from './assets/images/cars/pexels-pixabay-39501.jpg';
import carImage8 from './assets/images/cars/pexels-pixabay-39501.jpg';

const imageNames = [
    'pexels-mike-bird-244206.jpg',
    'pexels-mike-bird-810357.jpg',
    'pexels-mike-bird-977003.jpg',
    'pexels-mike-bird-1335077.jpg',
    'pexels-mike-bird-2365572.jpg',
    'pexels-nordic-overdrive-627678.jpg',
    'pexels-pixabay-39501.jpg',
    'pexels-pixabay-326259.jpg',
];


const images = [
    { original: carImage1 },
    { original: carImage2 },
    { original: carImage3 },
    { original: carImage4 },
    { original: carImage5 },
    { original: carImage6 },
    { original: carImage7 },
    { original: carImage8 },
];

function Gallery(){
    return (
        <ImageGallery items={images} />
    );
}

export default Gallery; 