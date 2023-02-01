import './styles/App.css';
import CallToAction from './components/CallToAction';
import NavBar from './components/NavBar';
import Feedback from './components/Feedback';
import Footer from './components/Footer';

function App() {
  return (
    <main className="main">
      <NavBar />
      <CallToAction />
      <Feedback />
      <Footer />
    </main>
  );
}

export default App;
