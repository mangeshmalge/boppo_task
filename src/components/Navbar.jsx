import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    const [cartItem, setcartItem] = useState([])
    const handleCartData=()=>{
        const data=JSON.parse(localStorage.getItem("cartItem"))
        setcartItem(data)
      }
      useEffect(() => {
          handleCartData()
      },[])
  return (
    <div>
         <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <div className="container">
                        <Link className="navbar-brand" to="/">Boppo</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarID">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarID">
                            <ul className="navbar-nav ms-auto">
                                <Link className="nav-link" to="/cart">
                                    <button className="btn btn-light btn-sm">
                                        Cart
                                        <div className="badge text-dark">
                                            {/* {
                                               cartItem.reduce((acc,item)=> acc + 
                                               (item.Qty),0)
                                            } */}
                                        </div>
                                    </button>
                                </Link>
                                {/* <Link className="nav-link" to="/reg">
                                    <button className="btn btn-success btn-sm">Register</button>
                                </Link>
                                <Link className='nav-link' to="/login">
                                     Login    
                                </Link>        */}
                                
                            </ul>
                            
                        </div>
                    </div>
                </nav>
    </div>
  )
}
