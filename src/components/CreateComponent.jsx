import React from 'react'

export default function CreateComponent({ info, current_component, remove_component }) {

  const randValue = Math.floor(Math.random() * 100)
  let html = ''
  if (info.name === 'main_frame') {
    html = <div className='shadow-md'
      style={{
        width: info.width + 'px',
        height: info.height + 'px',
        background: info.color,
        zIndex: info.z_index
      }}
    >
      {
        info.image && <img src={info.image} className='w-full h-full' alt='image' />
      }
    </div>
  }
  return html
}
