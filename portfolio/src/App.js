import './App.css';

// Font Awesome Icons 
// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faCircle, faHome, 
  faHandSpock, faMapMarkerAlt, faGraduationCap,
  faArrowRight, faArrowLeft, faHeart} from '@fortawesome/free-solid-svg-icons'

// Importing custom components
import Router from './Routes/Routes'

library.add(fab, faEnvelope, faCircle, 
    faHome, faHandSpock, faMapMarkerAlt, faGraduationCap, faArrowRight, faArrowLeft, faHeart)

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
