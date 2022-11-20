import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    navbar: "#e42c5a", //magenta
    texto: "#FFFFFF", //blanco
    fondo: "#1c1c23", //fondo
    cards: "#505050",  //gris de las cards
  },
  breakpoints: {
    sm: "320px",
    m: "550px",
    md: "768px",
    md1: "818px",
    lg: "990px",
    xl: "1100px",
    xml: "1350px",
    xxl: "1536px",
    xxxl: "1700px",
  },
  components: {
    Drawer: {
      variants: {
        xxs: {
          dialog: {
            maxW: "40%",
            background: "rgba(30, 144, 255, 0.5)",
          },
        },
      },
    },
  },
});

export default theme;
