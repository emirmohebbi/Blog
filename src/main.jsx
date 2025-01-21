import { createRoot } from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import App from "./App.jsx";
import "./styles/index.css";
import "./styles/fonts.css";
import { ThemeProvider } from "@mui/material";
import theme from "./mui/theme";
const client = new ApolloClient({
  uri: import.meta.env.VITE_APP_GRAPHCMS_URI,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>
);
