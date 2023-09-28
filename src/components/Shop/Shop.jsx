import React from 'react'
import { useDispatch } from 'react-redux';
import {addToCart} from "../../redux/CartSlice"

const Shop = ({ data }) => {
  const {id, age, username, fullname} = data;

  const dispatch = useDispatch()
  return (
<div className="product text-align-center">
      {/* <img src={images[0]} alt={title} style={{width: "70%", height: "50%", overflow:"hidden"}}/> */}
      <div className="description">
        <p><b>{username}</b></p>
        <p>$ {age}</p>
      </div>
      <button className='addToCartBttn' onClick={()=>dispatch(addToCart({username, fullname}))}>Add To Cart </button>
    </div>
  )
}

export default Shop