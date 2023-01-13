import React from 'react'
import style from './about.module.css'

function About() {


    const Data = [
        {
            id: 1,
            img: "https://educational-template.vercel.app/images/work.png",
            title: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            group: 750,
            msg: 50,
            salary: "1200$"
        },
        {
            id: 2,
            img: "https://educational-template.vercel.app/images/lectures.png",
            title: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            group: 187,
            msg: 15,
            salary: "140$"
        },
        {
            id: 3,
            img: "https://educational-template.vercel.app/images/vr.png",
            title: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            group: 275,
            msg: 59,
            salary: "420$"
        },
        {
            id: 4,
            img: "https://educational-template.vercel.app/images/child.png",
            title: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            group: 148,
            msg: 4,
            salary: "300$"
        },
    ]

    return (
        <>
            <div className={style.about}>
                <div className={style.overlay}></div>
                <div className='container h-100'>
                    <div className='d-flex flex-column align-items-center justify-content-center h-100'>
                        <h2 className='text-center fw-bold mb-4'>Become an instructor</h2>
                        <p className='text-center'>There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station whether that is on the deck.</p>
                        <button className={`btn mt-2 ${style.button}`}>APPLY FOR THE POST</button>
                    </div>
                </div>
            </div>
            <div className={style.blog}>
                <div className="container">
                    <h3 className='text-center mb-3'>Latest posts from our Blog</h3>
                    <p className='text-center mb-4'>In the history of modern astronomy there is.</p>
                    <div className="row">
                        {Data.map((item) => {
                            return (
                                <div className="col-lg-3 col-md-6 col-12 my-3" key={item.id}>
                                    <div className="card" >
                                        <img src={item.img} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text">{item.title}</p>
                                        </div>
                                    </div>
                                </div>)
                        })}
                    </div>
                </div>
            </div>
            <div className={style.end}>
                <div className="container">
                        <div className="d-flex justify-content-between align-items-center flex-lg-row flex-column">
                            <h2 className='text-white'>Not Yet Satisfied with our Trend?</h2>
                            <button className={style.button2}>VIEW OUR BLOG</button>
                        </div>
                </div>
            </div>
        </>
    )
}

export default About