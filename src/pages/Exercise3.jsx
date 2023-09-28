import React from 'react'
import Shop from '../components/Shop/Shop'
import "../components/Shop/Shop.css"
import { useSelector } from 'react-redux'

const Exercise3 = () => {

  const allProduct = useSelector((state) => state.cart)
  console.log(allProduct)
  return (
    <div className='shop'>
      <div style={{background: "black"}}>
        <h4>Shopping cart</h4>
        <p>cart {}</p>
      </div>
      <div className='shopTitle'>
        <h4>Oluwafemi Shop</h4>
      </div>
      <div className='products'>
        {allProduct.map((product) => {
          return <Shop key={product.id} data={product} />
        })}
      </div>
    </div>
  )
}

export default Exercise3