import { Timer } from "./Timer"
import { useRouter } from 'next/router'
import styles from '../styles/components/RegisterForm.module.scss'
import timerProperties from '../timer.json'
import { useState } from "react";


export const RegisterForm = () => {
    const {year, month, day, hours, minutes, seconds} = timerProperties
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")

    const router = useRouter()

    const redirectHandler = async () => {
        const form = {
            email,
            name
        }

        const response = await fetch('/api/submit-register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(form)
        })

        console.log(response.json())
        router.push("/startnow")
    }

    return(
        <div className={styles.container}>
            <Timer
                year={year}
                month={month}
                day={day}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
                timerInForm/>
            <form className={styles.form} action="/startnow" onSubmit={redirectHandler}>
                <input className={styles.profile} type="text" placeholder="Your first name" required onChange={(e) => {
                    setName(e.target.value)
                }}/>
                <input className={styles.email} type="email" placeholder="Your email" required onChange={(e) => {
                    setEmail(e.target.value)
                }}/>
                <input className={styles.submit} type="submit" />
            </form>
            <h3 className={styles.discount}>Worth <span className={styles.overline}>$2,994</span> - <span className={styles.green} onClick={() => {
                redirectHandler()
            }}>Now is 100% free</span></h3>
        </div>
    )
}
