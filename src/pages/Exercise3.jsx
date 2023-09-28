import React from 'react'
import Shop from '../components/Shop/Shop'
import "../components/Shop/Shop.css"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import  Mockdata from "../mockdata.json"


const Exercise3 = () => {

  const allProduct = useSelector((state) => state.cart.cart)
  console.log(allProduct)

  return (
    <div className='shop'>
      <div style={{background: "black", display: "flex", justifyContent: "space-between", padding: "1rem 2rem"}}>
        <h4 className='text-white'>Shopping cart</h4>
        <Link to="/checkout">
        <p style={{ color: "white" }}>cart {allProduct.length}</p>
        </Link>
      </div>
      <div className='shopTitle'>
        <h4>Oluwafemi Shop</h4>
      </div>
      <div className='products'>
        {Mockdata.map((product) => {
          return <Shop key={product.id} data={product} />
        })}
      </div>
    </div>
  )
}

export default Exercise3