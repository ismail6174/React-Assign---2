import React from 'react'
import styles from "./Campus.module.css"
import campuspic from "../../assets/campus.png"
import pencil from "../../assets/pencil.png"
import graph from "../../assets/graph.png"
import setting from "../../assets/setting.png"



const Campus = () => {
  return (
    <>
    <hr />
    <h1 className={styles.head}>Campus Life</h1>
    <div className={styles.campusmain}>
 
 <div className={styles.blog}>

      <div className={styles.campus1}>
        <h1><img width={50} src={pencil} alt="" /> <span>Do More, Stress Less</span></h1>

        <div>

        <p>
Do More, Stress Less
Why I say old chap that is <br /> spiffing he legged
it in my flat easy peasy.  </p> 

{/* <button>&#8594;</button> */}

        </div>
        <br />
        <hr />
      </div>
      <br />
       <div className={styles.campus1}>
        <h1><img width={50} src={graph} alt="" /> <span>The Business Intelligence</span></h1>

        <div>

        <p>
Do More, Stress Less
Why I say old chap that is <br /> spiffing he legged
it in my flat easy peasy.  </p> 

{/* <button>&#8594;</button> */}

        </div>
        <br />
        <hr />
      </div>
      <br />
       <div className={styles.campus1}>
        <h1><img width={50} src={setting} alt="" /> <span>System Administration</span></h1>

        <div>

        <p>
Do More, Stress Less
Why I say old chap that is <br /> spiffing he legged
it in my flat easy peasy.  </p> 

{/* <button>&#8594;</button> */}

        </div>
        
 </div>
   
      </div>

      <div>
        <img src={campuspic} alt="" />
      </div>

  
    </div>
    <br />
    <br /><br />
    <div className={styles.campbtndiv}>

      <button className={styles.campbtn}>More About Campus Life &#8594;</button>
    </div>
    </>
  )
}

export default Campus
