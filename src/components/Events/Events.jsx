import React, { useRef } from 'react'
import style from './events.module.css'

function Events() {


   const Data = [
      {
         id: 1,
         img: "https://educational-template.vercel.app/images/teach.png",
         title: "Some quick example text to build on the card title and make up the bulk of the card's content.",
         cardTitle: "25th February 2018",
         group: 250,
         msg: 5,
         salary: "200$"
      },
      {
         id: 2,
         img: "https://educational-template.vercel.app/images/lectures.png",
         title: "Some quick example text to build on the card title and make up the bulk of the card's content.",
         cardTitle: "25th February 2018",
         group: 170,
         msg: 3,
         salary: "290$"
      },
      {
         id: 3,
         img: "https://educational-template.vercel.app/images/teach2.png",
         title: "Some quick example text to build on the card title and make up the bulk of the card's content.",
         cardTitle: "25th February 2018",
         group: 350,
         msg: 1,
         salary: "700$"
      },
      {
         id: 4,
         img: "https://educational-template.vercel.app/images/marketing.png",
         title: "Some quick example text to build on the card title and make up the bulk of the card's content.",
         cardTitle: "25th February 2018",
         group: 50,
         msg: 0,
         salary: "20$"
      },
      {
         id: 5,
         img: "https://educational-template.vercel.app/images/work.png",
         title: "Some quick example text to build on the card title and make up the bulk of the card's content.",
         cardTitle: "25th February 2018",
         group: 750,
         msg: 50,
         salary: "1200$"
      },
      {
         id: 6,
         img: "https://educational-template.vercel.app/images/lectures.png",
         title: "Some quick example text to build on the card title and make up the bulk of the card's content.",
         cardTitle: "25th February 2018",
         group: 187,
         msg: 15,
         salary: "140$"
      },

   ]


   const ul = useRef('')

   const HandleBtn = (id) => {
      if (Number(id) === 1) {
         ul.current.style.left = "0%"
      }
      else if (Number(id) === 2) {
         ul.current.style.left = "-49.5%"
      }
      else if (Number(id) === 3) {
         ul.current.style.left = "-99.5%"

      }
   }

   return (

         <div className={style.events}>
            <h2 className='text-center'>Upcoming Events of our Institute</h2>
            <p className='text-center'>If you are a serious astronomy fanatic like a lot of us</p>
            <div className="container">
               <div className={`${style.pslide}`}>
                  <ul ref={ul} className={`${style.ulElement} p-0 p-md-5`}>
                     {Data.map(item => {
                        return (
                           <div className='col-lg-6 col-12 p-3 me-0 me-lg-3' key={item.id}>
                              <li className='me-2'>
                                 <div className={style.card}>
                                    <div className={`position-relative`}>
                                       <div className={`position-relative overflow-hidden h-100 `}>
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
                                       <h5 className="card-title mb-2 text-dark">{item.cardTitle}</h5>
                                       <p className={style.paragraph}>{item.title}</p>
                                    </div>
                                 </div>
                              </li>
                           </div>
                        )
                     })}
                  </ul>
                  <div className={style.pOfBtns}>
                     <span onClick={(e) => HandleBtn(e.target.id)} id='1'></span>
                     <span onClick={(e) => HandleBtn(e.target.id)} id='2'></span>
                     <span onClick={(e) => HandleBtn(e.target.id)} id='3'></span>
                  </div>
               </div>
            </div>
         </div>
   )
}

export default Events