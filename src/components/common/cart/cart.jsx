import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { updateCartItemQuantity, removeFromCart } from '../../../store/reducers/cartReducer';

const Cart = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleQuantityChange = (id, change) => {
    dispatch(updateCartItemQuantity({ id, quantity: change }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 350, p: 2 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6">Shopping Cart</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {cartItems.map((item) => (
            <ListItem key={item.id} divider sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
              <Box display="flex" alignItems="center" width="100%" mb={1}>
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  style={{ width: 50, height: 50, marginRight: 10, objectFit: 'cover' }} 
                />
                <ListItemText
                  primary={
                    <Typography noWrap style={{ maxWidth: '150px' }}>
                      {item.title}
                    </Typography>
                  }
                  secondary={`$${item.price.toFixed(2)}`}
                />
              </Box>
              <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                <Box>
                  <IconButton size="small" onClick={() => handleQuantityChange(item.id, item.quantity - 1)} disabled={item.quantity === 1}>
                    <RemoveIcon />
                  </IconButton>
                  <Typography component="span" mx={1}>
                    {item.quantity}
                  </Typography>
                  <IconButton size="small" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                    <AddIcon />
                  </IconButton>
                </Box>
                <IconButton edge="end" onClick={() => handleRemoveItem(item.id)}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </ListItem>
          ))}
        </List>
        <Box mt={2}>
          <Typography variant="h6">Subtotal: ${subtotal.toFixed(2)}</Typography>
        </Box>
        <Box mt={2}>
          <Button fullWidth variant="contained" sx={{ backgroundColor: '#1976d2', color: 'white', mb: 1 }}>
            View Cart
          </Button>
          <Button fullWidth variant="contained" sx={{ backgroundColor: '#9c27b0', color: 'white' }}>
            Checkout
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Cart;