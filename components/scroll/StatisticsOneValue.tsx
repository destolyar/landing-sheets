import styles from '../../styles/components/scroll/Statistics.module.scss'
import { StatistcsOneValueProps } from '../interfaces/StatisticsOneValue'

export const StatisticsOneValue: React.FC<StatistcsOneValueProps> = ({
    title,
    result,
    subtitle,
    isMainResult=false }) => {
    return(
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.results}>
                <div className={styles.item}>
                    <h5 className={styles.mainResult}>{result}</h5>
                    <h4 className={styles.subtitle}>{subtitle}</h4>
                    {isMainResult ?
                        <div className={styles.attention}>
                            <img className={styles.icon} src="/info.svg" alt="" />
                            <h5 className={styles.attentionText}>That’s 32 meetings for 100 prospects contacted</h5>
                        </div> : ""
                    }
                </div>
            </div>
        </div>
    )
}
