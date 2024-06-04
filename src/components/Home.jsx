import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Product from './Product'
import { getProductApi } from '../apis/productApi'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  const [show, setShow] = useState(false)
  const [listData, setListData] = useState([])
  const [size, setSize] = useState({
    width: null,
    height: null
  })
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProductApi()
        setListData(products.listData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts()
  }, [])

  const handleChangeSize = (e) => {
    setSize({
      ...size,
      [e.target.name]: e.target.value
    })
  }

  const handleCreate = () => {
    navigate('/design/create', {
      state: {
        width: size.width,
        height: size.height,
        type: 'create'
      }
    })
  }

  return (
    <div className='pt-5'>
      <div className='w-full flex justify-center items-center h-[250px]
      bg-gradient-to-r from-[#4c76cf] to-[#552ab8] relative rounded-md overflow-hidden'>
        <button
          className='px-4 py-2 text-[15px] overflow-hidden text-center
        bg-[#8b3dffad] text-white rounded-[3px] font-medium hover:bg-[#8b3dffd3]
        absolute top-3 right-3'
          onClick={() => setShow(!show)}
        >
          Custom Size
        </button>
        <div className={`absolute top-16 right-3 gap-3 bg-[#252627] w-[250px] p-4
        text-white ${show ? 'visible opacity-100' : 'invisible opacity-30'}
        transition-all duration-500`}>
          <div className='grid grid-cols-2 pb-4 gap-3'>
            <div className='flex gap-2 justify-center items-center flex-col'>
              <label htmlFor='width'>Width</label>
              <input type="number" id='width' name='width' className='w-full outline-none px-2 py-[4px] bg-[#1b1a1a]
              border border-[#404040] rounded-md' onChange={handleChangeSize} value={size.width} />
            </div>
            <div className='flex gap-2 justify-center items-center flex-col'>
              <label htmlFor='height'>Height</label>
              <input type="number" id='height' name='height' className='w-full outline-none px-2 py-[4px] bg-[#1b1a1a]
              border border-[#404040] rounded-md' onChange={handleChangeSize} value={size.height} />
            </div>
          </div>
          <button
            className='px-4 py-2 text-[13px] overflow-hidden text-center
        bg-[#8b3dffad] text-white rounded-[3px] font-medium hover:bg-[#8b3dffd3]
          w-full'
            onClick={handleCreate}
          >
            Create new design
          </button>
        </div>
        <div>
          <h2 className='text-3xl pb-10 pt-6 text-white font-semibold'>What wil you design to day?</h2>
        </div>
      </div>
      <div>
        <h2 className='text-xl py-6 text-white font-semibold'>Có thể bạn muốn thử...</h2>
        <div>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            transitionDuration={500}
          >
            {
              listData.map((product) => (
                <Product key={product.id} props={product} />
              ))
            }
          </Carousel>
        </div>
      </div>
      <div>
        <h2 className='text-xl py-6 text-white font-semibold'>Thiết kế gần đây</h2>
        <div>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            transitionDuration={500}
          >
            <div className='text-white'>Item 1</div>
            <div className='text-white'>Item 2</div>
            <div className='text-white'>Item 3</div>
            <div className='text-white'>Item 4</div>
          </Carousel>
        </div>
      </div>

    </div>
  )
}
