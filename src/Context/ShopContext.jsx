import React,{createContext, useContext} from 'react'
import all_product from '../Components/Assets/all_product'

export const ShopContext=createContext(null);

const ShopContextProvider=()=>{
    const all_product_value=all_product;
    return (
        <ShopContext.Provider value={all_product_value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContext;