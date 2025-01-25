import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.teal" p={4} color="brand.white">
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <Link as={RouterLink} to="/" fontSize="2xl" fontWeight="bold">
          ShopX
        </Link>
        <Flex gap={6}>
          <Link as={RouterLink} to="/" _hover={{ color: "brand.red" }}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" _hover={{ color: "brand.red" }}>
            About
          </Link>
          <Link as={RouterLink} to="/products" _hover={{ color: "brand.red" }}>
            Products
          </Link>
          <Link as={RouterLink} to="/contact" _hover={{ color: "brand.red" }}>
            Contact Us
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
