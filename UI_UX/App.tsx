import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductOverview from './components/ProductOverview';
import ValueProps from './components/ValueProps';
import Features from './components/Features';
import Integrations from './components/Integrations';
import IndustryTabs from './components/IndustryTabs';
import Insights from './components/Insights';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      
      <main>
        <Hero />
        <ProductOverview />
        <ValueProps />
        <Features />
        <Integrations />
        <IndustryTabs />
        <Insights />
      </main>

      <Footer />
    </div>
  );
}

export default App;