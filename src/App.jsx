import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './layout/header/Navbar';
import Footer from './layout/footer/Footer';

function App() {
  return (
   <>
      <Navbar/>
      <Outlet/>
      <Footer/>
   </>
  );
}

export default App;
