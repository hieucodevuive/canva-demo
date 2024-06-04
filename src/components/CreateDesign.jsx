/* eslint-disable react-hooks/rules-of-hooks */
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import CreateComponent from './CreateComponent'

export default function createDesign() {
  const { state } = useLocation()
  const ref = useRef()
  const obj = {
    name: 'main_frame',
    type: 'react',
    id: Math.floor((Math.random() * 100) + 1),
    height: state.height,
    width: state.width,
    z_index: 1,
    color: 'green',
    image: ''
  }
  return (
    <div className='w-screeb h-screen flex justify-center items-center'>
      <div ref={ref} className='relative w-auto h-auto overflow-auto'>
        <CreateComponent info={obj} current_component={{}} />
      </div>
    </div>
  )
}
