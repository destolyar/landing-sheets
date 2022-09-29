import styles from '../../styles/components/scroll/Person.module.scss'

export const Person = () => {
    return(
        <div className={styles.container}>
            <div className={styles.man}>
                <h3 className={styles.name}>Meet Christian.</h3>
                <img className={styles.arrow} src="/arrow-right.png" alt="right arrow" />
                <img className={styles.photo} src="/person.png" alt="photo" />
            </div>
            <p className={styles.description}>Christian is reaching out on LinkedIn to warm up new relationships.</p>
        </div>
    )
}
