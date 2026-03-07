import Navbar     from '../components/Navbar/Navbar';
import Hero       from '../components/Hero/Hero';
import Showcase   from '../components/Showcase/Showcase';
import Features   from '../components/Features/Features';
import Enterprise from '../components/Enterprise/Enterprise';
import Categories from '../components/Categories/Categories';
import MultiSide  from '../components/MultiSide/MultiSide';
import Studio     from '../components/Studio/Studio';
import Reviews    from '../components/Reviews/Reviews';
import FAQ        from '../components/FAQ/FAQ';
import Footer     from '../components/Footer/Footer';
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Features />
        <Enterprise />
        <Categories />
        <MultiSide />
        <Studio />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
