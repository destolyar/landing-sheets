import type { NextPage } from 'next'
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { RegisterForm } from '../components/RegisterForm';
import { Scroll } from '../components/Scroll';
import styles from '../styles/pages/masterclass.module.scss'

const Home: NextPage = () => {
  const [screenWidth, setScreenWidth] = useState(1920)
  useEffect(() => {
    const updateSize = () => {
      if (typeof window !== 'undefined') {
        setScreenWidth(window.screen.width)
      }
    }
    window.addEventListener('resize', updateSize);
    updateSize()
    return () => window.removeEventListener('resize', updateSize);
  }, [])

  return (
    <>
      <Head>
        <title>Social Selling Masterclass</title>
      </Head>

      <main className={styles.container}>
        <section className={styles.section}>
          <h1 className={styles.title}>Social Selling Masterclass</h1>
          <ul className={styles.list}>
            <li className={styles.item}>
              <img className={styles.marker} src="/ok.svg" alt="" />
              Exclusive strategies & templates to go from 0 to 30%+ meetings booked with cold prospects
            </li>
            <li className={styles.item}>
              <img className={styles.marker} src="/ok.svg" alt="" />
              Join an active cohort with ondemand learnings
            </li>
            <li className={styles.item}>
              <img className={styles.marker} src="/ok.svg" alt="" />
              Unlimited support and feedback by cold outreach experts
            </li>
          </ul>
          <RegisterForm/>
        </section>
        <Scroll/>
        {screenWidth < 992 ?
        <section className={styles.footerFormContainer} id="final-form">
          <RegisterForm/>
        </section> : ""}
      </main>
    </>
  )
}

export default Home
