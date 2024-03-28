import { languageFooter } from '../Components/LanguageContent';
import { useState, useEffect } from "react";

export default function Footer(idioma) {

  const anoActual = new Date().getFullYear();

  const [language, setLanguage] = useState(languageFooter.esp);

  useEffect(() => {
    if (idioma && idioma.idioma && languageFooter[idioma.idioma]) {
      setLanguage(languageFooter[idioma.idioma]);
    }
  }, [idioma]);

  return (
    <footer className="bg-slate-500 rounded-lg">
      <div className="container">
        <p>&copy; {anoActual} By {language.autor}. {language.texto}.</p>
      </div>
        <img className="w-22 " 
          src="https://profile-counter.glitch.me/LandingPageEduDev/count.svg?"
          alt="Contador"
        />
      <br></br>
    </footer>
  );
}

console.log(Date.now)
