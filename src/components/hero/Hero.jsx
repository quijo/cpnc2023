import React from 'react'
import styles from './hero.module.css'
import Image from "next/image"

function hero() {
  return (
    <section className={styles.section}>
      
      
    <div className={styles.imageContainer}>
      <Image
        src="/60_logo.png"
        width={300}
        height={300}
        alt='cpnc'
        className={styles.img}
      />
    </div>
    <div className={styles.textContainer}>

       <h1>Reflecting Brilliance Transforming Generation</h1>
       <h2>February 7 - 9, 2024</h2>
       <p>Founded in 1964 in Iloilo City.</p>
       <p>Transferred to Cebu in Cebu City in 1986</p>
       <p>Change of name from VNBC to CPNC in 2021</p>

   





       {/* enrollment temprarily disabed */}
      {/*<p className={styles.desc}>Central Philippine Nazarene College is committed to mentor transformational leaders of the next generation. We exist to provide quality Christian education, to recognize God&apos;s call and to serve the community with excellence. Partner with us in shaping the lives of our learners and equip them for their future.</p>
      <h1 className={styles.title}>Welcome Back to School</h1> */}
      {/* <div className={styles.enrollmentBtn}>
        
        <Link href="https://vnbc-essentiel.ckgroup.ph/preregv2" target="blank"><button className={styles.btnNew}>New Student</button></Link>
        <Link href="https://vnbc-essentiel.ckgroup.ph/" target="blank"><button className={styles.btnOld}>Old Student</button></Link>

        <Link href="https://forms.gle/91uafKbfwUcSk1bYA"  target="blank"><button className={styles.btnCollege}>College</button></Link>
      </div> */}

      {/* <div className={styles.details}>
        <p className={styles.start}>classes start - aug. 7, 2023</p>
        <p className={styles.end}>enrollment ends - aug 4, 2023</p>
      </div> */}
    
                  
    </div>
  </section>
  )
}

export default hero
