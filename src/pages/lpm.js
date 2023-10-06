import TBPLayout from '../components/tbpLayout';
import '../styles/App.scss';
import { Col, Container, Row } from 'react-bootstrap';

export default function LPM() {
  return (
    <div>
      <TBPLayout>
      <Container>
        <Row><Col>
      <h1>LPM</h1>
      <p>What do I do?</p>
      </Col></Row></Container>
      </TBPLayout>
    </div>
  )
}

