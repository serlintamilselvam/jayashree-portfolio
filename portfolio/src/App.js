import './App.css';

// Font Awesome Icons
// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// Importing custom components
import Header from './Components/Header/Header'
import SectionsContainer from './Components/Sections/SectionsContainer'
import Footer from './Components/Footer/Footer'

library.add(fab, faEnvelope)

function App() {
  return (
    <div className="App">
      <Header />
      <SectionsContainer />
      <Footer />
    </div>
  );
}

export default App;
