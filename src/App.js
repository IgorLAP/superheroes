import './App.css';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import Routes from './Routes';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
