import styles from './Shop.module.css'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Shop = () => {
    const [ products, setProducts ] = useState()
    const [ product, setProduct ] = useState()
    
    useEffect(()=>{
        fetchData()
    }, [])
    const fetchData = () => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(res=>setProducts(res.products));
    }

    console.log(product);
    console.log(products);

    return(
        <>
            <h1>Products: </h1>
            <div className={styles.products}>
                {products && products.map(product => 
                <div className={styles.card}>
                    <img className = {styles.image} src={product.images[0]}/>
                    <ul className={styles.about}>
                        <NavLink to={`/product/${product.id}`}>
                            <li className={styles.title}>{product.title}</li>
                            <li className={styles.price}>{product.price} $</li>
                        </NavLink>
                    </ul>
                    <button className={styles.buy}>Buy</button>
                </div>
                )}
            </div>
        </>
    )
}

export default Shop;