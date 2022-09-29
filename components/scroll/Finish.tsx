import styles from '../../styles/components/scroll/Finish.module.scss'

export const Finish: React.FC = () => {
    return(
        <div id="27" className={styles.container}>
            <a className={styles.arrow} href="#final-form">
                <img src="/arrow-down.svg" alt="" />
            </a>

            <div className={styles.info}>
                <h3 className={styles.subtitle}>But, the real question now is:</h3>
                <h2 className={styles.title}>Are you the next Christian or?</h2>
            </div>
        </div>
    )
}
