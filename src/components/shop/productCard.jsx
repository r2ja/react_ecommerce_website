import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  styled,
  Modal,
} from "@mui/material";
import ProductModal from './productModal'; // We'll create this component next

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  '& .MuiCardMedia-root': {
    backgroundColor: theme.palette.grey[200],
    height: 200,
    objectFit: 'contain',
  },
}));

const QuickViewOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',
  '&:hover': {
    opacity: 1,
  },
}));

const ProductCard = ({ product }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <StyledCard onClick={handleOpenModal}>
        <CardMedia
          component="img"
          image={product.thumbnail}
          alt={product.title}
          loading="lazy"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            {product.category}
          </Typography>
          <Typography variant="h6" component="div" gutterBottom>
            {product.title}
          </Typography>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" color="primary">
              ${product.price.toFixed(2)}
            </Typography>
          </Box>
        </CardContent>
        <QuickViewOverlay>
          <Typography variant="h6" color="white">
            Quick View
          </Typography>
        </QuickViewOverlay>
      </StyledCard>
      <ProductModal
        open={modalOpen}
        handleClose={handleCloseModal}
        product={product}
      />
    </>
  );
};

export default ProductCard;