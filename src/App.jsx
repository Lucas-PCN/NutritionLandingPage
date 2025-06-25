import React from 'react';
import Header from './components/elements/Header';
import AboutMe from './sections/AboutMe';
import Home from './sections/Home';
import Services from './sections/Services';
import GetInTouch from './sections/GetInTouch';

export default function App() {
  return (
    <div className="bg-off-white w-full min-h-screen overflow-x-hidden">
      <Header />
      <main className="w-full min-h-screen">
        <Home />
        <AboutMe />
        <Services />
        <GetInTouch />
      </main>
    </div>
  );
}