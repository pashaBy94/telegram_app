import { useEffect } from "react";
import "./App.css";
// import "https://telegram.org/js/telegram-web-app.js";
import { ButtonClose } from "./compnents/ButtonClose";
// @ts-ignore
export const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);
  return (
    <>
      Hello world
      <ButtonClose />
    </>
  );
}

export default App;
