import styles from '../styles/components/CalendarItem.module.scss'
import { CalendarImportantItemProps } from "./interfaces/CalendarImportantItem"

export const CalendarImportantItem: React.FC<CalendarImportantItemProps> = ({ day, date, icon, title, description, linkLabel, link, isFirstActualItem=false, isActive=true}) => {
    return(
        <div style={isActive ? {} : {opacity: ".5"}} className={styles.container}>
            <h3 className={styles.date}><span className={styles.day}>{day} </span>{date}</h3>
            {isFirstActualItem ? <img className={styles.timeline} src="timeline.svg"/> : ""}
            
            <div className={styles.card}>
                <div className={styles.important}>Important</div>
                <img className={styles.icon} src={`${icon}.svg`} alt={icon} />
                <div>
                    <h4 className={styles.title}>{title}</h4>
                    <p className={styles.description}>{description}</p>
                    <a className={styles.link} href={link} target="_blank" rel="noreferrer">{linkLabel}➞</a>
                </div>
            </div>
        </div>
    )
}