import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  styled,
} from "@mui/material";

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '& .MuiCardMedia-root': {
    backgroundColor: theme.palette.grey[200],
    height: 200,
    objectFit: 'contain',
  },
}));

const ProductCard = ({ product }) => {

  return (
    <StyledCard loading="lazy">
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

    </StyledCard>

  );
};

export default ProductCard;