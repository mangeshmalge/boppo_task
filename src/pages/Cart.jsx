import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Cart({location,match}) {
  const [cartItem, setcartItem] = useState([])
  const [singleData, setsingleData] = useState({})
    const {reduxProduct,isloading} =useSelector(state=> state.products)
    console.log(location.search.split(":")[1]);
 
    const handleCartData=()=>{
      const data=JSON.parse(localStorage.getItem("cartItem"))
      setcartItem(data)
    }
    useEffect(() => {
      handleCartData()
    }, [])
    
    return (
      <div className='container'>
        <h1>Cart Items</h1>
        <div className="row">
          <div className="col-sm-8">
          {
        cartItem?.map((item,i)=>(<div className="card">
            <div className="card-body">
            <img src={item?.image} alt="" className="img-fluid" width="200px" height="200px" />
          <ul className="list-group">
              <li className="list-group-item"><h4>Quantity : {item?.Qty}</h4></li>
              <li className="list-group-item"><h4>Title : {item?.title}</h4></li>
              <li className="list-group-item"><strong>Price : </strong>{item?.price}</li>
          </ul>
            </div>
          </div>

        ))
        }
          </div>
          <div className="col-sm-4">
          <Link to="checkout"><button className='btn btn-outline-success w-100'>CheckOut</button></Link>
          </div>
        </div>
        
      </div>
    )
}
