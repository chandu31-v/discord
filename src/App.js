import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Login"
import Register from './Register';
import Start from "./Start"
import Dashboard from "./Dashboard"

function App() {
  return (
    <>
      <div className='max-w-screen'>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Signup" element={<Register />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path='*' element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
