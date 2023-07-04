import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container} >
      <div className={styles.copyright}>
         <p>&copy; 2023 Central Philippine Nazarene College Inc.</p> 
      </div>
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
          />
          <p>+62 032 505-5131</p>
      </div>

      <div className={styles.social}>
          <Link href="https://www.facebook.com/cpncMain" target='blank'>
              <Image 
                src="/facebook.png"
                width={30}
                height={30}
                alt='cpnc facebook'
              />
          </Link>
          <Link href="https://www.facebook.com/cpncMain" target='blank'>
            <p>CPNC</p> 
          </Link>
      </div>
    </div>
  )
}

export default Footer