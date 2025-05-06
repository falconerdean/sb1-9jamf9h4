import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <ScrollRestoration />
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;