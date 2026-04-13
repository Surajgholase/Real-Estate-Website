import React, { useState, useEffect } from 'react';
import { getContent } from '../services/api';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import OverviewSection from '../components/OverviewSection';
import ConnectivitySection from '../components/ConnectivitySection';
import AmenitiesSection from '../components/AmenitiesSection';
import AboutSection from '../components/AboutSection';
import UpdatesSection from '../components/UpdatesSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';

const Home = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getContent();
        if (data.success) {
          setContent(data.content);
        }
      } catch (error) {
        console.error('Failed to fetch site content:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (!content) return <div>Failed to load content.</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <HeroSection content={content.hero} />
        <OverviewSection content={content.overview} />
        <ConnectivitySection content={content.connectivity} />
        <AmenitiesSection content={content.amenities} />
        <AboutSection content={content.about} />
        <UpdatesSection content={content.updates} />
        <FAQSection content={content.faq} />
        <ContactSection content={content.contact} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
