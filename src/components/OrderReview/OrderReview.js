import React from 'react';
import { useHistory } from 'react-router-dom';
import useProducts from '../../hooks/loadProducts';
import useCart from '../../hooks/useCart';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();
    
    const handleOnRemove = key => {
        const newItems = cart.filter(product => product.key !== key);
        setCart(newItems);
        deleteFromDb(key);
    };

    const handleOrderNow = () => {
      history.push('/placeorder');
      clearTheCart();
    }
    return (
      <div className="shop-container">
        <div className="product-container">
          {cart.map((product) => (
            <ReviewItem
              key={product.key}
              product={product}
              handleOnRemove={handleOnRemove}
            ></ReviewItem>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
              <button onClick={handleOrderNow} className="btn-regular">Order Now</button>
          </Cart>
        </div>
      </div>
    );
};

export default OrderReview;