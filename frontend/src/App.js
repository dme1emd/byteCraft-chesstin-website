import './App.css';
import { About } from './components/sections/About';
import { Collab } from './components/sections/Collab';
import { Nav } from './components/sections/Nav';
import { Speakers } from './components/sections/Speakers';
import { Sponsors } from './components/sections/Sponsors';
import './index.css'
function App() {
  return (
    <div className="App">
      <Nav/>
      <main>
      <About/>
      <Collab/>
      <Speakers/>
      <Sponsors/>
      </main>
    </div>
  );
}

export default App;
