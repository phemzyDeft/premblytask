import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Checkout.css"
import {removeFromCart} from "../../redux/CartSlice"

const Checkout = () => {
  const cartItem = useSelector(state => state.cart.cart)
  
  const dispatch = useDispatch()

  return (
    <div>
      <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
        <div className=''>
          {cartItem.map((item) => (
            <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
              <div>
              <img src={item.image} width={100} style={{ marginRight: "5rem" }} />
              <p >{item.username}</p>

              </div>
              <div style={{marginRight: "5rem"}}>
                <button className='btn btn-primary' onClick={()=>dispatch(removeFromCart({id: item.id}))}>remove</button>

              </div>
            </div>
            
          ))}
      </div>
      {/* {totalAmount > 0 ?
        <div className='checkout'>
          <p>Subtotal: $ {totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Check Out</button>
        </div>
        : <h1>You have an Empty Cart</h1>} */}

    </div>
    </div>
  )
}

export default Checkout