import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navvar.css";

import { languageNavvar } from "../Components/LanguageContent";

export default function Navvar(onSectionChange, language) {
  const handleNavLinkClick = (sectionName) => {
    onSectionChange(sectionName);
  };

  return (
    <Navbar expand="lg" className="bg-body">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="custom-collapse">
          <Nav.Link onClick={() => handleNavLinkClick("Inicio")}>
            {languageNavvar.inicio}
          </Nav.Link>
          <Nav.Link onClick={() => handleNavLinkClick("Habilidades")}>
            {languageNavvar.habilidades}
          </Nav.Link>
          <Nav.Link onClick={() => handleNavLinkClick("Proyectos")}>
            {languageNavvar.proyectos}
          </Nav.Link>
          <Nav.Link onClick={() => handleNavLinkClick("Contacto")}>
            {languageNavvar.contacto}
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
