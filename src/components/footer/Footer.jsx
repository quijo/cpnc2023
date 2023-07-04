import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <main>
      <div className={styles.container} >
      
      <div className={styles.location}>
        <Image 
          src="/loc.png"
          width={30}
          height={30}
          />
          <p>Saint Mary's Drive Apas, Cebu City</p>
      </div>

   <div className={styles.contact}>
          <Image 
          src="/call.png"
          width={30}
          height={30}
          alt='cpnc contact'
          />
          <p>+63 032 505-5131</p>
      </div>
      

     

      <div className={styles.social}>
          <Link href="https://www.facebook.com/cpncMain" target='blank'>
              <Image 
                src="/facebook.png"
                width={30}
                height={30}
                alt='cpnc social'
              />
          </Link>
          <Link href="https://www.facebook.com/cpncMain" target='blank'>
            <p>CPNC/facebook</p> 
          </Link>
      </div>
      <div className={styles.email}>
      <Image 
                src="/mail.png"
                width={30}
                height={30}
                alt='cpnc email'
              />
        <p>registrar@vnbc.edu.ph</p>
      </div>
    </div>
    <div className={styles.copyright}>
         <p>Central Philippine Nazarene College Inc. &copy; 2023  | All Rights Reserved</p> 
      </div>
    </main>
    
  )
}

export default Footer