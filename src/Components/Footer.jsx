import "./footer.css";
import { languageFooter } from '../Components/LanguageContent';
import { useState } from "react";

export default function Footer() {

  const anoActual = new Date().getFullYear();

  const [language, setLanguage] = useState(languageFooter.es);

  return (
    <footer>
      <div className="container">
        <p>&copy; {anoActual} By {languageFooter.autor}. {languageFooter.texto}.</p>
      </div>
      <div className="container">
        <img
          src="https://profile-counter.glitch.me/LandingPageEduDev/count.svg?"
          alt="Contador"
        />
      </div>
      <br></br>
    </footer>
  );
}

console.log(Date.now)
