import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"

export default function MyApp({ Component, pageProps }) {


  // 2. Call `extendTheme` and pass your custom values
  const theme = extendTheme({
    colors: {
      brand: {
        100: "#319795",
        200: "#319795",
        300: "#319795",
        400: "#319795",
        500: "#319795",
        600: "#319795",
        700: "#319795",
        800: "#319795",
        900: "#319795",
      },
    },
  })

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}