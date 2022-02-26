// import GlobalStyles from "./helpers/Global.styled";
import GlobalStyles from "./helpers/Global.styled";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "./helpers/Constants";
import { useState } from "react";

function App() {
  const [darkTheme, toggleTheme] = useState(true);
  const user = {
    station_code: 40,
    name: "Dhruv Singh",
    profile_key: "",
  };
  return (
    <ThemeProvider theme={darkTheme ? DarkTheme : LightTheme}>
      <>
        <GlobalStyles />
        <Header darkTheme={darkTheme} toggleTheme={toggleTheme} user={user} />
        <Home user={user} />
      </>
    </ThemeProvider>
  );
}

export default App;
