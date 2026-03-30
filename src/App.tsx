/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Details from './components/Details';
import Accommodation from './components/Accommodation';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import ExtraInfo from './components/ExtraInfo';
import Footer from './components/Footer';
import Envelope from './components/Envelope';

export default function App() {
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);

  useEffect(() => {
    if (!isEnvelopeOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isEnvelopeOpened]);

  return (
    <>
      {!isEnvelopeOpened && <Envelope onOpen={() => setIsEnvelopeOpened(true)} />}
      <div className="min-h-screen bg-secondary text-text font-sans scroll-smooth">
        <Navbar />
      <main>
        <Hero />
        <Details />
        <Accommodation />
        <Gallery />
        <RSVP />
        <ExtraInfo />
      </main>
      <Footer />
    </div>
    </>
  );
}
