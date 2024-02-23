import Navbar from './components/Navbar/navbar'
import Footer from './components/Footer/footer';
import DataRetrieval from './components/Games/FetchData/DataRetrieval';
import './App.css';
// import { Container } from 'react-bootstrap';
function App() {
  return (
    <>

      <Navbar />  
      <DataRetrieval />
      <Footer />

    </>
      
  )
}

export default App;
