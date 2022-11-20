import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "'Roboto Mono', monospace",
    body: "'Rubik', sans-serif, Releway",
    footer: "Eiko-medium",
    header: "'Inter', sans-serif",
    NotFound:"'Permanent Marker'"
  },
  colors: {
    primary: "#2196F3", //celeste basico
    secondary: "#FFFFFF", //blanco
    bgSb: "#2195f387", //celeste clarito
    bgH: "#8fccff81",  //celeste clarito
    blackShadow: "#000000c9",
    whiteSoft:"#FFFFFFc5"
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
