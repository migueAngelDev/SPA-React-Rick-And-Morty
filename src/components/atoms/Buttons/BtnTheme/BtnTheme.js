import React from "react";
import { Btn, BtnImg } from "./BtnTheme.styles";

export default function BtnTheme() {
  // const togglerTheme = () => {
  //   !theme ? setTheme(true) : setTheme(false);
  // };

  return (
    <>
      <Btn>
        <BtnImg src="https://cdn-icons-png.flaticon.com/512/5262/5262027.png" />
      </Btn>
    </>
  );
}
