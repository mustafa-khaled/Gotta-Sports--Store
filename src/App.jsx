import { Route, Routes } from "react-router-dom";
import Header from "./ui/header/Header";
import Home from "./pages/Home/Home";
import Footer from "./ui/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="home" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
