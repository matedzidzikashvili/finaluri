import React from 'react';
import Header from '../header/navigationBar';
import {Component} from 'react';

const Style = {
    border: '4px solid #000',
}

const images = [
    'assets/bag.jpg',
    'assets/head.jpg',
    'assets/headphones.jpg'
]

const imageTytpe = [
    'BAG',
    'HEADPHONES',
]

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rate: 0
        }
    }
    
    render() {
        return (
            <div style={Style} className='element'>
                <h2>{this.props.productType}</h2>
                <img  src={this.props.source}/>
                <br/>
                <button onClick={() => this.setState({rate: this.state.rate - 1})}>-</button>
                <h3>Rate Product: {this.state.rate}</h3>
                <button onClick={() => this.setState({rate: this.state.rate + 1})}>+</button>
            </div>
        )
    }
}

const Home = () => {
    return <div>
        <Header />
        <Product source={images[0]} productType={imageTytpe[0]}/>
        <Product source={images[1]} productType={imageTytpe[1]}/>
        <Product source={images[2]} productType={imageTytpe[1]}/>
    </div>
}

export {Product};
export default Home;
