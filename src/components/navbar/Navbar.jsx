"use client"
import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '@/app/icon.png'
import Image from 'next/image'
import { useState } from 'react'



const open = <Image src="/menu.png" width={20} height={20} alt='cpnc' />
const close = <Image src="/close.png" width={20} height={20} alt='cpnc' />





const links = [
  // {
  //   id:1,
  //   title:"Home",
  //   url:"/home"
  // },
  // {
  //   id:2,
  //   title:"About",
  //   url:"/about"
  // },
  // {
  //   id:3,
  //   title:"Admission",
  //   url:"/admission"
  // },

]


const Navbar = () => {



  const pathname = usePathname();
  const [menu, setMenu] = useState(true) 
 




  return (
    <div className={styles.container} > 
        {/* LOGO */}
      <div className={styles.logo}>
          <Link href="/" ><Image src={Logo} width={80} height={80} alt="cpnc" /></Link> 
          <Link href="/" > CENTRAL PHILIPPINE <br/> NAZARENE COLLEGE</Link> 
      </div>

        {/* MENU */}
     <div className={styles.navbarMenu}>
        <Link href="#home" >Home</Link>
        <Link href="#mission" >Mission</Link>
        <Link href="#courses">Courses</Link>
        <Link href="#college">College</Link>
        <Link href="https://vnbc-essentiel.ckgroup.ph/"target='blank'>
          <button className={styles.loginBtn}>Login</button>
        </Link>
       

        {/* <Link href="https://enrollment.vnbc.edu.ph/wp" target='blank'>
          <button className={styles.enrollBtn}>Enroll Now</button>
        </Link>     */}
     </div>


 

              
    </div>
    
  )
}
/*
 <button className={styles.menuBtn}  onClick={()=>{setMenu(!menu)}}>{!menu ? open: close}</button>
!menu===true ? styles.activeLinks : 


 //   <Link
              //     className={`${isActive ? 'active' :null} `} 
              //     href={link.url}
              //     key={link.id}
              //  >
               
              //     {link.title}
              //   </Link>


                {links.map((link) => {
              const isActive = pathname.startsWith(link.url)
              return (
    )
            })}
 */
export default Navbar