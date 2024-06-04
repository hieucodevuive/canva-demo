import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { BsFolder, BsGrid1X2 } from 'react-icons/bs'

export default function Layout() {

  const { pathname } = useLocation()
  const [show, setShow] = useState(false)

  return (
    <div className='bg-[#18191b] min-h-screen w-full'>
      <div className='bg-[#252627] shadow-md fixed left-0 top-0
      w-full z-20'>
        <div className='w-[93%] m-auto py-3'>
          <div className='flex justify-between items-center'>
            <div className='w-[80px] h-[48px]'>
              <img className='h-full' src="src/assets/logo.png" alt="" />
            </div>
            <div className='flex gap-4 justify-center items-center relative'>
              <button className='py-2 px-6 overflow-hidden text-center bg-[#8b3dff] text-white rounded-[5px]
              font-medium hover:bg-[#9553f8]'>
                Create a Design
              </button>
              <div className='cursor-pointer' onClick={() => setShow(!show)}>
                <img className='w-[45px] h-[45px] rounded-full' src="src/assets/avt.jpg" alt="" />
              </div>
              <div className={`absolute top-[60px] right-0 w-[250px] bg-[#313030] p-3 border border-gray-700 transition duration-500 ${show ? 'visible opacity-100' : 'invisible opacity-30'}`}>
                <div className='flex px-2 py-1 gap-4 items-center justify-start'>
                  <img className='w-[45px] h-[45px] rounded-full' src="data:image/jpeg;base64,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" alt="" />
                  <div className='flex flex-col gap-1 items-start text-white'>
                    <span>Test 1</span>
                    <span>Test@gmail.com</span>
                  </div>
                </div>
                <ul className='text-[#e0dddd] font-semibold flex flex-col items-center gap-1'>
                  <li>
                    <Link className='p-2'>
                      <span>setting</span>
                    </Link>
                  </li>
                  <li>
                    <Link className='p-2'>
                      <span>Logout</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex mt-16'>
        <div className='sidebar w-[300px] p-5 h-[calc(100vh-70px)] fixed'>
          <div className='px-2 mb-3 py-2 flex justify-start gap-5 items-center'>
            <img className='w-[50px] rounded-full' src="src/assets/avt.jpg" alt="image" />
            <div className='flex justify-center flex-col items-start'>
              <span className='text-[#e0dddd] font-bold text-md'>Test 1</span>
              <span className='text-[#c4c0c0] text-sm'>Free</span>
            </div>
          </div>
          <ul className='px-4 flex flex-col gap-2'>
            <li>
              <Link to='/' className={`text-[#e0dddd] px-2 py-2 flex justify-start items-center gap-2 
              ${pathname === '/' ? 'bg-[#ffffff26]' : ''} rounded-[4px]`}>
                <span className='text-xl'><FaHome /></span>
                <span className='font-medium'>Home</span>
              </Link>
            </li>
            <li>
              <Link to='/projects' className={`text-[#e0dddd] px-2 py-2 flex justify-start items-center gap-2 
              ${pathname === '/projects' ? 'bg-[#ffffff26]' : ''} rounded-[4px]`}>
                <span className='text-xl'><BsFolder /></span>
                <span className='font-medium'>Projects</span>
              </Link>
            </li>
            <li>
              <Link to='templates' className={`text-[#e0dddd] px-2 py-2 flex justify-start items-center gap-2 
              ${pathname === '/templates' ? 'bg-[#ffffff26]' : ''} rounded-[4px]`}>
                <span className='text-xl'><BsGrid1X2 /></span>
                <span className='font-medium'>Templetes</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className='ml-[300px] w-[calc(100%-300px)]'>
          <div className='py-4 pr-4'>
            <Outlet />
          </div>
        </div>
      </div>
    </div >
  )
}
