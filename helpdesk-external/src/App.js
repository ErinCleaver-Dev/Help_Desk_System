import './App.css';
import styled from 'styled-components'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Header from './components/Header/Header'

function App() {
  return (
    <Router>
      <Container>
        <Header />
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`

`