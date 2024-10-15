import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Helvetica', sans-serif`,
    subheading: `'Helvetica-Light', sans-serif`,
    cursive: `'Slight-Regular', sans-serif`,
  },
  styles: {
    global: {
      "@font-face": [
        {
          fontFamily: "Helvetica",
          src: `url('/fonts/Helvetica.ttf') format('truetype')`,
          fontWight: "normal",
          fontStyle: "normal",
        },
        {
          fontFamily: "Helvetica-Light",
          src: `url('/fonts/helvetica-light.ttf') format('truetype')`,
          fontWight: "normal",
          fontStyle: "normal",
        },
        {
          fontFamily: "Slight-Regular",
          src: `url('/fonts/helvetica-light.ttf') format('truetype')`,
          fontWight: "normal",
          fontStyle: "normal",
        },
      ],
    },
  },
});
