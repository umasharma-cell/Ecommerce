import { Box, Input, Textarea, Button, Heading } from "@chakra-ui/react";

const ContactUs = () => {
  return (
    <Box p={6} maxW="600px" mx="auto" bg="brand.lightGray" borderRadius="md">
      <Heading color="brand.teal" mb={6}>
        Contact Us
      </Heading>
      <Input placeholder="Name" mb={4} focusBorderColor="brand.teal" />
      <Input
        placeholder="Email"
        mb={4}
        type="email"
        focusBorderColor="brand.teal"
      />
      <Input
        placeholder="Mobile Number"
        mb={4}
        type="tel"
        focusBorderColor="brand.teal"
      />
      <Textarea
        placeholder="Your Message"
        mb={4}
        focusBorderColor="brand.teal"
      />
      <Button variant="solid" size="md">
        Submit
      </Button>
    </Box>
  );
};

export default ContactUs;
