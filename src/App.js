import './App.css';
import {Container,Row,Col,Button,Navbar,Nav,NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Content from './Content';
import Expander from './Expander';
import ButtonFoot from './assets/ButtonFoot';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header/>
      <Content/>
      <Expander/>
      <ButtonFoot/>
      <Footer/>
  </div>
  );
}

export default App;
