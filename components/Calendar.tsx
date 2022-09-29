import { CalendarItem } from "./CalendarItem"
import styles from '../styles/components/Calendar.module.scss'
import { CalendarImportantItem } from "./CalendarImportantItem"

export const Calendar = () => {
    return(
        <section className={styles.container}>
            <CalendarItem
                day="Today"
                date="Now"
                icon="message"
                title="Signup"
                description="Sign up to the Social Selling Masterclass"
                isActive={false}
            />

            <CalendarImportantItem
                day="Tuesday"
                date="October 11th"
                icon="calendar"
                title="Social Selling launch event"
                description="Live event to share a tons of value + have a very special announcement!"
                linkLabel="Replay available here"
                link="https://lu.ma/demand-social-selling"
                isActive={false}
            />

            <CalendarItem
                day="Wednesday"
                date="October 12th"
                icon="play"
                title="Signup"
                description="Get started with hundreds of ambitious people in your cohort!"
                isFirstActualItem
            />

            <CalendarItem
                day="Tuesday"
                date="October 25th"
                icon="group"
                title="Group coaching #1"
                description="Attend your live coaching with others from your cohort to get help and grow together"
            />

            <CalendarItem
                day="Tuesday"
                date="November 1'st"
                icon="group"
                title="Group coaching #2"
                description="Attend your live coaching with others from your cohort to get help and grow together"
            />

            <CalendarItem
                day="Tuesday"
                date="November 8th"
                icon="group"
                title="Group coaching #3"
                description="Attend your live coaching with others from your cohort to get help and grow together"
            />

            <CalendarItem
                day="Tuesday"
                date="November 15th"
                icon="group"
                title="Group coaching #4"
                description="Attend your live coaching with others from your cohort to get help and grow together"
            />

            <CalendarItem
                day="Tuesday"
                date="November 22th"
                icon="play"
                title="Start your Campaign"
                description="Start seeing the impact in your business"
            />
        </section>
    )
}
