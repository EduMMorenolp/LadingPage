import "./footer.css";
import { languageFooter } from '../Components/LanguageContent';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2023 By {languageFooter.autor }. Todos los derechos reservados.</p>
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
