
import styles from "./page.module.css"
import Image from "next/image"
import Mission from "@/components/mission/Mission"
import Courses from "@/components/courses/Courses"
import College from "@/components/college/College"
import Link from "next/link"


export default function Home() {
  return (

    <main className={styles.mainContainer}>

    <div className={styles.container}>
      
      
      <div className={styles.imageContainer}>
        <Image
          src="/buwan.jpg"
          width={600}
          height={400}
          alt='cpnc'
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
         <h1 className={styles.title}>Central Philippine Nazarene College Celebrates Buwan ng Wika</h1>
         <h2 className={styles.subTitle}>September 1, 2023</h2>
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
    </div>
    
    <Mission />
    <Courses />
    <College />
    </main>
  )
}
