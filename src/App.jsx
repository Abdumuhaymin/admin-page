import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/login";
import { AppLayout } from "./layout/app-layout";
import { Home } from "./pages/home/home";
import { Category } from "./pages/category/category";
import { Banners } from "./pages/banners/banners";
import { Products } from "./pages/products/products";
import { Create } from "./pages/category/create";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="banners" element={<Banners />} />
          <Route path="products" element={<Products />} />
          <Route path="category/create" element={<Create />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
