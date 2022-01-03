
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Categories from './components/Categories'
import Campaings from './components/Campaings'
import Favorites from './components/Favorites'
import MobileApp from './components/MobileApp'
import Cards from './components/Cards'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <Categories/>
      <Campaings/>
      <Favorites/>
      <MobileApp/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;