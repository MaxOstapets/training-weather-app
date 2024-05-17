import styles from './Product.module.css'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Product = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch(`https://dummyjson.com/product/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    };

    console.log(product);
    console.log(productId);

    return (
        <>
            {product && (
                <div className={styles.product}>
                    <img src={product.images[0]} className={styles.image} alt={product.title} />
                    <div className={styles.info}>
                        <ul className={styles.list}>
                            <li className={styles.title}>{product.title}</li>
                            <li className={styles.price}>Price: {product.price} $</li>
                            <li className={styles.brand}>Brand: {product.brand}</li>
                            <li className={styles.discountPercentage}>Discount: {product.discountPercentage}</li>
                            <li className={styles.rating}>Rating: {product.rating}</li>
                            <li className={styles.category}>Category: {product.category}</li>
                            <li className={styles.category}>Description: {product.description}</li>
                        </ul>
                        <button className={styles.addToCart}>ADD TO CART</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Product;