import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/products"); // Redirect to the Products page
  };

  return (
    <Box bg="brand.teal" color="brand.white" py={16} textAlign="center">
      <Heading>Refresh your state of mind.</Heading>
      <Text mt={4} fontSize="lg">
        Functional products to energize, calm, and focus you in the moment.
      </Text>
      <Button mt={6} variant="solid" size="lg" onClick={handleShopNow}>
        Shop Now
      </Button>
    </Box>
  );
};

export default Home;
