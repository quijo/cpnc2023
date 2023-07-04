
import styles from './page.module.css'
import Image from 'next/image'
import Mission from "@/components/mission/Mission"


export default function Home() {
  return (

    <main className={styles.mainContainer}>

    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Mentoring Transformational Leaders</h1>
        <p className={styles.desc}>Central Philippine Nazarene College is committed to mentor transformational leaders of the next generation. We exist to provide quality Christian education, to recognize God's call and to serve the community with excellence. Partner with us in shaping the lives of our learners and equip them for their future.</p>
        <button className={styles.enrollBtn}>Enroll Now</button>
      </div>
      
      <div className={styles.imageContainer}>
        <Image
        src="/hero.png"
      width={600}
       height={400}
        alt='cpnc'
        className={styles.img}
        />
      </div>
    </div>
    
    <Mission />
    </main>
  )
}
