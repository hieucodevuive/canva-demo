import { Link } from 'react-router-dom';

export default function MainHeader() {
  return (
    <div className='h-[60px] bg-gradient-to-r from-[#212122] via-[#27282b] to-[#2a2b2c] w-full'>
      <div className='flex justify-between px-10 items-center text-gray-300 h-full'>
        <Link>
          <img src='src/assets/logo.png' alt="" />
        </Link>
      </div>
    </div>
  )
}
