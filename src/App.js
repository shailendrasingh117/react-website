import './App.css';
import Header from './Components/Header';
import Container from './Components/Container';
import Footer from './Components/Footer';
import Subscribe from './Components/Subscribe';
import About from './Components/About';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Products from './Components/Products';
import Reputation from './Components/Reputation';
import Service from './Components/Service';
import Run from './Components/Run';

function App() {
  return (
    <>
      <Header />
      <Run/>
      <Container />
      <Reputation />
      <About />
      <Service />
      <Experience />
      <Subscribe />
      <Products />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
