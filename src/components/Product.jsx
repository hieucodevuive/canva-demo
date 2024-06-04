import React from 'react'

function Product({ props }) {
  const { name, image, sold, price, sale_price } = props
  return (
    <div className='p-3 m-2 flex flex-col gap-3 border border-slate-700'>
      <div className=''>
        <img className='object-contain h-[150px] w-96' src={image} alt="image" />
      </div>
      <h2 className='text-white text-xl text-nowrap overflow-hidden'>{name}</h2>
      <div className='text-white'>
        <span>Đã bán {sold}</span>
        <div className='flex gap-2'>
          <span className='text-[16px] text-red-500 font-semibold'>{sale_price}</span>
          <span className='text-xs decoration-dashed line-through opacity-50'>{price}</span>
        </div>
      </div>
    </div>
  )
}

export default Product
