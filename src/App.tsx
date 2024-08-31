import { useEffect } from "react";
import "./App.css";
import { ButtonClose } from "./compnents/ButtonClose";

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
