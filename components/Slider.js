import Carousel from 'react-bootstrap/Carousel'
import styles from '../styles/Components.module.css'
const Slider = () =>{
    return (
<Carousel fade>
  <Carousel.Item interval={2000}>
    <img
      className={styles.sliderImage}
      src="/slides/slide1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className={styles.sliderImage}
      src="/slides/slide2.jpg"
      alt="Second slide"
    />
    <Carousel.Caption interval={2000}>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className={styles.sliderImage}
      src="/slides/slide3.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default Slider