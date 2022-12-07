import './App.css';
import { Nav } from './components/navBar/Nav';
import './index.css'
import AboutEv from './components/aboutEvent/aboutEv';

import Collabo from './components/collab/collabo';
function App() {
  return (
    <div className="App overflow-hidden">
      <Nav/>
      <AboutEv/>
      <Collabo/>
    </div>
  );
}

export default App;
