import styles from '../../styles/components/scroll/Targeting.module.scss'

export const Targeting: React.FC = () => {
    return(
        <div className={styles.container}>
            <h3 className={styles.title}>1 - Targeting</h3>
            <h4 className={styles.fact}>Christian did not personalize his outreach.<br/>He failed at knowing:</h4>
            <ul className={styles.list}>
                <li className={styles.fact}>who to approach</li>
                <li className={styles.fact}>when to reach out</li>
                <li className={styles.fact}>how to personalize to them</li>
                <li className={styles.fact}>what value proposition to focus on</li>
            </ul>
        </div>
    )
}
