import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Product from './ProductsListItem';

import '../styles/ProductsList.css'

class ProductsList extends Component {
    render() {
        let {productsItems, productsCategory} = this.props;
        return (
            <div className="products-list">
                <div className="category-title">
                    <h2>{productsCategory}</h2>
                </div>
                <div className="products">
                    {productsItems.map(p =>
                        <div key={p.id} className="product">
                            <Product id={p.id} name={p.name} price={p.price} image={p.image}/>
                        </div>)}
                </div>
            </div>
        );
    }
}

ProductsList.propTypes = {
  productsItems: PropTypes.arrayOf(PropTypes.object),
  productsCategory: PropTypes.string
};

export default ProductsList;
