import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navvar(onSectionChange) {

  const handleNavLinkClick = (sectionName) => {
    onSectionChange(sectionName);
  };
  
  const languageContent = { "inicio": "Inicio", "habilidades": "Habilidades", "proyectos": "Proyectos", "certificados": "Certificados", "contacto": "Contacto" }

  return (
    <Navbar expand="lg" className="bg-body">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="custom-collapse">
          <Nav.Link onClick={() => handleNavLinkClick("Inicio")}>
            {languageContent.inicio}
          </Nav.Link>
          <Nav.Link onClick={() => handleNavLinkClick("Habilidades")}>
            {languageContent.habilidades}
          </Nav.Link>
          <Nav.Link onClick={() => handleNavLinkClick("Proyectos")}>
            {languageContent.proyectos}
          </Nav.Link>
          <Nav.Link onClick={() => handleNavLinkClick("Certificados")}>
            {languageContent.certificados}
          </Nav.Link>
          <Nav.Link onClick={() => handleNavLinkClick("Contacto")}>
            {languageContent.contacto}
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
