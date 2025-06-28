import React from 'react'
import styles from "./Upcoming.module.css"

const Upcoming = () => {
  return (
    <>
    <h1 className={styles.head}>Upcoming Courses</h1>
    <div className={styles.upcom}>
        <div className={styles.upcoming}>
            <h1>10</h1>
            <p>January,2022</p>
            <p style={{
                color:"red"
            }}>10:30pm - 12:00am</p>
            <h3>A better alternative <br /> to grading student writing</h3>
            <p>Newyork,USA</p>
             <button className={styles.campbtn}>Find more  &#8594;</button>
        </div>

              <div className={styles.upcoming}>
            <h1>14</h1>
            <p>January,2022</p>
            <p style={{
                color:"red"
            }}>10:30pm - 12:00am</p>
            <h3>A better alternative <br /> to grading student writing</h3>
            <p>Newyork,USA</p>
             <button className={styles.campbtn}>Find more  &#8594;</button>
        </div>

              <div className={styles.upcoming}>
            <h1>21</h1>
            <p>January,2022</p>
            <p style={{
                color:"red"
            }}>10:30pm - 12:00am</p>
            <h3>A better alternative <br /> to grading student writing</h3>
            <p>Newyork,USA</p>
             <button className={styles.campbtn}>Find more  &#8594;</button>
        </div>

              <div className={styles.upcoming}>
            <h1>24</h1>
            <p>January,2022</p>
            <p style={{
                color:"red"
            }}>10:30pm - 12:00am</p>
            <h3>A better alternative <br /> to grading student writing</h3>
            <p>Newyork,USA</p>
                      <button className={styles.campbtn}>Find more  &#8594;</button>

        </div>
      
    </div>
    </>
  )
}

export default Upcoming
