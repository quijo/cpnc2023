import React from 'react'
import styles from '@/app/hero/hero.module.css'
import Image from "next/image"

function hero() {
  return (
    <section className={styles.section} >
      
      
    <div className={styles.imageContainer}id="#hero" >
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

             
    </div>
  </section>
  )
}

export default hero
