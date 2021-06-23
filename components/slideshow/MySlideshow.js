import Slide from '../slideshow/Slide'
import styles from '../../styles/Slideshow.module.css'
import React from 'react';
const MySlideshow = () => {
    var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
    return (
        <div className={styles.slideshow_container}>
            <Slide ref={slideRef}/>
            <Slide ref={slideRef}/>
            <Slide ref={slideRef}/>

            {/* <!-- Next and previous buttons --> */}
            <a className={styles.prev} onclick="plusSlides(-1)">&#10094;</a>
            <a className={styles.next} onclick="plusSlides(1)">&#10095;</a>
            {/* Three dots */}
            <div className={styles.threedots}>
                <span className={styles.dot} onclick="currentSlide(1)"></span>
                <span className={styles.dot} onclick="currentSlide(2)"></span>
                <span className={styles.dot} onclick="currentSlide(3)"></span>
            </div>
        </div>
    )
}
export default MySlideshow;