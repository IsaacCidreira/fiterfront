import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../assets/styles/theme/default";
import GlobalStyles from '../assets/styles/global'
import Login from "../pages/Login";
function App() {
  return (
   <BrowserRouter>
   <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <Routes>
      <Route path="/" element={<Login/>}/>
    </Routes>
   </ThemeProvider>
   
   </BrowserRouter>
  );
}

export default App;
