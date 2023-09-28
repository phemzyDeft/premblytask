import React from 'react'
import Shop from '../components/Shop/Shop'
import "../components/Shop/Shop.css"
import { allData } from '../..'
const Exercise3 = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h4>Oluwafemi Shop</h4>
      </div>
      <div className='products'>
        {allData.map((product) => {
          return <Shop key={product.id} data={product} />
        })}
      </div>
    </div>
  )
}

export default Exercise3