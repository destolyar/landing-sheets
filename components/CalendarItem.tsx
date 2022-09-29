import { CalendarItemProps } from "./interfaces/CalendarItem"
import styles from '../styles/components/CalendarItem.module.scss'

export const CalendarItem: React.FC<CalendarItemProps> = ({ day, date, icon, title, description, isFirstActualItem=false, isActive=true}) => {
    return(
        <div style={isActive ? {} : {opacity: ".5"}} className={styles.container}>
            <h3 className={styles.date}><span className={styles.day}>{day} </span>{date}</h3>
            {isFirstActualItem ? <img className={styles.timeline} src="timeline.svg"/> : ""}
            <div className={styles.card}>
                <img className={styles.icon} src={`${icon}.svg`} alt={icon} />
                <div>
                    <h4 className={styles.title}>{title}</h4>
                    <p className={styles.description}>{description}</p>
                </div>
            </div>
        </div>
    )
}