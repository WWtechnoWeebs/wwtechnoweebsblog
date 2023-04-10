import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import {Route, Routes} from 'react-router-dom';
import Hardware from './pages/Hardware';
import Software from './pages/Software';
import Menu from './components/menu';

function App() {
  return (
    <div>
      <NavigationBar />
      <Menu />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/hardware' element={<Hardware/>}/>
        <Route path='/software' element={<Software/>}/>
      </Routes>
    </div>
  );
}

export default App;
