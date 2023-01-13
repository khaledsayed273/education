import React from 'react'
import Contact from './Contact'
import Nav from './Nav/Nav'
import styles from './section.module.css'

function Section() {
  return (
    <section className={`${styles.section} pt-2`}>
      <div className={styles.over}></div>
        <Nav />
        <Contact />
    </section>
  )
}

export default Section