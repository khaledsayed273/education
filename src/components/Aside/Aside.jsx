/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import style from './aside.module.css'

function Aside() {

    const Data = [
        {
            id: 1,
            img: "https://educational-template.vercel.app/images/teach.png",
            title: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            group: 250,
            msg: 5,
            salary: "200$"
        },
        {
            id: 2,
            img: "https://educational-template.vercel.app/images/lectures.png",
            title: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            group: 170,
            msg: 3,
            salary: "290$"
        },
        {
            id: 3,
            img: "https://educational-template.vercel.app/images/teach2.png",
            title: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            group: 350,
            msg: 1,
            salary: "700$"
        },
        {
            id: 4,
            img: "https://educational-template.vercel.app/images/marketing.png",
            title: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            group: 50,
            msg: 0,
            salary: "20$"
        },
        {
            id: 5,
            img: "https://educational-template.vercel.app/images/work.png",
            title: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            group: 750,
            msg: 50,
            salary: "1200$"
        },
        {
            id: 6,
            img: "https://educational-template.vercel.app/images/lectures.png",
            title: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            group: 187,
            msg: 15,
            salary: "140$"
        },
        {
            id: 7,
            img: "https://educational-template.vercel.app/images/vr.png",
            title: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            group: 275,
            msg: 59,
            salary: "420$"
        },
        {
            id: 8,
            img: "https://educational-template.vercel.app/images/child.png",
            title: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            group: 148,
            msg: 4,
            salary: "300$"
        },
    ]


    return (
        <aside className='aside mb-5'>
            <div className="container">
                <div className="title">
                    <h3 className='text-center'>Popular Courses we offer</h3>
                    <p className='text-center mb-4'>There is a moment in the life of any aspiring.</p>
                </div>
                <div className={style.pslide}>
                    <ul className={style.ulElement}>
                        {Data.map((item) => {
                            return (
                                <div className='col-lg-3 col-12 my-lg-0 my-3' key={item.id}>
                                    <li className='mx-2'>
                                        <div className={style.card}>
                                            <div className={`position-relative`}>
                                                <div className={`position-relative overflow-hidden `}>
                                                    <img src={item.img} className="card-img-top  w-100 h-100" alt="..." />
                                                    <div className={style.over}></div>
                                                </div>
                                                <div className={`position-absolute w-100 d-flex justify-content-between ${style.child}`}>
                                                    <div className="d-flex ">
                                                        <div className='usergroup'>
                                                            <i className="fa-solid fa-user-group"></i>
                                                            <span className='ms-1 fw-bold'>{item.group}</span>
                                                        </div>
                                                        <div className='message ms-3'>
                                                            <i className="fa-solid fa-envelope"></i>
                                                            <span className='ms-1 fw-bold'>{item.msg}</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className='fw-bold'>{item.salary}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body p-3">
                                                <h5 className="card-title mb-2 text-dark">Card title</h5>
                                                <p className="card-text">{item.title}</p>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            )
                        })}

                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default Aside
