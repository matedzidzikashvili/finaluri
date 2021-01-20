import React from 'react'
import Header from '../header/navigationBar';
import {Product} from '../home/home';

const ProductSources = [
    'assets/huawei.jpg',
    'assets/iphone.jpg',
    'assets/legion.jpg',
    'assets/phone.jpg',
    'assets/s20+.jpg',
    'assets/shark.jpg',
]

function Products() {
    return <div>
        <Header />
        <Product source={ProductSources[0]} productType='Newest Product'/>
        <Product source={ProductSources[1]} productType='Newest Product'/>
        <Product source={ProductSources[2]} productType='Newest Product'/>
        <Product source={ProductSources[3]} productType='Newest Product'/>
        <Product source={ProductSources[4]} productType='Newest Product'/>
        <Product source={ProductSources[5]} productType='Newest Product'/>
    </div>
}

export default Products;
