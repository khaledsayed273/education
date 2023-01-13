/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useRef, useState } from 'react'
import styles from './nav.module.css'

import '../app.css'

function Nav() {
    const [tog , setTog] = useState(Boolean('true'))

    const handleBtn = () => {
        setTog(!tog)
    }
    
    const body = window.document.body
    const ul = useRef("")
    useEffect(() => {
        if(tog){
            ul.current.classList.remove('add')
            body.style.overflow = "auto"
            window.document.getElementById('root').querySelector('.serveice').style.display = 'block';
            window.document.getElementById('root').querySelector('.aside').style.display = 'block';
        }else {
            ul.current.classList.add('add')
            body.style.overflow = "hidden"
            window.document.getElementById('root').querySelector('.serveice').style.display = 'none';
            window.document.getElementById('root').querySelector('.aside').style.display = 'none';
        }
    }, [body.style, tog])


    const toggle = tog ? "right" : "add"

    return (
        <nav className={`${styles.nav} navbar navbar-expand-xl`}>
            <div className="px-sm-0 container d-flex justify-content-between align-items-center">
                <div className={styles.left}>
                    <div className={styles.logo}>
                        <img src="https://educational-template.vercel.app/images/logo.png" alt="" />
                    </div>
                </div>
                <button onClick={handleBtn} className={`navbar-toggler ${styles.button}`} >
                    <i className="fa-solid fa-bars"></i>
                </button>
                <div className="navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul ref={ul} className={` mt-xl-0 mt-4 navbar-nav ${toggle}`}>
                        <div onClick={handleBtn}>
                            <i className="fa-solid fa-x"></i>
                        </div>
                        <li className='ms-xl-5 ms-0 my-xl-0 mt-5 mb-3'><a className='active' href="#" >home</a></li>
                        <li className='ms-xl-5 ms-0 my-xl-0 my-3'><a href="#" >about</a></li>
                        <li className='ms-xl-5 ms-0 my-xl-0 my-3'><a href="#" >courses</a></li>
                        <li className='ms-xl-5 ms-0 my-xl-0 my-3'><a href="#" >events</a></li>
                        <li className='ms-xl-5 ms-0 my-xl-0 my-3'><a href="#" >gellery</a></li>
                        <li className={`nav-item dropdown ms-xl-5 ms-0 my-xl-0 my-3 ${styles.drop}`}>
                            <a className='nav-link dropdown-toggle' href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >blog</a>
                            <ul className={`dropdown-menu dropdown-menu-dark ${styles.uldropdown}`}>
                                <li className='m-0'><a className="dropdown-item" href="#">Action</a></li>
                                <li className='m-0'><a className="dropdown-item" href="#">Another action</a></li>
                                <li className='m-0'><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className={`nav-item dropdown ms-xl-5 ms-0 my-xl-0 my-3 ${styles.drop}`}>
                            <a className='nav-link dropdown-toggle' href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >pages</a>
                            <ul className={`dropdown-menu dropdown-menu-dark ${styles.uldropdown}`}>
                                <li className='m-0'><a className="dropdown-item" href="#">Action</a></li>
                                <li className='m-0'><a className="dropdown-item" href="#">Another action</a></li>
                                <li className='m-0'><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className='ms-xl-5 ms-0 my-xl-0 my-3'><a href="#" >contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
