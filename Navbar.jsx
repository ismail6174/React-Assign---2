import React from 'react'
import styles from "./Navbar.module.css"
import call from "../../assets/call.png"
import mail from "../../assets/mail.png"
import fb from "../../assets/fb.svg"
import twitter from "../../assets/twitter.svg"
import linkedin from "../../assets/linkedin.svg"
import logo from "../../assets/logo.png"





const Navbar = () => {
  return (
    <>
    <div className={styles.mainhead}>

    <div className={styles.header}>

      <div className={styles.contact}>
       
        <h3> <img width={20} src={call} alt="" /> (+1) 3344 999 999 <span className={styles.first}><img width={20} src={mail} alt="" />
info@reactheme.com </span> </h3>
      </div>
      
      <div className={styles.social}>
<img src={fb} alt="" />
<img src={twitter} alt="" />
<img src={linkedin} alt="" />
      </div>
    </div>

    <div className={styles.navbar}>
    <div>
         <img src={logo} alt="" />
    </div>

<div className={styles.list}>
    <ul className={styles.ulist}>

    <li>Home</li>
    <li>Pages</li>
    <li>Courses</li>
    <li>Blog</li>
    <li>Contact</li>
    </ul>
</div>
    </div>
    </div>

<div className={styles.hero}>
    <h2>Great Quality Social Life</h2>
    <h1>Discover the World Social Life <br /> with the possible University</h1>
    <button>Admission</button>
</div>

    </>
  )

}
export default Navbar;
