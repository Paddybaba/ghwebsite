import Carousel from 'react-bootstrap/Carousel'
import styles from '../styles/Components.module.css'
import React ,{useState} from 'react'

function Gallery_Carousel ({photos}) {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {
          photos.map((photo, index)=>{
            return (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={photo.source}
                  alt="First slide"
                />
              </Carousel.Item>
            )
          })
        }
      </Carousel>
    );
  }
  
  export default Gallery_Carousel;