import styles from '../styles/Components.module.css'
import React from 'react'
const Team = () =>{
    return (
        <team >
            <div className="wrapper">
            <div className="img_area">
                <div className="single_img  image1">
                    <img src="/doctors/drsumit.jpg" alt=""></img>
                </div>
                <div className="single_img  image2">
                    <img src="/doctors/draradhna.jpg" alt=""></img>
                </div>
                <div className="single_img  image3">
                    <img src="/doctors/drvivek.jpg" alt=""></img>
                </div>
                <div className="single_img  image4">
                    <img src="/doctors/dranup.jpg" alt=""></img>
                </div>
                <div className="single_img  image5">
                    <img src="/doctors/drprabhat.jpg" alt=""></img>
                </div>
            </div>
            </div>
        </team>
        
    )
};

export default Team