import { CartItemType } from '../../pages';
import CartItem from '../cartItem/CartItem';
import { Wrapper } from './Cart.Styles';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      {cartItems.length === 0 ? <p>Seu carrinho está vazio</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          removeFromCart={removeFromCart}
          addToCart={addToCart}
        />
      ))}
    </Wrapper>
  );
};

export default Cart;
