import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'PackPro - Premium Packaging Solutions';
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Categories />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
