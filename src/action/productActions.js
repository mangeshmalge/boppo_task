import {ALL_PRODUCTS_REQUEST,ALL_PRODUCTS_SUCCESS,ALL_PRODUCTS_FAIL} from "../constants/productConstants"
import axios from "axios"
export const getAllProductsAction=()=> async(dispatch)=>{
    try {
        dispatch({type:ALL_PRODUCTS_REQUEST})

        const {data} = await axios.get("https://fakestoreapi.com/products")
            console.log(data);
        dispatch({type:ALL_PRODUCTS_SUCCESS, payload:data}) 
        
    } catch (error) {
        dispatch({type:ALL_PRODUCTS_FAIL, payload:error})
    }
}
