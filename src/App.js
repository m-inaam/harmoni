import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Piano } from './components/Piano.js';
import LandingPage from './pages/LandingPage';
import './index.css';
import Ai from './pages/Ai.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingPage />} path='/' />
        <Route element={<Piano />} path='/piano' />
        <Route element={<Ai />} path='/ai' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
