import { Link, Outlet } from 'react-router-dom';
import TBPLayout from './components/tbpLayout';
import './styles/App.scss';
import { Container } from 'react-bootstrap';

export default function App() {
  return (
    <>
    <TBPLayout>
      <Container>
      <h1>Heading Test</h1>
      <p>Body paragraph test</p>
      <ul><li><Link to={`/lpm`}>LPM</Link></li></ul>
      <div className='spotlight'><Outlet /></div>
      </Container>
      </TBPLayout>
    </>
  )
}

