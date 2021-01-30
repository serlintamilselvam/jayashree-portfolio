import './App.css';

// Importing custom components
import Header from './Components/Header/Header'
import Sections from './Components/Sections/Sections'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Sections />
      <Footer />
    </div>
  );
}

export default App;
