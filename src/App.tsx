import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import WhatWeSource from "./components/sections/WhatWeSource";
import Shop from "./components/sections/Shop";
import HowItWorks from "./components/sections/HowItWorks";
import ShippingPreview from "./components/sections/ShippingPreview";
import SocialConnection from "./components/sections/SocialConnection";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatWeSource />
        <Shop />
        <HowItWorks />
        <ShippingPreview />
        <SocialConnection />
      </main>
      <Footer />
    </>
  );
}
