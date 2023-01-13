import React from 'react'
import styles from './header.module.css'
function Header() {

    const data = [
        {
            id:1 ,
            type: "facebook-f"

        },
        {
            id:2 ,
            type: "twitter"
        },
        {
            id:3 ,
            type: "github"
        },
        {
            id:4 ,
            type: "instagram"
        },
    ]

    return (
        <header className={`${styles.header} d-none d-md-block`}>
            <div className='px-0 container d-flex justify-content-between align-items-center'>
                <div className={`left d-flex ${styles.left}`}>
                    {data.map((item) => {
                        return (
                            <i key={item.id} className={`fa-brands fa-${item.type}`}></i>
                        )
                    })}
                </div>
                <div className={styles.right}>
                    <span className='me-4'>+201145645014</span>
                    <span>khaledsayed273@gmail.com</span>
                </div>
            </div>
        </header>
    )
}

export default Header