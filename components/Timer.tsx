import { useEffect, useState } from "react";
import { TimerProps } from "./interfaces/Timer";
import styles from '../styles/components/Timer.module.scss'

export const Timer = ({ year, month, day, hours, minutes, seconds, timerInForm=false }: TimerProps) => {
    const [date, setDate] = useState<string[]>(["", "", "", ""])
    const [timerIsOver, setTimerIsOver] = useState<boolean>(false)

    const diffSubtract = (date1: Date, date2: Date) => {
        return date2.getTime() - date1.getTime()
    }

    useEffect(() => {
        let end_date_str = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`
        const timer = setInterval(() => {
            let now = new Date()
            const date = new Date(end_date_str)
            let ms_left = diffSubtract(now, date)
            if (ms_left <= 0) { // То
                setTimerIsOver(true)
                clearInterval(timer)
            } else {
                let res = new Date(ms_left);
                let str_timer = `${res.getUTCDate() - 1} ${res.getUTCHours()} ${res.getUTCMinutes()} ${res.getUTCSeconds()}`.split(" ")
                setDate(str_timer)
            }
        }, 1000)

        return () => clearInterval(timer)
    }, [])
    return(
        <section className={(timerInForm ? styles.form : styles.container)}>
            <img className={styles.icon} src="/info.svg" alt="" />
            <div className={styles.info}>
                <p className={styles.title}>{timerIsOver ? "Sign ups have ended" : "Sign ups end in"}</p>
                <div className={styles.time}>
                    <div className={styles.item}>
                        {(date[0].length > 1) ? date[0] : "0" + date[0]}
                        <p className={styles.type}>days</p>
                    </div>
                    <div className={styles.item}>
                        {(date[1].length > 1) ? date[1] : "0" + date[1]}
                        <p className={styles.type}>hours</p>
                    </div>
                    <div className={styles.item}>
                        {(date[2].length > 1) ? date[2] : "0" + date[2]}
                        <p className={styles.type}>mins</p>
                    </div>
                    <div className={styles.item}>
                        {(date[3].length > 1) ? date[3] : "0" + date[3]}
                        <p className={styles.type}>secs</p>
                    </div>
                </div>
            </div>
        </section>
    )
};
