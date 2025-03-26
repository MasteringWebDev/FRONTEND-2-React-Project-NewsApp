import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Container } from 'react-bootstrap'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from './components/Navbar'
import CategoryNav from './components/CategoryNav';
import NewsList from './components/NewsList';

function App() {
  const categories = ['General', 'Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology']
  const defaultCategory = categories[0]

  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavbarComponent />
        <Container className='text-center'>
          <h1 className='display-3'>DailyNews</h1>
          <p className='lead'>Stay Informed, Stay Ahead</p>
          <CategoryNav
            categories={categories} 
            defaultCategory={defaultCategory} 
          />
          <Routes>
            <Route 
              path="/" 
              element={<NewsList defaultCategory={defaultCategory} />} 
            />
            <Route 
              path="/categories/:category" 
              element={<NewsList defaultCategory={defaultCategory} />} 
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </Provider>
  )
}

export default App
