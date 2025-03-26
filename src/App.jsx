import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Container } from 'react-bootstrap'
import NavbarComponent from './components/Navbar'
import NewsList from './components/NewsList';
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <NavbarComponent />
      <Container className='text-center'>
        <h1 className='display-3'>DailyNews</h1>
        <p className='lead'>Stay Informed, Stay Ahead</p>
        <NewsList />
      </Container>
    </Provider>
  )
}

export default App
