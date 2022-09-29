import { CenterTitleProps } from "../interfaces/CenterTitle"
import styles from '../../styles/components/scroll/CenterTitle.module.scss'


export const CenterTitle: React.FC<CenterTitleProps> = ({ title }) => {
    return(
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
        </div>
    )
}