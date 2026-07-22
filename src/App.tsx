import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { Hero } from './sections/Hero';
import { WhyHitUnit } from './sections/WhyHitUnit';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Process } from './sections/Process';
import { Technologies } from './sections/Technologies';
import { Portfolio } from './sections/Portfolio';
import { Testimonials } from './sections/Testimonials';
import { FAQ } from './sections/FAQ';
import { CTA } from './sections/CTA';
import { Contact } from './sections/Contact';
import { NotFound } from './pages/NotFound';

function Home() {
  return (
    <>
      <Hero />
      <WhyHitUnit />
      <About />
      <Services />
      <Process />
      <Technologies />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="relative min-h-screen bg-canvas text-ink">
            <ScrollProgress />
            <Navbar />
            <main>
              <Home />
            </main>
            <Footer />
          </div>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
