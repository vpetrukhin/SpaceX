import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/main';
import Features from './components/features/features';
import Footer from './components/footer/footer';
import Calendar from './components/calendar/calendar';
import Details from './components/details/details';

import './style.css';

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Features/>
      <Footer/>
      <Calendar/>
      <Details/>
    </>
  );
}

export default App;
