import React from 'react'
import styles from './college.module.css'
import Image from 'next/image'

const College = () => {
  return (
    <main id="college">
        <div className={styles.container}>
            <h1 className={styles.status}>College Department</h1>
            <div className={styles.content}>
                <div className={styles.img}>
                    <Image 
                        src="/college.svg"
                        width={300}
                        height={300}
                        alt='cpnt college'
                        className={styles.pic}
                    />
                </div>
                <div className={styles.text}>
                    <h1 >Enrollment is Now Going On</h1>
                    {/* <h4 className={styles.mode}>online & onsite</h4> */}
                    <ul className={styles.courseList}>
                        <li>Bachelor of arts in theology</li>
                        <li>Bachelor of arts in religious education</li>
                    </ul>
                    <h4 className={styles.start}>classes start - aug. 7, 2023</h4>
                    <h4 className={styles.end}>enrollment ends - aug 4, 2023</h4>
                    <p className={styles.desc}>Isaiah 6:8  “Then I heard the voice of the Lord saying, &apos;Whom shall I send, and who will go for us? &apos;And I said, &apos;Here am I; send me!
This is your time to answer God&apos;s call for you!  Say YES and ENROLL at Central Philippine Nazarene College </p>
                    
                    <p className={styles.contact}>Please contact: (032) 505-5131 / registrar@vnbc.edu.ph</p>
                </div>
            </div>
        </div>
    </main>
  )
}

export default College