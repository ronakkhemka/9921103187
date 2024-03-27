import React from 'react';
import ProductList from './ProductList';

const AllProductsPage = () => {
    return (
        <div>
            <h1>All Products Page</h1>
            <ProductList companyName="AMZ" categoryName="Laptop" top={10} minPrice={1} maxPrice={10000} />
        </div>
    );
};

export default AllProductsPage;
