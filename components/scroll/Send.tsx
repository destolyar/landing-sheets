import styles from '../../styles/components/scroll/Send.module.scss'

export const Send = () => {
    return(
        <div className={styles.container}>
            <h3 className={styles.title}>Super excited, he started his outreach to 2,500 prospects!</h3>
            <img className={styles.image} src="/send.svg" alt="mail" />
        </div>
    )
}
