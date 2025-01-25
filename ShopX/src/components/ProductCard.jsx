import { Box, Image, Text, Button } from "@chakra-ui/react";

const ProductCard = ({ product }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="brand.lightGray"
      _hover={{ boxShadow: "lg", bg: "brand.white" }}
    >
      <Image src={product.thumbnail} alt={product.title} />
      <Box p={4}>
        <Text mt={2} fontWeight="bold" fontSize="xl" color="brand.teal">
          {product.title}
        </Text>
        <Text mt={1} color="gray.500">
          {product.category}
        </Text>
        <Text mt={1} fontWeight="bold" color="brand.red">
          ${product.price}
        </Text>
        <Button mt={4} variant="solid" size="sm">
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;
