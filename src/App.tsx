import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import AppRoutes from "./routes/AppRoutes";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
