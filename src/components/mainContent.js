import React from "react";
import ProductList from "../data/product_data"

const MainContent = () => {

    const listItems = ProductList.map((product) => {
        return (
            <div className="card" key={product.id}>
                <div className="card__img">
                    <img src={product.thumb} alt="product"/>
                </div>
                <div className="card__header">
                    <h2>{product.product_name}</h2>
                    <p>{product.description}</p>
                    <p className="price">{product.price}<span>{product.currency}</span></p>
                    <div className="btn">Add to cart</div>
                </div>
            </div>
            )
    })
    return (
        <div className="main_content">
            <h3>Headphones</h3>
            {listItems}
        </div>
    )
} 
export default MainContent
