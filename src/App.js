import About from "./sections/About";
import Client from "./sections/Client";
import Cta from "./sections/Cta";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Offer from "./sections/Offer";
import Portfolio from "./sections/Portfolio";
import Review from "./sections/Review";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Client />
      <Offer />
      <Portfolio />
      <Review />
      <Cta />
      <Footer />
    </>
  );
}
