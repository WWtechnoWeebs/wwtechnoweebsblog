import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import {Route, Routes} from 'react-router-dom';
import Hardware from './pages/Hardware';

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/hardware' element={<Hardware/>}/>
      </Routes>
    </div>
  );
}

export default App;
