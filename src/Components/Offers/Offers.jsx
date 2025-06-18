import React from 'react'
import './Offers.css'
import exclu_webp from '../../assets/exclu.webp'
const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclu_webp} alt="" />
      </div>
    </div>
  )
} 

export default Offers
