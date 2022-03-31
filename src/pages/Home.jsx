import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsAction } from '../action/productActions'
import ProductCart from '../components/ProductCart'

export default function Home({history}) {
    const dispatch =useDispatch()
    const {reduxProduct,isloading} =useSelector(state=> state.products)
useEffect(() => {
  dispatch(getAllProductsAction())
}, [])
const handleAddToCart=(id)=>{
  const url=`/product/${id}`
  history.push(url)
}
  return (
    <div className='container'>
        <div className="row">
            {
            isloading ? <div className="spinner spinner-border"></div>
               : reduxProduct?.map((item,i)=>(
                <div key={i} className="col-md-4" style={{cursor:"pointer"}} onClick={()=>handleAddToCart(item.id)}>
                    <ProductCart product={item}/>
                </div>
                ))
            }
        </div>
        
    </div>
  )
}
