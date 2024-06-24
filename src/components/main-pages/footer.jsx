import React from 'react'

function Footer() {
    return (
        <div className='w-full h-[100vh] max-md:h-[110vh] bg-black  px-5 py-10 np relative overflow-hidden'>
            <div className='flex items-center justify-between max-md:flex-col '>
                <div className=''>
                    <h1 className='heading text-[2vw] max-md:text-[4vw]'>Products</h1>
                    <div className='flex flex-col gap-3  max-md:gap-1 p-5'>
                    <a className='text-[1vw] max-md:text-[3vw] ' href="#">Phone(2a)</a>
                    <a className='text-[1vw] max-md:text-[3vw] ' href="#">Phone(a)</a>
                    <a className='text-[1vw] max-md:text-[3vw] ' href="#">Ear(a)</a>
                    <a className='text-[1vw] max-md:text-[3vw] ' href="#">Ear</a>
                    <a className='text-[1vw] max-md:text-[3vw] ' href="#">Accessories</a>
                    <a className='text-[1vw] max-md:text-[3vw] ' href="#">Apparel</a>
                    </div>
                </div>
                <div className=''>
                    <h1 className='heading text-[2vw] max-md:text-[4vw]'>Company</h1>
                    <div className='flex flex-col gap-3  max-md:gap-1 p-5'>
                    <a className='text-[1vw] max-md:text-[3vw] ' href="#">About US</a>
                    <a className='text-[1vw] max-md:text-[3vw] ' href="#">Careers</a>
                    <a className='text-[1vw] max-md:text-[3vw] ' href="#">Community</a>
                    <a className='text-[1vw] max-md:text-[3vw] ' href="#">Newsroom</a>
                    <a className='text-[1vw] max-md:text-[3vw] ' href="#">Sustainability</a>
                    <a className='text-[1vw] max-md:text-[3vw] ' href="#">Business enquiry</a>
                    <a className='text-[1vw] max-md:text-[3vw] ' href="#">Press Contact</a>
                    </div>
                </div>
                <div className=''>
                    <h1 className='heading text-[2vw] max-md:text-[4vw]'>Support</h1>
                    <div className='flex flex-col gap-3  max-md:gap-1 p-5'>
                    <a className='text-[1vw] max-md:text-[3vw] ' href="#">About US</a>
                    <a className='text-[1vw] max-md:text-[3vw] ' href="#">Support Center</a>
                    <a className='text-[1vw] max-md:text-[3vw] ' href="#">Contact US</a>
                    <a className='text-[1vw] max-md:text-[3vw] ' href="#">Contact US via Whatsapp</a>
                    <a className='text-[1vw] max-md:text-[3vw] ' href="#">Service Centre</a>
                    <a className='text-[1vw] max-md:text-[3vw] ' href="#">E-waste management</a>
                    <a className='text-[1vw] max-md:text-[3vw] ' href="#">Find a store</a>
                    <a className='text-[1vw] max-md:text-[3vw] ' href="#">Security Vulnerability</a>
                    <a className='text-[1vw] max-md:text-[3vw] ' href="#">Report</a>
                    </div>
                </div>
                <div className='p-2 flex flex-col gap-3 max-md:gap-2 items-center'>
                <h1 className='heading text-[1vw] max-md:text-[3vw]'>JOIN OUR MAILING LIST</h1>
                <input className='py-2 px-10 border-[2px] rounded-md mt-3 bg-black' type="email" name="email" placeholder='Email address' id="" />
                <button type='submit' className='py-2 w-32 rounded-full bg-white text-black'>submit</button>
                </div>
            </div>
           <div className=''></div>
            <div className=' flex items-center justify-center'>
                <p className=' absolute bottom-0  text-[1vw] max-md:text-[3vw] text-center'>© 2021 All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer