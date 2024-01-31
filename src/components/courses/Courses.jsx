import React from 'react'
import styles from './courses.module.css'
import Card from '@/components/card/Card'

const Courses = () => {
  return (
    <main className={styles.container } >
        <h1 id='courses'>Courses</h1>
        <div className={styles.cardContainer}>
            <Card 
                title="Preschool"
                desc="Prechool has a dual commitment to provide basic and Christian Education for Pre –Schoolers in the nearby community. It adopts the philosophy of making Christian Education as center of its curriculum. It is committed to provide a wholesome learning for the development of children recognizing them as whole persons with physical, mental, social, emotional, and spiritual needs." 
                bg="#0e3854"
                src="/preschool.svg"
                alt="cpnc preschool"
            />
            <Card 
                title="Elementary" 
                desc="Elementary Department exists to provide the best possible learning for pupils in knowledge, in character and skills development." 
                bg="#067eed"
                src="/elementary.svg"
                alt="cpnc elementary"
            />
            <Card 
                title="Junior High School" 
                desc="High School Department exists to provide the best possible venue for secondary students where they can best prepare for their college education. A place where students are at par with the world’s best in knowledge, music, IT, and fluency in communication." 
                bg="#ff7c1f"
                src="/highschool.svg"
                alt="cpnc junior high school"
            />
            <Card 
                title="Senior High School" 
                desc="DepEd has developed a curriculum specifically for Senior High. It is composed of two basic components: a Core Curriculum composed of eight Learning Areas and four different career tracks that student can Choose from based on their interest and aptitude . The choice of career track will define the contents of the other subject a student will be taken in Grade 11 and 12." 
                bg="#c1e6ff"
                src="/senior.svg"
                alt="cpnc senior high school"
            /> 
        </div>
       
    </main>
  )
}

export default Courses



/*

   <h1>Courses Offered</h1>
        <div className={styles.courseCard}>
            <div className={styles.card}>
                <div className={styles.imgContainer}>
                   
                <div className={styles.cardImg}>
</div>
                    { <Image
                    src="/preschool.jpg"
                    width={100}
                    height={100}
                    /> }
                    </div>
                    <h3>Preschool</h3>  
                </div>
                <div className={styles.card}>
                    <div className={styles.cardImg}>
    
                    </div>
                   
                </div>
                <div className={styles.card}>
                <div className={styles.cardImg}>
    
    </div>
                    <h3>Junior High Schoool</h3>
                </div>
                <div className={styles.card}>
                <div className={styles.cardImg}>
    
    </div>
                    
                    <h3>Senior High Schoool</h3>
                </div>
                { <div className={styles.card}>
                    <h3>College</h3>
                </div> }
            </div>

*/