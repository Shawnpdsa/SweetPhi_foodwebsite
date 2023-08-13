import React from 'react'
import "./index.css"
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadlinesCard from './components/HeadlinesCard';
import Food from './components/Food';

import Category from './components/Category';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <HeadlinesCard/>
     <Food/>
     <Category/>
     <Footer/>
    </div>
  )
}

export default App
