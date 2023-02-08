import { ApolloProvider } from "@apollo/client";
import { Text } from "@chakra-ui/react";
import { useState } from "react";
import client from "./config/apollo.js";
import { AuthPage } from "./pages/AuthPage.jsx";

export const App = () => {
  const [auth, setauthAuth] = useState(undefined);

  return (
    <ApolloProvider client={client}>
      {!auth ? <AuthPage /> : <Text as="h1"> Estas Logeado </Text>}
    </ApolloProvider>
  );
};
