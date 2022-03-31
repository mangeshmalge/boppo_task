import {ALL_PRODUCTS_REQUEST,ALL_PRODUCTS_SUCCESS,ALL_PRODUCTS_FAIL} from "../constants/productConstants"
export const productReducer=(state={reduxProduct:[]},{type,payload})=>{
    switch (type) {
        case ALL_PRODUCTS_REQUEST:
            return {reduxProduct:[],isloading:true}
        case ALL_PRODUCTS_SUCCESS:
            return {reduxProduct:payload,isloading:false}
        case ALL_PRODUCTS_FAIL:
            return {reduxProduct:payload,isloading:false}
    
        default: return state
    }
}