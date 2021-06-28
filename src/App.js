import './App.css';
import { Button,Alert, Row }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Alert>This is a alert message</Alert>
       <Button>Bootstrap</Button>
       <Button>Bootstrap</Button>
       <Button>Bootstrap</Button>
       <Button>Bootstrap</Button>
      </header>
      <Row className='row'><p>Hellloooooo</p></Row>
      <Row className='row'><p>Hellloooooo</p></Row>
    </div>
  );
}

export default App;
