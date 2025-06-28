import React from 'react'
import styles from "./Academics.module.css"
import sec3 from "../../assets/sec3.png"

const Academics = () => {
  return (
    <>
    <h1 className={styles.head}>Academics</h1>
 
 <div className={styles.maincard}>

    <div className={styles.card1}>
 <h1>Lets talk science</h1>
 <h2>learn more &#8594;</h2>
    </div>

     <div className={styles.card2}>
 <h1>Innovative Course</h1>
 <h2>learn more &#8594;</h2>
    </div>


     <div className={styles.card3}>
 <h1>Clouding Storage</h1>
 <h2>learn more &#8594;</h2>
    </div>


     <div className={styles.card4}>
 <h1>Online Education</h1>
 <h2>learn more &#8594;</h2>
    </div>
 </div>

{/* section 3 */}
 <div className={styles.sec3}>
    <div>
        <img src={sec3} alt="" />
    </div>

    <div className={styles.sec3blog}>
 <h1>Welcome to <br />
Echooling LMS <br />Platform</h1>
<h2>Education is both the act of teaching knowledge to others and
the act of receiving knowledge from someone else.</h2>
<h3>Have questions?<span > <a style={{
    color: "red"
}} href="#">GET FREE GUIDE</a></span></h3>
<br />
<hr />
<br />
<h2>Education also refers to the knowledge received <br />  through schooling instruction
and to the <br />  institution of teaching as a whole. <br /> The main purpose of education
is the integral <br />  development of a person.</h2>

<br />
 <button>READ MORE &#8594; </button>
    </div>
 </div>
    </>
  )
}

export default Academics
