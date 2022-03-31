import React, { useState } from 'react'
import { useSelector } from 'react-redux';

export default function Product({history,match}) {
  const [Qty, setQty] = useState(1)
  const {reduxProduct,isloading} =useSelector(state=> state.products)
  const item=reduxProduct.find((data)=>data.id==match.params.id)
  console.log(match.params.id);
  console.log(item);
  const addToCart=()=>{
    const cartArr=[]
    const singleProduct=(reduxProduct.find((data)=>data.id==match.params.id))
    const singleData=({...singleProduct,Qty})
    cartArr.push(singleData)
    if (localStorage.getItem("cartItem")===null){
      localStorage.setItem("cartItem", JSON.stringify(cartArr))
    }else{
      const data=JSON.parse(localStorage.getItem("cartItem"))
      data.push(singleData)
      localStorage.setItem("cartItem", JSON.stringify(data))
    } 
    // const url=`/cart/${match.params.id}?:${Qty}`
    history.push("/cart")
  }
  return (
    <div className='container'>
      <h1>product</h1>
       <div className="row">
          <div className="col-sm-6">
          <div className="card-body">
          <img src={item?.image} alt="" className="img-fluid" width="200px" height="200px" />
        <ul className="list-group">
            <li className="list-group-item"><h4>Title : {item?.title}</h4></li>
            <li className="list-group-item"><strong>Price : </strong>{item?.price}</li>
            
        </ul>
          </div>
          </div>  
          <div className="col-sm-6">
          Quantity: {Qty}
                      <br />
                      <button className='btn btn-dark' disabled={Qty === 1 ? true : false} onClick={(e)=>
                        setQty((prev)=>(prev == 1 ? 1 : prev-1))
                      }>-</button>
                      <strong>&nbsp;&nbsp;{Qty} &nbsp;&nbsp;</strong>
                      <button className='btn btn-dark'
                      onClick={()=>
                      setQty((prev)=>prev+1)
                    }>+</button><br /><br />
                    <div className='btn btn-dark'  onClick={addToCart}>Add to cart</div>
          </div>  
       </div>  
          
    </div>
      
      
  
  )
}
