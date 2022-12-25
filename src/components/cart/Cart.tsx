import { CartItemType } from '../../pages';
import CartItem from '../cartItem/CartItem';
import { Wrapper } from './Cart.Styles';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  return (
    <Wrapper>
      {cartItems.length === 0 ? <p>Seu carrinho está vazio</p> : null}
      <h3>Total: R${calculateTotal(cartItems).toFixed(2)}</h3>

      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </Wrapper>
  );
};

export default Cart;
