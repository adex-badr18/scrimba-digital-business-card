import reactLogo from './assets/react.svg';
import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';
import './App.css'

function App() {

  return (
    <div className='container'>
      <Info />
      
      <main>
        <About />
        <Interests />
      </main>

      <Footer />
    </div>
  )
}

export default App
