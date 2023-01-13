import React from 'react'
import styles from './contact.module.css'

function Contact() {
    return (
        <div className={styles.contact}>
            <div className=" px-0 container">
                <div className={`d-flex flex-column justify-content-center align-items-lg-start justify-content-center `}>
                    <h1 className='mb-5'>WE ENSURE BETTER EDUCATION FOR A BETTER WORLD</h1>
                    <p className='mb-5'>In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telescope known as the Hubble.</p>
                    <button className='btn border-0'>GET STARTED</button>
                </div>
            </div>
        </div>
    )
}

export default Contact