import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navvar.css";
import { useEffect, useState } from "react";

import { languageNavvar } from "../Components/LanguageContent";

export default function Navvar(idioma, ) {
  
  const handleNavLinkClick = (sectionName) => {
  };

  const [language, setLanguage] = useState(languageNavvar.esp);

  useEffect(() => {
    if (idioma && idioma.idioma && languageNavvar[idioma.idioma]) {
      setLanguage(languageNavvar[idioma.idioma]);
    }
  }, [idioma]);

  return (
    <Navbar expand="lg" className="bg-body">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="custom-collapse">
          <Nav.Link onClick={() => handleNavLinkClick("Inicio")}>
            {language.inicio}
          </Nav.Link>
          <Nav.Link onClick={() => handleNavLinkClick("Habilidades")}>
            {language.habilidades}
          </Nav.Link>
          <Nav.Link onClick={() => handleNavLinkClick("Proyectos")}>
            {language.proyectos}
          </Nav.Link>
          <Nav.Link onClick={() => handleNavLinkClick("Contacto")}>
            {language.contacto}
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
