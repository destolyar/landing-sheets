import styles from '../../styles/components/scroll/Message.module.scss'
import { MessageProps } from '../interfaces/Message'

export const Message: React.FC<MessageProps> = ({ title, mail }) => {
    return(
        <div className={styles.container}>
            <h3 className={styles.quote}>{title}</h3>
            <img className={styles.mail} src={`${mail}.png`} alt={title} />
        </div>
    )
}