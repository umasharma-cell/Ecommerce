import { useEffect, useState } from "react";
import axios from "axios";
import { SimpleGrid, Box, Heading } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box p={6} bg="brand.white">
      <Heading mb={6} color="brand.teal">
        Our Products
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;
