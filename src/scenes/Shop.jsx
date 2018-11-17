import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ProductsList from '../components/ProductsList';
import ProductLoader from '../components/ProductLoader';

import {productActions} from '../state/actions/product.actions';
import {categoryActions} from '../state/actions/category.actions';

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };

  }

  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchCategories();
  }

  render() {
    const {product, category} = this.props;
    return product.data.length
      ? (
        <section>
          {category.data.map(cat =>
            <ProductsList productsItems={product.data.filter(p => p.category === cat.name)}
                          productsCategory={cat.name}
                          key={cat.id}/>)}
        </section>
      )
      :  (<ProductLoader /> )
  }
}

Shop.propTypes = {
  product: PropTypes.object,
  category: PropTypes.object
};

const mapStateToProps = (state) => ({
  product: state.product,
  category: state.category
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (params) => dispatch(productActions.fetchProducts(params)),
  fetchCategories: (params) => dispatch(categoryActions.fetchCategories(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);