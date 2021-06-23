import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from './Gallery_Carousel' 
import styles from '../styles/Components.module.css'
import Gallery_Carousel from './Gallery_Carousel'
const PhotoGallery = () =>{
    const photos = [
        {
          title : "Anup",
          source: "doctors/dranup.jpg"
        },
        {
          title : "Sumit",
          source: "doctors/drsumit.jpg"
        },
        {
          title : "Vivek",
          source: "doctors/drvivek.jpg"
        },
      ]
    return (
        <div className={styles.photoGallery}>
            <p>Photo Gallery</p>
            <Gallery_Carousel style={{position:'absolute', top:0}} photos={photos} ></Gallery_Carousel>           
        </div>
    )
}

export default PhotoGallery;
