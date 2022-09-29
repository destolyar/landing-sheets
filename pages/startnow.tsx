import Head from "next/head";
import React from "react";
import { Calendar } from "../components/Calendar";
import { InviteForm } from "../components/InviteForm";
import { Timer } from "../components/Timer";
import styles from '../styles/pages/startnow.module.scss'
import timerProperties from '../timer.json'


const Startnow: React.FC = () => {
    const {year, month, day, hours, minutes, seconds} = timerProperties
    return(
        <>
            <Head>
                <title>Social Selling Masterclass</title>
            </Head>
            <header className={styles.header}>
                <h2 className={styles.title}>You’re in!</h2>
                <InviteForm/>
            </header>
            <main className={styles.main}>
                <Timer
                    year={year}
                    month={month}
                    day={day}
                    hours={hours}
                    minutes={minutes}
                    seconds={seconds}/>
                <h2 className={styles.title}>Here’s what’s next!</h2>
                <Calendar/>
                <h2 className={styles.title}>And don’t forget!</h2>
            </main>
            <footer className={styles.footer}>
                <InviteForm/>
                <Timer
                    year={year}
                    month={month}
                    day={day}
                    hours={hours}
                    minutes={minutes}
                    seconds={seconds}/>
                <p className={styles.questions}>Have a questions? Send it <a className={styles.link} href="https://www.linkedin.com/in/qvist/" target="_blank" rel="noreferrer">over here</a></p>
            </footer>
        </>
    )
}

export default Startnow
