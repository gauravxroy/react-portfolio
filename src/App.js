// 
import './App.css';
import Aos from "aos";
import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import { useEffect } from 'react';
import Hero from './components/UI/Hero';
import Projects from './components/UI/Projects';
import Contact from './components/UI/Contact';


function App() {
  useEffect(()=>{
    Aos.init();
  },[])
  return ( 
    <>
    <Header/>
   <main>
    <Hero/>
    <Projects/>
    <Contact/>
   </main>
   </>
  );
}

export default App;
