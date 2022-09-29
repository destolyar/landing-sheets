import styles from '../styles/components/Modal.module.scss'

export const Modal = ({ modalIsVisible=true }: any) => {
    return(
        <div className={modalIsVisible ? styles.containerVisible : 
        styles.containerUnvisible}> 
            <h1 className={styles.title}>Thanks for the invitation! We will contact you shortly.</h1>
            <img className={styles.icon} src="/check.png" alt="" />
        </div>
    )
}