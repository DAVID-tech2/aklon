import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import CartDrawer from '@/components/cart/CartDrawer';
import Hero from '@/components/home/Hero';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import CateringCTA from '@/components/home/CateringCTA';
import AboutPreview from '@/components/home/AboutPreview';
import MenuSection from '@/components/menu/MenuSection';
import CateringSection from '@/components/catering/CateringSection';
import GallerySection from '@/components/gallery/GallerySection';
import ContactSection from '@/components/home/ContactSection';

function App() {
  return (
    <CartProvider>
      <Navbar />
      <main>
        <Hero />
        <FeaturedCategories />
        <FeaturedProducts />
        <CateringCTA />
        <MenuSection />
        <CateringSection />
        <GallerySection />
        <AboutPreview />
        <ContactSection />
      </main>
      <Footer />
      <CartDrawer />
      <FloatingWhatsApp />
    </CartProvider>
  );
}

export default App;
