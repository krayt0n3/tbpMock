import { Col, Container, Row, Card } from 'react-bootstrap';
import TBPLayout from '../components/tbpLayout';
import booksLogo from '../assets/Logo-Books.png';
import booksOnline from '../assets/Logo-Books-Online.png';
import lpmLogo from '../assets/Logo-LPM.png'
import '../styles/App.scss';

export default function Home() {
  return (
    <div>
      <TBPLayout>
      <Container style={{marginTop: "2%", marginBottom: "2%", paddingBottom: '60px'}}>
        <Row>
          <Col>
<h1 className='center'><span className='darkBlueText'>Practice</span> <span className='signify'>Well</span></h1>
<p className='center'>You know the law. We're here to make it easy to practice.</p>
      </Col>
      </Row>
      <Row>
        <Col>
      <Card>
        <Card.Img variant="top" src={booksLogo} style={{padding: '7%'}} />
        <Card.Body className='bglb center'>
          <Card.Text className='bold'>
            Texas Bar Books {'>'}
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card>
        <Card.Img variant="top" src={booksOnline} style={{padding: '7%', marginBottom: '1.5%'}} />
        <Card.Body className='bgdo center'>
          <Card.Text className='bold'>
            Texas Bar Books Online {'>'}
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card>
        <Card.Img variant="top" src={lpmLogo} style={{padding: '7%', marginBottom: '7%'}} />
        <Card.Body className='bgdb center'>
          <Card.Text className='bold'>
            Texas Bar Books {'>'}
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      </Row>
      </Container>
      </TBPLayout>
    </div>
  )
}

