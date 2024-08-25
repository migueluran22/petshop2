import React from 'react';
import './productCard.css'

function ProductCard({ image, title, price }) {
    return (
        <div className="product-card">
            <img src={image} alt={title} className="product-image" />
            <h3 className="product-title">{title}</h3>
            <p className="product-price">{price}</p>
            <button className="product-button">Añadir al carrito</button>
        </div>
    );
}

export default ProductCard;
