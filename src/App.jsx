import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Container } from 'react-bootstrap'
import NavbarComponent from './components/Navbar'
import NewsList from './components/NewsList';

function App() {
  return (
    <>
      <NavbarComponent />
      <Container className='text-center'>
        <h1 className='display-3'>DailyNews</h1>
        <p className='lead'>Stay Informed, Stay Ahead</p>
        <NewsList />
      </Container>
    </>
  )
}

export default App
