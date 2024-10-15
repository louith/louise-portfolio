import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Helvetica', sans-serif`,
    subheading: `'Helvetica-Light', sans-serif`,
    cursive: `'Slight-Regular', sans-serif`,
  },
  styles: {
    global: {
      "@font-face": [],
    },
  },
});
