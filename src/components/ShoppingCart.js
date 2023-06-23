import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';

function ShoppingCart(props) {
    const { cartItems, removeFromCart } = props;
  
    const handleRemoveFromCart = (itemId) => {
      removeFromCart(itemId);
    };
  
    return (
      <div>
        <h2>Shopping Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}{' '}
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  const mapStateToProps = (state) => {
    return {
      cartItems: state.cartItems,
    };
  };
  
  export default connect(mapStateToProps, { removeFromCart })(ShoppingCart);
  