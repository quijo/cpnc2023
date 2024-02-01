'use client'

import React from 'react'
import styles from "./navbar2.module.css";
import { FiAlignJustify } from "react-icons/fi";
import Link from 'next/link';
import  { useState } from 'react';




const Navbar = () => {


  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className={styles.section}>

      <div className={styles.navbar}>
        <a  className={styles.logo}>cpnc</a>
        <div className={styles.menu}>
          <Link href="#hero"  className={styles.li}>Home</Link>
          <Link href="#mission" className={styles.li} >Mission</Link>
          <Link href="#courses" className={styles.li}>Courses</Link>
          <Link href="#college" className={styles.li}>College</Link>
          <Link href="https://vnbc-essentiel.ckgroup.ph" className={styles.button}>Login</Link>
        </div>
        
        <div className={styles.menuBtn} onClick={toggleMenu}><FiAlignJustify /></div>


    

      </div>

        {menuOpen && (
          <div className={styles.dropdown}>
            <Link href="#hero"  className={styles.li} onClick={toggleMenu}>Home</Link>
            <Link href="#mission" className={styles.li} onClick={toggleMenu}>Mission</Link>
            <Link href="#courses" className={styles.li} onClick={toggleMenu}>Courses</Link>
            <Link href="#college" className={styles.li} onClick={toggleMenu}>College</Link>
            <Link href="https://vnbc-essentiel.ckgroup.ph" className={styles.button}>Login</Link>
          </div>
        )}
      
    </div>
    
  )

    
}

export default Navbar
