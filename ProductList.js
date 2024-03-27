import React, { useEffect, useState } from 'react';
import styles from './ProductList.module.css'; // Import CSS module
import { getTopProducts } from './api';

const ProductList = ({ companyName, categoryName, top, minPrice, maxPrice }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getTopProducts(companyName, categoryName, top, minPrice, maxPrice);
                setProducts(response);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, [companyName, categoryName, top, minPrice, maxPrice]);

    return (
        <div className={styles.container}> {/* Use CSS module class */}
            <h2>Top Products</h2>
            <ul>
                {products.map(product => (
                    <li className={styles.product} key={product.productName}> {/* Use CSS module class */}
                        <p>Name: {product.productName}</p>
                        <p>Price: {product.price}</p>
                        <p>Rating: {product.rating}</p>
                        <p>Discount: {product.discount}</p>
                        <p>Availability: {product.availability}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
