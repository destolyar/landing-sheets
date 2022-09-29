import { SliderItemProps } from "../interfaces/SliderItem"
import styles from '../../styles/components/scroll/SliderItem.module.scss'

export const SliderItem: React.FC<SliderItemProps> = ({
    profileImage,
    name,
    role,
    testimonial,
    booked,
    beforeResult
}) => {
    return(
        <div className={styles.container}>
            <header className={styles.header}>
                <img className={styles.profile} src={profileImage} alt="Profile image" />
                <div className={styles.info}>
                    <h4 className={styles.name}>{name}</h4>
                    <h5 className={styles.role}>{role}</h5>
                    <img className={styles.stars} src="/stars.svg" alt="" />
                </div>
            </header>
            <p className={styles.testimonial}>{`"${testimonial}"`}</p>
            <div className={styles.results}>
                <div className={styles.resultsItem}>
                    <h2 className={styles.result}>{booked}</h2>
                    <p className={styles.subtitle}>meetings booked</p>
                </div>
                <div className={styles.resultsItem}>
                    <h2 className={styles.result}>{beforeResult}</h2>
                    <p className={styles.subtitle}>before getting results</p>
                </div>
            </div>
        </div>
    )
}