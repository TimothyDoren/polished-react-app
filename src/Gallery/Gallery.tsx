import React from 'react'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";
import './Gallery.css'

import carImage1 from '../assets/images/cars/blackCar1.jpg';
import carImage2 from '../assets/images/cars/blackCar2.jpg';
import carImage3 from '../assets/images/cars/blackCar3.jpg';
import carImage4 from '../assets/images/cars/blackCar4.jpg';
import carImage5 from '../assets/images/cars/blackCarWheel1.jpg';
import carImage6 from '../assets/images/cars/Carinterior.jpg';
import carImage7 from '../assets/images/cars/cars1.jpg';
import carImage8 from '../assets/images/cars/cars2.jpg';
import carImage9 from '../assets/images/cars/joshCleaning.jpg';
import carImage10 from '../assets/images/cars/Mobile Detailing Cincinnati.jpg';
import carImage11 from '../assets/images/cars/redCar1.jpg';
import carImage12 from '../assets/images/cars/redCar2.jpg';
import carImage13 from '../assets/images/cars/whiteCar1.jpg';
import carImage14 from '../assets/images/cars/twoBlackCars.jpg';

const images = [
    { original: carImage1 },
    { original: carImage2 },
    { original: carImage3 },
    { original: carImage4 },
    { original: carImage5 },
    { original: carImage6 },
    { original: carImage7 },
    { original: carImage8 },
    { original: carImage9 },
    { original: carImage10 },
    { original: carImage11 },
    { original: carImage12 },
    { original: carImage13 },
    { original: carImage14 },
];

function Gallery(){
    return (
        <ImageGallery items={images} />
    );
}

export default Gallery; 