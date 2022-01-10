import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "./Components/Themes";
import ButtonMode from "./ButtonMode";

export default function ThemeMode() {
  const [theme, setTheme] = useState(true);
  const ThemeToggler = () => {
    theme === false ? setTheme(true) : setTheme(false);
  };
  return (
    <>
      <ThemeProvider theme={theme === true ? LightTheme : DarkTheme} />
      <ButtonMode onClick={() => ThemeToggler()}>Dark Mode +-</ButtonMode>
    </>
  );
}
