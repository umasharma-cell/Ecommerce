import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      teal: "#006b75",
      red: "#e6483e",
      white: "#ffffff",
      lightGray: "#f5f5f5",
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
      variants: {
        solid: {
          bg: "brand.teal",
          color: "brand.white",
          _hover: { bg: "brand.red" },
        },
        outline: {
          borderColor: "brand.teal",
          color: "brand.teal",
          _hover: { borderColor: "brand.red", color: "brand.red" },
        },
      },
    },
  },
});

export default theme;
