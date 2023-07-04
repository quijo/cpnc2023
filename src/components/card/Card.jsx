import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'


const Card = (props) => {
  return (
    <div className={styles.container}>
       <div className={styles.imgContainer} style={{backgroundColor:props.bg}}>
            <Image 
               src={props.src}
               width={150}
               height={150}
               alt={props.alt}
            />
       </div>
       <h3 className={styles.cardTitle}>{props.title}</h3>
       <p className={styles.cardDesc}>{props.desc}</p>
       <div className={styles.btnContainer}>
         <button className={styles.enrollBtn}>Enroll Now</button>
         <Link href="#">Read More</Link>
       </div>
      
    </div>
  )
}

export default Card