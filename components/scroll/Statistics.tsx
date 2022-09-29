import styles from '../../styles/components/scroll/Statistics.module.scss'
import { StatisticsProps } from '../interfaces/Statistics'

export const Statistics: React.FC<StatisticsProps> = ({ 
    title, 
    firstResult, 
    secondResult, 
    thirdResult,
    firstSubtitle,
    secondSubtitle,
    thirdSubtitle }) => {
    return(
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.results}>
                <div className={styles.item}>
                    <h5 className={styles.result}>{firstResult}</h5>
                    <h4 className={styles.subtitle}>{firstSubtitle}</h4>
                </div>
                <div className={styles.item}>
                    <h5 className={styles.result}>{secondResult}</h5>
                    <h4 className={styles.subtitle}>{secondSubtitle}</h4>  
                </div>
                <div className={styles.item}>
                    <h5 className={styles.result}>{thirdResult}</h5>
                    <h4 className={styles.subtitle}>{thirdSubtitle}</h4>
                </div>
            </div>
        </div>
    )
}