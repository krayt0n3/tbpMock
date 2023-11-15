import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import TBPLayout from '../components/tbpLayout';
import booksLogo from '../assets/Logo-Books.png';
import booksOnline from '../assets/Logo-Books-Online.png';
import lpmLogo from '../assets/Logo-LPM.png';
import judge from '../assets/judge.jpg';
import lawyer from '../assets/lawyer.jpg';
import legalAssistant from '../assets/legalassistant.jpg';
import student from '../assets/student.jpg';
import nonlawyer from '../assets/nonlawyer.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
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
      <br />
      <p className='center small'>Shop for practice manuals, jury charges, deskbooks and reference guides</p>
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
      <br />
      <p className='center small'>Subscribe to online practice manuals for downloadable forms and practice notes</p>
      </Col>
      <Col>
      <Card>
        <Card.Img variant="top" src={lpmLogo} style={{padding: '7%', marginBottom: '7%'}} />
        <Card.Body className='bgdb center'>
          <Card.Text className='bold'>
            Law Practice Management {'>'}
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <p className='center small'>Explore practice management content by experienced attorneys</p>
      </Col>
      </Row>
      <hr className='colors'/><br />
<Row>
  <Col md={'auto'} style={{alignSelf: 'center'}}>
  <FontAwesomeIcon icon={faScrewdriverWrench} style={{"--fa-primary-color": "#1a2844", "--fa-secondary-color": "#ada299", fontSize: 'xxx-large'}} size='2xl' />
</Col>
<Col className='self-center'><h2>All the tools you need to succeed</h2>
<p>Rely on our Texas Bar Books bookshop to guide you through. Bar-appointed attorneys continually create, review, and update our collections of forms, practice notes, jury charges, and reference guides, giving our material an unmatched reputation with judges and colleagues.</p>
</Col>
</Row>
<br />
<Row>
  <Col md={'auto'} style={{alignSelf: 'center'}}>
  <FontAwesomeIcon icon={faScrewdriverWrench} style={{"--fa-primary-color": "#1a2844", "--fa-secondary-color": "#ada299", fontSize: 'xxx-large'}} size='2xl' />
</Col>
<Col className='self-center'><h2>Our dedicated law practice management resources help you run your practice</h2>
<p>The Law Practice Management Program provides articles, videos, downloads, and more. Our goal is to help Texas attorneys learn the skills of running a practice that is both sustainable and successful. We devote attention to topics that matter-from using technology to preparing for unexpected events.</p>
</Col>
</Row>
<br />
<Row>
  <Col md={'auto'} style={{alignSelf: 'center'}}>
  <FontAwesomeIcon icon={faScrewdriverWrench} style={{"--fa-primary-color": "#1a2844", "--fa-secondary-color": "#ada299", fontSize: 'xxx-large'}} size='2xl' />
</Col>
<Col className='self-center'><h2>You can't achieve success alone, so why not practice together?</h2>
<ul>
  <li>Organization Accounts allow you to connect library assets with coworkers.</li>
  <li>Assign Additional Licenses to coleagues from your account.</li>
  <li>Link Lawyer and Legal Assistant Accounts to give easier access to support staff.</li>
  <li>Firm-Wide Licenses allow administrators to manage their firm's user access.</li>
  </ul>
</Col>
</Row>
<hr className='colors'/><br />
<Row>
  <Col md={4}><h1>Tools and publications for everyone involved in the legal practice</h1></Col>
  <Col>
  <Card className="bg-dark text-white">
      <Card.Img variant='top' src={judge} alt="Card image" />
      <Card.Body>
        <Card.Title>Judges</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card className="bg-dark text-white">
      <Card.Img variant='top' src={lawyer} alt="Card image" />
      <Card.Body>
        <Card.Title>Lawyers</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
    </Card></Col>
</Row>
<br />
<Row>
  <Col>
  <Card className="bg-dark text-white">
      <Card.Img variant='top' src={legalAssistant} alt="Card image" />
      <Card.Body>
        <Card.Title>Legal Assistants</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
    </Card></Col>
  <Col>
  <Card className="bg-dark text-white">
      <Card.Img variant='top' src={student} alt="Card image" />
      <Card.Body>
        <Card.Title>Law Students & Educators</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card className="bg-dark text-white">
      <Card.Img variant='top' src={nonlawyer} alt="Card image" />
      <Card.Body>
        <Card.Title>Office Managers, Librarians, Others</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
    </Card></Col>
</Row>
<br />
<Row><Col md={4} />
  <Col className='center'>
  <Button variant='dark'>Create an Account</Button></Col>
  <Col md={4} />
</Row>
      </Container>
      </TBPLayout>
    </div>
  )
}

