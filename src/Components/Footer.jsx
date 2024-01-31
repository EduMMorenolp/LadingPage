import "./footer.css";
import { languageFooter } from '../Components/LanguageContent';

export default function Footer() {

  const anoActual = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <p>&copy; {anoActual} By {languageFooter.autor }. Todos los derechos reservados.</p>
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
