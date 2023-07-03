"use client"
import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'



const links = [
  {
    id:1,
    title:"Home",
    url:"/home"
  },
  {
    id:2,
    title:"About",
    url:"/about"
  },
  {
    id:3,
    title:"Admission",
    url:"/admission"
  },

]

//{links.map(link=>(<Link>{link.title}</Link)))}
const Navbar = () => {



  const pathname = usePathname();
  
  return (
    // <div className={styles.container}>

    //   <div className={styles.logo}>
    //       CPNC
    //   </div>
      
    //   <div className={styles.links}>
       
    //       {links.map(link=>( 
            
    //       <Link 
         
    //       href={link.url}key={link.key} >{ link.title}</Link>
          
    //       ))}
    //   </div>
    // </div>

 
      <div className={styles.container}>
        <div className={styles.logo}>
           <Link href="/home" >CPNC</Link> 
        </div>
        <div className={styles.links}>
        {links.map((link) => {
          const isActive = pathname.startsWith(link.url)
   
          return (
            <Link
              className={isActive ? 'active' : 'links'}
              href={link.url}
              key={link.id}
            >
              {link.title}
            </Link>
          )
        })}
        </div>
        
      </div>
    
  )
}

export default Navbar