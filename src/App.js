// Componentes
import Navvar from './Components/Navvar';
import Footer from './Components/Footer';
import Main from './Components/Main';
// Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

    return (
        <>
            <Navvar idioma="eng"/>
            <Main />
            <Footer idioma="esp"/>
        </>
    )
}

export default App;