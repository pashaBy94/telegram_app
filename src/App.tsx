import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram";
import { Header } from "./components/Header/Header";
// import { Content } from "./components/Content/Content";
import { Route, Routes } from "react-router-dom";
import { ProductList } from "./components/ProductList/ProductList";
import { Form } from "./components/Form/Form";

function App() {
  const { tGReady } = useTelegram();
  useEffect(() => {
    tGReady();
  }, []);
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      {/* <Content /> */}
    </div>
  );
}

export default App;
