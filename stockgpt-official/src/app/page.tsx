// app/page.tsx
"use client";
// import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import InnovativeSection from '@/components/InnovativeSection';
import ServiceSection from '@/components/ServiceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
       <InnovativeSection/>
      <ServiceSection />
    <ContactSection />
      <Footer />
    </main>
  )
}