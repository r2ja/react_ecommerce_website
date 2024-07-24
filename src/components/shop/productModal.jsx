import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  TextField,
  styled,
} from "@mui/material";

import { useDispatch } from "react-redux";
import { addToCart } from "../../store/reducers/cartReducer";

const ModalContent = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[24],
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

const ProductModal = ({ open, handleClose, product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
    if (newQuantity > product.stock) {
      setError(`Only ${product.stock} items available`);
    } else {
      setError("");
    }
  };

  const handleAddToCart = () => {
    if (quantity <= product.stock) {
      dispatch(
        addToCart({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: quantity,
          thumbnail: product.thumbnail || product.images[0]
        })
      );
      handleClose();
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <ModalContent>
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{ width: "100%", height: 200, objectFit: "contain" }}
        />
        <Typography variant="h6">{product.title}</Typography>
        <Typography variant="body1">{product.description}</Typography>
        <Typography variant="h6" color="primary">
          ${product.price.toFixed(2)}
        </Typography>
        <Box display="flex" alignItems="center" gap={2}>
          <TextField
            type="number"
            label="Quantity"
            value={quantity}
            onChange={handleQuantityChange}
            inputProps={{ min: 1, max: product.stock }}
          />
          <Button
            variant="contained"
            onClick={handleAddToCart}
            disabled={quantity > product.stock}
          >
            Add to Cart
          </Button>
        </Box>
        {error && <Typography color="error">{error}</Typography>}
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
