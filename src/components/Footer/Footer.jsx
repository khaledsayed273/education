import React from 'react'
import style from './footer.module.css'

function Footer() {

    const Data = [
        {
            id: 1,
            title: "Top Products",
            first: "Managed Website",
            secound: "Manage Reputation",
            third: "Power Tolls",
            fourth: "Marketing Services"
        },
        {
            id: 2,
            title: "Quick links",
            first: "Jobs",
            secound: "Brand Assets",
            third: "investor relations",
            fourth: "Terms of Services"
        },
        {
            id: 3,
            title: "Quick links",
            first: "Jobs",
            secound: "Brand Assets",
            third: "investor relations",
            fourth: "Terms of Services"
        },
        {
            id: 4,
            title: "Resources",
            first: "Research",
            secound: "Brand Assets",
            third: "Experts",
            fourth: "Agencies"
        },
    ]
    const data2 = [
        {
            id: 1,
            type: "facebook-f"

        },
        {
            id: 2,
            type: "twitter"
        },
        {
            id: 3,
            type: "github"
        },
        {
            id: 4,
            type: "instagram"
        },
    ]
    return (
        <footer className={`${style.footer} p-3`}>
            <div className={style.pcontainer}>
                <div className="row">
                    <div className='col-lg-9 d-flex flex-column flex-lg-row'>
                        {Data.map((item) => {
                            return (
                                <div className="col-md-3" key={item.id}>
                                    <ul className='p-0 mb-5 mb-lg-0'>
                                        <h3>{item.title}</h3>
                                        <li>{item.first}</li>
                                        <li>{item.secound}</li>
                                        <li>{item.third}</li>
                                        <li>{item.fourth}</li>
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-lg-3 d-flex justify-content-center mt-lg-0 mt-3">
                        <div className='w-100'>
                            <h3>Newsletter</h3>
                            <p>Stay update with our latest</p>
                            <div className={`flex position-relative ${style.inp}`}>
                                <input type="email" placeholder="Enter Email Address" />
                                <div className={style.send}>
                                    <i className="fas fa-arrow-right fa-sm white-color"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.copyRight}>
                    <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center mt-5">
                        <li>Copyright ©2023 All rights reserved | This template is made with By Khaled</li>
                        <ul className='mt-4 mt-md-0 mb-0 d-flex '>
                            {data2.map((item) => {
                                return (
                                    <li className={style.icons}><i key={item.id} className={`fa-brands fa-${item.type}`}></i></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer