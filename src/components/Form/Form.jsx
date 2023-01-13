import React from 'react'
import style from './form.module.css'

function Form() {


    const handleSubmit = (e) => {
        e.preventDefault()
        let f = "123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let id = ''

        for(let i = 0 ; i < 16 ; i++){
            id += f[Math.floor(Math.random() * f.length)]
        }
        console.log(id);

    }

    return (
        <div className={style.parentForm}>
            <div className={style.overlay}></div>
            <div className="row w-100 h-100 m-auto d-flex justify-content-center pe-lg-5">
                <div className="col-lg-6 h-100">
                    <div className='left d-flex flex-column p-5 justify-content-around h-100'>
                        <div className='top p-3'>
                            <h1>Get reduced fee during this Summer!</h1>
                            <p className=''>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach.</p>
                        </div>
                        <div className='bottom d-flex flex-md-row flex-column'>
                            <div className="leftSide p-3">
                                <i className="fa-solid fa-globe"></i>
                                <h4 className='my-3'>Expert Instructors</h4>
                                <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                            </div>
                            <div className="rightSide p-3">
                                <i className="fa-solid fa-sun"></i>
                                <h4 className='my-3'>Certifications</h4>
                                <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`col-lg-5 ${style.right}`}>
                    <form className={style.form} onSubmit={handleSubmit}>
                        <h4 className='mb-4 text-center'>Search for Available Course</h4>
                        <input placeholder='Enter Your Name' type="text" className='form-control my-3' />
                        <input placeholder='Enter Your Phone Number' type="number" className='form-control my-3' />
                        <input placeholder='Enter Your Email' type="email" className='form-control my-3' />
                        <select className="form-select my-3" aria-label="Default select example">
                            <option defaultValue>Choose Course</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            I Accept All Terms And Conditions
                            </label>
                        </div>
                        <button className='btn mt-3'>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form
