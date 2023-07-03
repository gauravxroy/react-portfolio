import React from 'react'

const Contact = () => {
    return (
        <section id="contact" className='pb-16'>
            <div className="container  ">
                <h2 className='text-violet-500 font-[800] text-[2rem] mb-5 text-center'>Get In Touch</h2>
                <div className="md:flex justify-center 
                ">
                    {/* <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
                      <img src="https://cdn.pixabay.com/photo/2016/09/19/07/01/lake-1679708_1280.jpg" alt="img" />
                    </div> */}
                    <div className="w-full  mt-8 md:mt-0 md:w-1/2  lg:flex items-center bg-indigo-100 rounded-[8px] px-4 lg:px-8 py-10">
                        <form action="" className='w-full '>
                            <div className='mb-5'>
                                <input type="text"
                                    placeholder='Enter Your Name'
                                    className='w-full p-3 focus:outline-none focus:ring focus:border-violet-800  rounded-[5px]'
                                />
                            </div>
                            <div className='mb-5'>
                                <input type="text"
                                    placeholder='Email'
                                    className='w-full p-3 focus:outline-none focus:ring focus:border-violet-800  rounded-[5px]'
                                />
                            </div>
                            <div className='mb-5'>
                                <input type="text"
                                    placeholder='Subject'
                                    className='w-full p-3 focus:outline-none focus:ring focus:border-violet-800  rounded-[5px]'
                                />
                            </div>
                            <div className='mb-5'>
                                <input type="text"
                                    placeholder='Enter Message'
                                    className='w-full p-3 focus:outline-none focus:ring focus:border-violet-800  rounded-[5px]'
                                />
                            </div>
                            <div className="mt-5 justify-center items-center">
                            {/* <button className="w-full flex justify-center gap-2  text-violet-500 border font-600  border-solid border-violet-500  px-4 rounded-[5px]  hover:bg-violet-500 hover:text-white hover:font-[500] ease-in duration-500 p-2 " >Send</button> */}
                            <a href="/"><button className="w-full flex justify-center items-center gap-2  text-white bg-violet-500 border font-600  border-solid border-violet-500  px-4 rounded-[9px]  hover:opacity-80  p-2 " >Send Message</button></a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact