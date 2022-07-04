import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';


function App() {
  return (
    <div className="App">
    <Container>
      <Navbar expand="lg" variant="dark" bg="primary">
        <Container>
          <Navbar.Brand href="#">Ristorante Con Fusion</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
    </div>
  );
}

export default App;
