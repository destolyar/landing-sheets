import { useState } from 'react'
import styles from '../styles/components/InviteForm.module.scss'
import { Modal } from './Modal'

export const InviteForm = () => {
    const [refferalName, setRefferalName] = useState("")
    const [refferalEmail, setRefferalEmail] = useState("")
    const [whoRefferedEmail, setWhoRefferedEmail] = useState("")
    const [modalIsVisible, setModalIsVisible] = useState(false)

    const submitHandler = async (event: any) => {
        event.preventDefault();

        const form = {
            refferalName,
            refferalEmail,
            whoRefferedEmail
        }

        const response = await fetch('/api/submit-invite', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }, 
            body: JSON.stringify(form)
        })

        openModal()
    } 

    const openModal = () => {
        setModalIsVisible(true)

        setTimeout(() => {
            closeModal()
        }, 3000)
    }
    
    const closeModal = () => {
        setModalIsVisible(false)
    }
    return(
        <section className={styles.container}>
            <Modal modalIsVisible={modalIsVisible}/>
            <h1 className={styles.title}>Invite your team & friends!</h1>
            <div className={styles.opportunities}>
                <div className={styles.opportunity}>
                    <img className={styles.icon} src="/ok.svg" alt="ok" />
                    <p>It’s waaaay more fun when you are all together</p>
                </div>
                <div className={styles.opportunity}>
                    <img className={styles.icon} src="/ok.svg" alt="ok" />
                    <p>You’ll get a super cool gift after 15 invites</p>
                </div>
            </div>
            <form className={styles.form} action="#" onSubmit={submitHandler}>
                <input className={styles.text} type="text" placeholder="THEIR first name" required onChange={(e) => {
                    setRefferalName(e.target.value)
                }}/>
                <input className={styles.email} type="email" placeholder="THEIR email" required onChange={(e) => {
                    setRefferalEmail(e.target.value)
                }}/>
                <input className={styles.email} type="email" placeholder="YOUR email" required onChange={(e) => {
                    setWhoRefferedEmail(e.target.value)
                }}/>
                <input className={styles.button} type="submit" value="INVITE NOW"/>          
                </form>
        </section>       
    )
}