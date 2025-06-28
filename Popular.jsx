import React from 'react';
import styles from "./Popular.module.css";
import pop1 from "../../assets/pop1.png"
import pop2 from "../../assets/pop2.png"
import pop3 from "../../assets/pop3.jpg"
import pop4 from "../../assets/pop4.jpg"
import std2 from "../../assets/std2.png"

const Popular = () => {
  return (
    <>
    <hr />
    <h1 className={styles.head}>Popular Courses</h1>

    <div className={styles.courses}>
        <div className={styles.popular}>
            <img src={pop1} alt="" />

            

            <ul>

            <li style={{
                color:"red"
            }}>UX Design</li>
            <li style={{
                color:"blue"
            }}>5 lessons</li>
            </ul>
            <h3>Dave conservatoire is the <br />
                 Entirely free online</h3>
<hr style={{
    color:"red"
}} />
              <ul>
                
            <li style={{
                color:"grey"
            }}> 56 Students</li>
            <li style={{
                color:"red",
                fontWeight:"bolder"
            }}>$ 72.00</li>    
            </ul>   
            <a href=""></a><a href=""></a>
        </div>
        <div className={styles.popular}>
            <img src={pop2} alt="" />

           

            <ul>

            <li style={{
                color:"red"
            }}>UX Design</li>
            <li style={{
                color:"blue"
            }}>5 lessons</li>
            </ul>
          
            <h3>Dave conservatoire is the <br />
                 Entirely free online</h3>
<hr />
              <ul>
                
            <li style={{
                color:"grey"
            }}> 56 Students</li>
            <li style={{
                color:"red",
                fontWeight:"bolder"
            }}>$ 52.00</li>    
            </ul>   
            <a href=""></a><a href=""></a>
        </div>

        <div className={styles.popular}>
            <img src={pop3} alt="" />

  

            <ul>

            <li style={{
                color:"red"
            }}>UX Design</li>
            <li style={{
                color:"blue"
            }}>6 lessons</li>
            </ul>
           
            <h3>Dave conservatoire is the <br />
                 Entirely free online</h3>
<hr />
              <ul>
                
            <li style={{
                color:"grey"
            }}> 56 Students</li>
            <li style={{
                color:"red",
                fontWeight:"bolder"
            }}>$ 68.00</li>    
            </ul>   
            <a href=""></a><a href=""></a>
        </div>

        <div className={styles.popular}>
            <img src={pop4} alt="" />

            

            <ul>

            <li style={{
                color:"red"
            }}>UX Design</li>
            <li style={{
                color:"blue"
            }}>5 lessons</li>
            </ul>
            
            <h3>Dave conservatoire is the <br />
                 Entirely free online</h3>
<hr />
              <ul>
                
            <li style={{
                color:"grey"
            }}> 56 Students</li>
            <li style={{
                color:"red",
                fontWeight:"bolder"
            }}>$ 72.00</li>    
            </ul>   
            <a href=""></a><a href=""></a>
        </div>
      
    </div>

       <br /><br />
        <div className={styles.campbtndiv}>
    
          <button className={styles.campbtn}>View all courses  &#8594;</button>
        </div>
        <br /><br />
        <hr />
    </>
  )
}

export default Popular
