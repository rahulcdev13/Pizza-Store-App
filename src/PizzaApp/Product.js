import React from 'react'
import { Button } from 'react-bootstrap'

const Product = () => {
  return (
    <>
         <div>
          <img src='./images/pizza2.png' alt="productImages" />
          <div className='text-center'>
            <h2 className='text-lg font-bold py-2'>Havana Special</h2>
            <span className='bg-gray-200 py-1 rounded-full text-sm px-4' >Small</span>
          </div>
          <div className='flex items-center justify-between mt-4'>
            <span className='font-bold'>$ 500</span>
            <Button className='order_btn py-1 px-4 rounded-full font-bold' variant='warning' >ADD</Button>
          </div>
        </div> 
    </>
  )
}

export default Product
