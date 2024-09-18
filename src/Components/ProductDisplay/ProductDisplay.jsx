import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(32)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
                ${product.old_price}
            </div>
            <div className="productdisplay-rigth-price-new">
            ${product.new_price}
            </div>
        </div>
        <div className="productdisplay-right-description">
        Embrace the Mamba Mentality in these 15cm (approx.) basketball shorts. Much like Kobe on the court, they bring 2-way value to your wardrobe with their reversible design and sweat-wicking fabric. On one side, they offer soft knit fabric with a snakeskin print. On the reverse side, they have breathable mesh with a Kobe sheath logo.
        </div>
        <div className="productdisplay-right-size">
            <h1>Select size</h1>
            <div className="productdisplay-right-sizes">
                <div className="">S</div>
                <div className="">M</div>
                <div className="">L</div>
                <div className="">XL</div>
                <div className="">XXL</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category:</span> Women,T-Shirt, Crop Top</p>
        <p className='productdisplay-right-category'><span>Tag:</span> Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
