import { useEffect } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap'
import NewsCard from './NewsCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../store/actions/news'
import { useParams } from 'react-router-dom';

const NewsList = ({ defaultCategory }) => {
  const news = useSelector((state) => state.data)
  const isLoading = useSelector((state) => state.loading)
  const dispatch = useDispatch()
  const { category } = useParams()

  useEffect(() => {
    dispatch(fetchNews(category, defaultCategory))
  }, [category])

  return (
    <Row>
      {!isLoading ?
        news.map((article, index) => (
          <Col 
            key={index}
            lg={3} md={6} xs={12} 
            className='mt-3'
          >
            <NewsCard article={article} />
          </Col>
        )) :
        <div 
          className='d-flex justify-content-center align-items-center'
          style={{ height: '10em' }}
        >
          <Spinner animation="border" />
        </div>
      }
    </Row>
  )
}

export default NewsList