import MainHeader from '../components/MainHeader'
import { FaFolder, FaShapes, FaUpload } from 'react-icons/fa'
import { BsGrid1X2 } from 'react-icons/bs'
import { CiText } from 'react-icons/ci'
import { BsFileEarmarkImageFill } from 'react-icons/bs'
import { PiSelectionBackground } from 'react-icons/pi'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { useState } from 'react'

function Main() {
  const [state, setState] = useState('')
  const [show, setShow] = useState({
    status: true,
    name: ''
  })

  const setElements = (type, name) => {
    setState(type)
    setShow({
      status: false,
      name
    })
  }
  return (
    <div className='min-w-screen h-screen bg-black'>
      <MainHeader />
      <div className='flex h-[calc(100%-60px)] w-screen'>
        <div className='w-[80px] bg-[#181918] z-50 h-full text-gray-400 overscroll-y-auto'>
          <div
            className={`${show.name === 'design' ? 'bg-[#252627]' : ''}w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1
          hover:text-gray-300`}
            onClick={() => setElements('design', 'design')}
          >
            <span className='text-2xl'><BsGrid1X2 /></span>
            <span className='text-xs font-medium'>Thiết kế</span>
          </div>
          <div
            className={`w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1
          hover:text-gray-300`}
            onClick={() => setElements('shape', 'shape')}>
            <span className='text-2xl'><FaShapes /></span>
            <span className='text-xs font-medium'>Hình dạng</span>
          </div>
          <div
            className={`w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1
          hover:text-gray-300`}
            onClick={() => setElements('image', 'uploadImage')}>
            <span className='text-2xl'><FaUpload /></span>
            <span className='text-xs font-medium'>Tải ảnh</span>
          </div>
          <div
            className={`w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1
          hover:text-gray-300`}
            onClick={() => setElements('text', 'text')}>
            <span className='text-2xl'><CiText /></span>
            <span className='text-xs font-medium'>Chèn chữ</span>
          </div>
          <div
            className={`w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1
          hover:text-gray-300`}
            onClick={() => setElements('project', 'project')}>
            <span className='text-2xl'><FaFolder /></span>
            <span className='text-xs font-medium'>Dự án</span>
          </div>
          <div
            className={`w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1
          hover:text-gray-300`}
            onClick={() => setElements('image', 'image')}>
            <span className='text-2xl'><BsFileEarmarkImageFill /></span>
            <span className='text-xs font-medium'>Hình ảnh</span>
          </div>
          <div
            className={`w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1
          hover:text-gray-300`}
            onClick={() => setElements('backgound', 'backgound')}>
            <span className='text-2xl'><PiSelectionBackground /></span>
            <span className='text-xs font-medium'>Hình nền</span>
          </div>
        </div>
        <div className='h-full w-[calc(100%-75px)]'>
          <div className={`${show.status ? 'p-0 -left-[350px]' : 'px-8 left-[75px] py-5'} bg-[#252627]
        h-full fixed transition-all w-[350px] z-30 duration-700`}>
            <div
              className='flex absolute justify-center items-center bg-[#252627] w-[20px] -right-2
            text-slate-300 top-[40%] cursor-pointer h-[100px] rounded-full'
              onClick={() => setShow({ name: '', status: true })}
            >
              <MdKeyboardArrowLeft />
            </div>
            <div>fair</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
