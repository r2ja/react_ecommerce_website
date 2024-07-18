import React from "react";
import {
  Drawer,
  Typography,
  Slider,
  Button,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";

const FilterSidebar = ({
  open,
  onClose,
  categories,
  onFilterPrice,
  onFilterCategory,
}) => {
  const [priceRange, setPriceRange] = React.useState([0, 2000]);

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const applyPriceFilter = () => {
    onFilterPrice(priceRange);
  };

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: 250, padding: 3 }}>
        <Typography variant="h6" gutterBottom>
          Filter by Price
        </Typography>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={0}
          max={2000}
        />
        <Typography>
          Price: ${priceRange[0]} - ${priceRange[1]}
        </Typography>
        <Button
          onClick={applyPriceFilter}
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Apply Price Filter
        </Button>
        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          Product Categories
        </Typography>
        <List>
          {categories.map((category) => (
            <ListItem
              button
              key={category}
              onClick={() => onFilterCategory(category)}
            >
              <ListItemText primary={category} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default FilterSidebar;