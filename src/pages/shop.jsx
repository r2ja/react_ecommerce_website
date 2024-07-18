import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/actions/productActions";
import {
  Box,
  Grid,
  Typography,
  Button,
  Container,
  styled,
} from "@mui/material";
import ProductCard from "../components/shop/productCard";
import FilterSidebar from "../components/shop/filterSidebar";
import Footer from "../components/common/footer/footer";
import { Profiler } from "react";

const FilterButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.grey[300],
  color: theme.palette.text.primary,
  "&:hover": {
    backgroundColor: theme.palette.grey[400],
  },
}));

const ShopPage = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  function handleRender(id, phase, actualDuration) {
    console.log(id, phase, actualDuration);
  }

  const handleFilterPrice = (priceRange) => {
    const filtered = products.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    setFilteredProducts(filtered);
  };

  const handleFilterCategory = (category) => {
    const filtered = products.filter(
      (product) => product.category === category
    );
    setFilteredProducts(filtered);
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error}</Typography>;

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <>
      <Profiler id="Shop" onRender={handleRender}>
        <Container maxWidth="lg" sx={{ mt: "10rem" }}>
          <Box my={4} mt={5}>
            <Typography variant="h2" gutterBottom>
              Shop
            </Typography>
            <FilterButton onClick={toggleFilter} variant="contained">
              FILTER
            </FilterButton>
            <FilterSidebar
              open={isFilterOpen}
              onClose={toggleFilter}
              categories={categories}
              onFilterPrice={handleFilterPrice}
              onFilterCategory={handleFilterCategory}
            />
            <Grid container spacing={3} mt={2}>
              {filteredProducts.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
        console.log("Parent Component Rendered")
        <Footer />
      </Profiler>
    </>
  );
};

export default ShopPage;
