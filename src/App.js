import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
      </Routes>
    </BrowserRouter>

  );

}

export default App;
