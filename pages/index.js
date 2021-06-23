import Head from 'next/head'
import Image from 'next/image'
import Aboutus from '../sections/aboutus'
// import tachyons from 'tachyons'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import ContactPop from '../components/popover'
// import Body from '../components/Body'
// import Team from '../components/Team'
// import OurTeam from '../components/OurTeam'
// import NavigationBar from '../components/NavigationBar'
import styles from '../styles/MyCSS.module.css'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Gupta Hospital, Dhamtari</title>
        <link rel="icon" href="/logoGH.jpg" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&family=Raleway:wght@300&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <header>
          <nav className={styles.row}>
            <div className={styles.logo}>
              <Image  
                    src='/logoGH.jpg' 
                    alt="GH Logo" 
                    width='80'
                    height='80'
                    /> 
            </div>
            <ul className={styles.main_nav}>
              <li><a>Home</a></li>
              <li><a>About Us</a></li>
              <li><a>Departments</a></li>
              <li><a>Our Doctors</a></li>
              <li><a>Corporates and TPA</a></li>
              <li><a>Contact Us</a></li>
          </ul>
        </nav>
        </header>

        {/* **************** About Us Section ************ */}

        <section>
          <Aboutus/>
        </section>
      </body>
      
    </div>   
    
  )
}

///  OLD CODE .....................

    // <div className={styles.container}>
    //   <Head>
    //     <title>Gupta Hospital Dhamtari</title>
    //     <meta name="description" content="Generated by create next app" />
    //     <link rel="icon" href="/logoGH.jpg" />
    //   </Head>

    //   <main className={styles.main}>
    //       <div className={styles.header}>
    //         <div style={{display: 'inline-flex', alignItems: 'center'}}>
    //           <img className={styles.headerImg} src='/logoGH.jpg'></img>
    //           <h3>Gupta Hospital Dhamtari</h3>
    //         </div>   
    //         <div style={{display: 'inline-flex', alignItems: 'center'}}>
    //         <ContactPop/>
    //         </div>             
    //       </div>
    //       <NavigationBar/>
    //       <Body/>
    //       {/* <div className={styles.body}>
    //         <Body/>
    //       </div> */}
    //       <div className={styles.team}>
    //       <OurTeam/>
    //       </div>
          
    //   </main>

    //   {/* <footer className={styles.footer}>
    //     <p>site developed by @nup</p>
    //   </footer> */}
    // </div>
//   )
// }
