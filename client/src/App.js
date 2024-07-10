
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Topbar from './components/Topbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact'
import Policy from './components/Terms&Policy/Policy';
import Logo from './components/Logo';
import Homescreen from './Screens/Homescreen';
import CartScreen from './Screens/CartScreen';
import UserRegister from './components/Register/UserRegister';
import Login from './components/Login/Login';

function App() {
  return (
    
    <BrowserRouter>
    <Topbar/>
    <Logo/>
    <Routes>
    <Route  path='/register' Component={UserRegister} exact/>
    <Route  path='/login' Component={Login} exact/>
    <Route  path='/cart' Component={CartScreen} exact/>
      <Route  path='/about' Component={About} exact/>
      <Route  path='/contact' Component={Contact} exact/>
      <Route  path='/policy' Component={Policy} exact/>
      <Route  path='/' Component={Homescreen} exact/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
