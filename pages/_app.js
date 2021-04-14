import '../styles/globals.css'
import { ApolloProvider } from "@apollo/client";
import { ChakraProvider,ColorModeScript } from "@chakra-ui/react"
import client from "../components/apollo";
import Layout from "../components/Layout"
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
          <Layout>
          <Component {...pageProps} />
          </Layout>
      </ChakraProvider>
    </ApolloProvider>
  );
}
export default MyApp
//  <Component {...pageProps} /> it is mean all component route page 