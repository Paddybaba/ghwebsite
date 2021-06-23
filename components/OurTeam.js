import Carousel from 'react-bootstrap/Carousel'
import styles from '../styles/Components.module.css'
import Doctor from './Doctor'
const OurTeam = () =>{
    return(
        <div className={styles.ourTeam}>
            <h3 className="tc mt-3">Our Doctors</h3>
            <div className={styles.docWrapper}>
            <Doctor drname="Dr Anup Padamwar"
                    qualifications="MBBS, MS Ortho"
                    imgsrc="/doctors/dranup.jpg"></Doctor>
            <Doctor drname="Dr Vivek Tigga"
                    qualifications="MBBS, MD Internal Medicine"
                    imgsrc="/doctors/drvivek.jpg"></Doctor>
            <Doctor drname="Dr Sumit Gupta"
                    qualifications="MS, FIAGS, General and Laproscopy Surgeon"
                    imgsrc="/doctors/drsumit.jpg"></Doctor>
            <Doctor drname="Dr Anup Padamwar"
                    qualifications="MBBS, MS Ortho"
                    imgsrc="/doctors/dranup.jpg"></Doctor>
            <Doctor drname="Dr Vivek Tigga"
                    qualifications="MBBS, MD Internal Medicine"
                    imgsrc="/doctors/drvivek.jpg"></Doctor>
            <Doctor drname="Dr Sumit Gupta"
                    qualifications="MS, FIAGS, General and Laproscopy Surgeon"
                    imgsrc="/doctors/drsumit.jpg"></Doctor>
        </div>
        </div>
        
    )
}
export default OurTeam