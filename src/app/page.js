
import styles from "./page.module.css"
import Mission from "@/app/mission/Mission"
import Courses from "@/components/courses/Courses"
import College from "@/app/college/College"
import Hero from "@/app/hero/Hero"




export default function Home() {
  return (

    <main className={styles.mainContainer}>
      <Hero/>
      <Mission/>
      <Courses/>
      <College/>
    </main>
  )
}
