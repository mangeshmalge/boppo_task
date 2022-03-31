import React, { useState } from 'react'

export default function ProductCart({product}) {
  const [Qty, setQty] = useState(1)
  const addToCart=()=>{

  }

  return (
      
    <div className='border mt-4'>
        <img src={product.image} alt="" className="img-fluid" width="200px" height="200px"  />
        <ul className="list-group">
            <li className="list-group-item"><h4>Title : {product.title}</h4></li>
            <li className="list-group-item"><strong>Price : </strong>{product.price}</li>
            <li className="list-group-item"><strong>Category : </strong>{product.category}</li>
            <li className="list-group-item"><strong>Description : </strong>{product.description}</li>
            <li className="list-group-item"><strong>Rating</strong> : {product.rating.rate}</li>
        </ul>
    </div>
  )
}
