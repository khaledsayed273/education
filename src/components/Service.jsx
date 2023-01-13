import React from 'react'

function Service() {


    const Data = [
        {
            id: 1,
            top: "Learn Online Course",
            p: "Usage of the Internet is becoming more common due to rapid advancement of technology",
            span: "Join Now"
        },
        {
            id: 2,
            top: "No.1 of universities",
            p: "For many of us, our very first experience of learning about the celestial bodies begins when we",
            span: "Join Now"
        },
        {
            id: 3,
            top: "Huge Library",
            p: "If you are a serious astronomy fanatic like a lot of us are, you can probably remember that one event.",
            span: "Join Now"
        },
    ]

    return (
        <div className='serveice'>
            <div className='container'>
                <div className="row w-100 mx-0">
                    {Data.map((item) => {
                        return (
                        <div className="col-lg-4 my-lg-0 my-3" key={item.id}>
                            <div className="card">
                                <div className="top">
                                    <h6 className='text-center'>{item.top}</h6>
                                </div>
                                <div className="bottom">
                                    <p>{item.p}</p>
                                    <span>{item.span}</span>
                                </div>
                            </div>
                        </div>)
                    })}

                </div>
            </div>

        </div>
    )
}

export default Service