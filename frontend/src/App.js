import './App.css';
import { Nav } from '../sections/Nav';
import './index.css'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Register phase={'main'} />}></Route>
        <Route path='/register/info' element={<Register phase={'info'} />}></Route>
        <Route path='/register/contact' element={<Register phase={'contact'} />}></Route>
        <Route path='/register/competition' element={<Register phase={'competition'} />}></Route>
        <Route path='/register/chess' element={<Register phase={'chess'} />}></Route>
        <Route path='/register/chesstin' element={<Register phase={'chesstin'} />}></Route>\
        <Route path='/register/presence' element={<Register phase={'presence'} />}></Route>
        <Route path='/register/thank-you' element={<Register phase={'thank-you'} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
