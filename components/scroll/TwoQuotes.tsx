import styles from '../../styles/components/scroll/TwoQuotes.module.scss'
import { TwoQuotesProps } from '../interfaces/TwoQuotes'

export const TwoQuotes: React.FC<TwoQuotesProps> = ({ firstQuote, secondQuote }) => {
    return(
        <div className={styles.container}>
            <h3 className={styles.quote}>{firstQuote}</h3>
            <h3 className={styles.quote}>{secondQuote}</h3>
        </div>
    )
}