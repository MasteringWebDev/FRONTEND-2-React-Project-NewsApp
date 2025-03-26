import { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap'
import NewsCard from './NewsCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../store/actions/news'

const NewsList = () => {
  const news = useSelector((state) => state.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchNews())
  }, [])

  return (
    <Row>
      {news.map((article, index) => (
        <Col 
          key={index}
          lg={3} md={6} xs={12} 
          className='mt-3'
        >
          <NewsCard article={article} />
        </Col>
      ))}
    </Row>
  )
}

export default NewsList