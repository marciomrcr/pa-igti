import Button from '@mui/material/Button';
import { CartItemType } from '../../pages';
import { Wrapper } from './CartItem.Styles';

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <Wrapper>
    <div>
      <h4>{item.title}</h4>
      <div className='information'>
        <h4>Preço: R${item.price}</h4>
        <h4>Total: R${(item.amount * item.price).toFixed(2)}</h4>
      </div>
      <div className='buttons'>
        <Button
          size='small'
          disableElevation
          variant='contained'
          onClick={() => removeFromCart(item.id)}
        >
          -
        </Button>
        <p>{item.amount}</p>
        <Button
          size='small'
          disableElevation
          variant='contained'
          onClick={() => addToCart(item)}
        >
          +
        </Button>
      </div>
    </div>
    <img src={item.image} alt={item.title} />
  </Wrapper>
);
export default CartItem;
