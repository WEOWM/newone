import React from 'react'

const Header = () => {
    const nav = [
        {
            name: "produts",

        }
    ]
  return (
    <div className='w-full h-36 bg-black text-[#ADFF00] max-sm:hidden'>
        <div className='h-10 bg-black'/>
        <div className='flex justify-between lg:px-5'>
            <p>LOGO</p>

            <div className='flex gap-x-10 font-Inter'>
                <p>product</p>
                <p>Support</p>
                <p>Services</p>
                <p>Solution</p>
                <p>About Us</p>
                <p>Blog</p>
            </div>

            <div className=''>
                <p>English</p>
            </div>

        </div>

      <div className='mt-10 px-10 text-white'>
          <p>Home/Services/Data Protection</p>
      </div>
    </div>
  )
}

export default Header