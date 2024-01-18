import { Route, Routes } from "react-router-dom";

import Header from "./ui/header/Header";
import Home from "./pages/Home/Home";
import Footer from "./ui/Footer";
import Shop from "./features/shop/Shop";

function App() {
  return (
    <div className="text-textColor">
      <Header />
      <main className="mt-[70px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
