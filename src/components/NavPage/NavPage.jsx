import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import styles from '../NavPage/NavPage.module.css';



const NavPage = () => {
  return (
    
      <Navbar expand="lg" className={styles.bodyNav}>
        <Container>
          <Navbar.Brand className={styles.imcTitle}>IMC</Navbar.Brand>
          <Navbar.Toggle className={styles.buttonToggle} aria-controls='responsive-navbar-nav'/>
          <Navbar.Collapse className={styles.button}>
            <Nav className="mx-auto">
              <Nav.Link className={styles.link} href="#inicio">INICIO</Nav.Link>
              <Nav.Link className={styles.link} href="#recomendaciones">RECOMENDACIONES</Nav.Link>
              <Nav.Link className={styles.link} href="#limitaciones">LIMITACIONES</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

  );
};

export default NavPage;







