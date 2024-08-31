import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram";
import { Header } from "./components/Header/Header";
import { Content } from "./components/Content/Content";

function App() {
  const { tGReady } = useTelegram();
  useEffect(() => {
    tGReady();
  }, []);
  return (
    <div className="app">
      <Header />
      <Content />
    </div>
  );
}

export default App;
