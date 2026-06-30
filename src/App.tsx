import { useState, Suspense, lazy } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const HomePage = lazy(() => import('./pages/HomePage'));
const AllProductsPage = lazy(() => import('./pages/AllProductsPage'));
const ProductDetailsPage = lazy(() => import('./pages/ProductDetailsPage'));

export default function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      if (location.pathname !== "/products") {
        navigate("/products");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-rose selection:text-white bg-warm">
      <Navbar searchQuery={searchQuery} onSearchChange={handleSearch} />
      
      <main className="flex-grow">
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-12 h-12 border-4 border-rose/30 border-t-rose rounded-full animate-spin"></div></div>}>
          <Routes>
            <Route path="/" element={<HomePage searchQuery={searchQuery} onClearSearch={() => setSearchQuery("")} />} />
            <Route path="/products" element={<AllProductsPage searchQuery={searchQuery} onClearSearch={() => setSearchQuery("")} onSearchChange={handleSearch} />} />
            <Route path="/products/:id" element={<ProductDetailsPage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
