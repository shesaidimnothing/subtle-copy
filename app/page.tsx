import Hero from './components/Hero';
import Projects from './components/Projects';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Products />
      <Contact />
      <Footer />
    </main>
  );
}
