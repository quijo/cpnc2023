import React from 'react'
import styles from '@/app/mission/mission.module.css'
import Image from 'next/image'

const Mission = () => {
  return (
    <main className={styles.container}id='mission'>
        <div className={styles.textContainer} >
            <h1 className={styles.title}>
                OUR MISSION
            </h1>

            <div className={styles.imgContainer}>
                <Image
                    src="/mission.svg"
                    width={50}
                    height={50}
                    alt="cpnc qoute"
                    className={styles.img}
                />
                <p className={styles.desc}>
                    Mentoring every generation of transformational leaders through quality holistic education and exemplary Christ-centered life that influence the church and the global community.
                </p>
            </div>
        </div>
    </main>
  )
}

export default Mission