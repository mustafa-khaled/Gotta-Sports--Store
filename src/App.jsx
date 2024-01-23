import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Header from "./ui/header/Header";
import Footer from "./ui/Footer";
import Loader from "./ui/loader/Loader";
import ScrollToTop from "./ui/ScrollToTop";

const Home = lazy(() => import("./pages/Home/Home"));
const Shop = lazy(() => import("./features/shop/Shop"));
const Blog = lazy(() => import("./pages/Blog/Blog"));
const Authentication = lazy(() => import("./features/auth/Authentication"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <div className="text-textColor">
      <ScrollToTop />
      <Header />
      <main className="mt-[70px]">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Authentication />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#fff",
            color: "#ccc",
          },
        }}
      />
    </div>
  );
}

export default App;
