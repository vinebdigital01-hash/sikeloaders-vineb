import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import SoftwareGrid from '../components/SoftwareGrid';
import AboutStats from '../components/AboutStats';
import Advantages from '../components/Advantages';
import AfterSales from '../components/AfterSales';
import BlogSection from '../components/BlogSection';
import FAQAccordion from '../components/FAQAccordion';
import ContactForm from '../components/ContactForm';

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <main>
      <Helmet>
        <title>SIKE 斯科玻璃机械 | Industrial Glass Processing</title>
        <meta name="description" content="Global leaders in industrial glass processing machinery. We engineer precision temper furnaces, automated cutting lines, and advanced material handling systems." />
      </Helmet>
      <Hero />
      <ProductGrid />
      <SoftwareGrid />
      <AboutStats />
      <Advantages />
      <AfterSales />
      <BlogSection />
      <FAQAccordion />
      <ContactForm />
    </main>
  );
};

export default Home;
