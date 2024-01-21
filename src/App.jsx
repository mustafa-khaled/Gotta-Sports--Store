import { Route, Routes } from "react-router-dom";

import Header from "./ui/header/Header";
import Home from "./pages/Home/Home";
import Footer from "./ui/Footer";
import Shop from "./features/shop/Shop";
import Blog from "./pages/Blog/Blog";

function App() {
  return (
    <div className="text-textColor">
      <Header />
      <main className="mt-[70px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
