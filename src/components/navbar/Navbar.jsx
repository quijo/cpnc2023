"use client"
import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '@/app/icon.png'
import Image from 'next/image'
import { useState } from 'react'




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


const Navbar = () => {



  const pathname = usePathname();
  const [menu, setMenu] = useState('false') 

 

  return (
      <div className={styles.container} onClick={()=>{setMenu(!menu)}}> 
        {/* LOGO */}
        <div className={styles.logo}>
           <Image src={Logo} width={80} height={80} alt="cpnc" />
           <Link href="/home" > CENTRAL PHILIPPINE <br/> NAZARENE COLLEGE</Link> 
           <button className={styles.menuBtn}  onClick={()=>{setMenu(!menu)}}>Menu</button>
        </div>

        {/* MENU */}
        <div className={!menu===true ? styles.activeLinks : styles.links}>
            {links.map((link) => {
              const isActive = pathname.startsWith(link.url)
              return (
                <Link
                  className={`${isActive ? 'active' :null} `} 
                  href={link.url}
                  key={link.id}
                  onClick={()=>{setMenu('false')}}
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