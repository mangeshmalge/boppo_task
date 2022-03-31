import React, { useEffect, useState } from 'react'

export default function CheckOut() {
  const [checkOut, setcheckOut] = useState([])
  const [toggle, settoggle] = useState(false)
  const handleRemoveItem=(id)=>{
    console.log(checkOut);
   let dd= checkOut.filter(ite=> ite.id != id)
  //  console.log(dd);
    localStorage.setItem("cartItem",JSON.stringify(dd))
    settoggle(prev=>!prev)
  }

  useEffect(() => {
    const data=JSON.parse(localStorage.getItem("cartItem"))
    setcheckOut(data)  
  }, [toggle])
  
  return (
    
    <div className='container'>
      <h1>checkOut Page</h1>
      {/* <div className="row">
        <div className="col-sm-12 ">
          {
          checkOut.map((item,i)=>(
            <div className='border d-flex justify-content-between'>
            <img src={item.image} alt="img" width="50px" /> 
            <h2>price:{item.price}</h2>
            <h2>Qty:{item.Qty}</h2>
            <h2>Total Price:{item.Qty * item.price}</h2>
            <button className='btn btn-sm btn-danger' onClick={()=>handleRemoveItem(item.id)}>Remove</button>
          </div>
          ))
          }
        </div>
      </div> */}
      {/* //new */}
      <div className="row mt-1">
                    <div className="col-sm-12">
                      {checkOut.length !==0
                        ?<table className='table table-bordered tabel-striped'>
                        <thead className='table-dark'>
                        <tr>
                              <th>Sr.No.</th>
                              <th>Image</th>
                              <th>Product Name</th>
                              <th>Qty</th>
                              <th>Total Price</th>
                              <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                      {
                        checkOut.map((item,i)=>
                        <tr key={i}>
                        <td>{i+1}</td>
                        <td><img src={item.image} alt="" height="50" /></td>
                        <td>{item.title}</td>
                        <td>{item.Qty}</td>
                        <td>{item.Qty * item.price}</td>
                        <td><button className='btn btn-danger'onClick={()=>handleRemoveItem(item.id)}>Remove</button></td>
                      </tr> 
                        )
                      }                                   
                           
                          </tbody>
                          <tr>
                         <td className='d-flex justify-content-between'><strong>Total Amount</strong> : {checkOut.reduce((pre, curr) => (pre + curr.Qty * curr.price),0)}</td>
                         </tr>
                      </table>
                      
                    :<h4 className='text-center alert alert-danger'>No Item in Cart !!!</h4>}
                    
                    </div>
        </div>
        {/* // */}
    </div>
  )
}
