import Button from '@mui/material/Button';
import React from 'react';
import { CartItemType } from '../../pages';
import { Wrapper } from './Item.styles';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h4>{item.title}</h4>
      <p>{item.description}</p>
      <h4>${item.price}</h4>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Adicionar ao Carrinho</Button>
  </Wrapper>
);
export default Item;
