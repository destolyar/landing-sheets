import { ListProps } from "../interfaces/List"
import styles from '../../styles/components/scroll/List.module.scss'

export const List: React.FC<ListProps> = ({ title, firstFact, secondFact }) => {
    return(
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <h4 className={styles.fact}>{firstFact}</h4>
            <h4 className={styles.fact}>{secondFact}</h4>
        </div>
    )
}