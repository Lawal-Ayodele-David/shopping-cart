import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';


  
    function MenuItems(props) {
        const { menuItems, addToCart } = props;
      
        const handleAddToCart = (item) => {
          addToCart(item);
        };
      
        return (
          <div>
            <h2>Menu Items</h2>
            <ul>
              {menuItems.map((item) => (
                <li key={item.id}>
                  {item.name} - ${item.price}{' '}
                  <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                </li>
              ))}
            </ul>
          </div>
        );
      }
      
      const mapStateToProps = (state) => {
        return {
          menuItems: state.menuItems,
        };
      };
      
      export default connect(mapStateToProps, { addToCart })(MenuItems);
      
  