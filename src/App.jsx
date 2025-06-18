import React from 'react';
import Header from './components/Header';
import Home from './sections/Home';

export default function App() {
  return (
    <div className="bg-off-white w-full min-h-screen overflow-x-hidden">
      <Header />
      <main className="w-full min-h-screen">
        <Home />
      </main>
    </div>
  );
}