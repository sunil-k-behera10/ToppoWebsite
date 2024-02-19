
import './App.css';
import Body from './components/Body';
import Cards from './components/Cards';
import Data from './components/Data';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NewsLetter from './components/NewsLetter';

function App() {
  return (
    <>
      <Navbar/>
      <Body/>
      <Data/>
      <NewsLetter/>
      <Cards/>
      <Footer/>
    </>
  );
}

export default App;
