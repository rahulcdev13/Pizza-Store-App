import React from 'react'
import { Button } from 'react-bootstrap'
import "./Pizza.css"
import Products from './Products'

const Pizza = () => {
  return (
    <>
      <div className='hero py-16'>
        <div className='container mx-auto flex items-center justify-between'>
          <div className='w-1/2'>
            <h6 className='text-lg'><em>Are you Hungry..?</em></h6>
            <h1 className='text-3xl md:text-6xl font-bold'>Don't Wait !</h1>
            <Button className='order_btn px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yello-600' variant='warning'>Order Now</Button>
          </div> 
          <div className='w-1/2'>
            <img className="w-3/4"  src="./images/pizza5.png" alt="homeimage" />
          </div> 
        </div>
      </div>
      <Products />
    </>
  )
}

export default Pizza
