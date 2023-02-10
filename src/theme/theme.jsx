import { extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from '@chakra-ui/theme'

const { Button, Form, Input, Box, Text } = chakraTheme.components

export const theme = extendBaseTheme({
  colors: {
    lightColor: {
      50: "#bac8d6",
      100: "#a2b3c6",
      200: "#8194b0",
      300: "#6f80a1",
    },
    grayColor: {
      100: "#a2a2a2",
    },
    darkColor: {
      100: "#000",
    },
    bgLight: {
      100: "#fff",
      200: "#efefef", 
      300: "#dcdcdc",
    },
    bgGray: {
      100: "#fafafa",
    },

    borderGray: {
      100: "#dbdbdb",
      200:"#b4b4b4",
      300:"#818181"

    },
    borderDark: {
      100: "#000",
    },

    actionColor: {
      50: "#06aeff",
      100: "#0095f6",
      200: "#06aeff",
    },
    errorColor: {
      100: "#ed4956",
    },
  },

  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  },

  components: {
    Button,
    Form,
    Input,
    Box,
    Text,
  },
});
