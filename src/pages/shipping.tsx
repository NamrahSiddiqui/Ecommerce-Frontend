import React, { ChangeEvent, ChangeEventHandler, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const Shipping = () => {
    const [shippingInfo, setShippingInfo]=useState({address"", city:"", state:"", country:"", pinCode:""})
  const navigate=useNavigate();

  const changeHandler=(e:ChangeEvent<HTMLInputElement | HTMLSelectElement> )=>{
       setShippingInfo((prev:any)=>({
           ...prev,
           [e.target.name]:e.target.value
       }))
  }
  
    return (
    <div className="shipping">
    <button className='back-btn'
    onClick={()=>navigate("/cart")}>
    <BiArrowBack/>
    </button>
    <form>
     <h1>
    Shipping Address
    </h1>
    <input type="text" placeholder='Address' name="address" value={shippingInfo.address} onChange={changeHandler}></input>
    <input type="text" placeholder='City' name="city" value={shippingInfo.city} onChange={changeHandler}></input> 
    <input type="text" placeholder='State' name="address" value={shippingInfo.state} onChange={changeHandler}></input>
    <select name="country" required value={shippingInfo.country} onChange={changeHandler}>
    <option value="">Choose Country</option>
    <option value="pakistan">Pakistan</option>
    </select>
    <input type="number" placeholder='Pin Code' name="pinCode" value={shippingInfo.pinCode} onChange={changeHandler}></input>
    <button type="submit">Pay Now</button>
    </form>
    </div>
  )
}

export default Shipping
