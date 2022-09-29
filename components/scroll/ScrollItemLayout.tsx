import { ScrollItemProps } from "../interfaces/ScrollItem"
import styles from '../../styles/components/scroll/ScrollItemLayout.module.scss'

export const ScrollItemLayout: React.FC<ScrollItemProps> = ({ id, children }) => {
    return(
        <div id={`${id}`} className={styles.container}>
            { children }

            <a className={styles.button} href={"#" + ++id}>
                <img className={styles.arrow} src="/arrow-down.svg" alt="" />
            </a>
        </div>
    )
}