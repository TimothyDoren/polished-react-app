import React from 'react'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";
import './Gallery.css'

import carImage1 from '../assets/images/cars/blueCar1-med.jpg';
import carImage2 from '../assets/images/cars/blueCar2-med.jpg';
import carImage3 from '../assets/images/cars/blackCar1-med.jpg';
import carImage4 from '../assets/images/cars/redCar-med.jpg';
import carImage5 from '../assets/images/cars/yellowCar-med.jpg';

const images = [
    { original: carImage1 },
    { original: carImage2 },
    { original: carImage3 },
    { original: carImage4 },
    { original: carImage5 },
];

function Gallery(){
    return (
        <ImageGallery items={images} />
    );
}

export default Gallery; 