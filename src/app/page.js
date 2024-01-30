
import styles from "./page.module.css"
import Mission from "@/components/mission/Mission"
import Courses from "@/components/courses/Courses"
import College from "@/components/college/College"
import Hero from "@/components/hero/Hero"

export default function Home() {
  return (

    <main className={styles.mainContainer}>
      <Hero />
      <Mission />
      <Courses />
      <College />
    </main>
  )
}
