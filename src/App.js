
import './App.css';
import { Button } from 'reactstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyBio from './components/myBio';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<MyBio />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
