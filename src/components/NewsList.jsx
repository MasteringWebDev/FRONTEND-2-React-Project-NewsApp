import { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap'
import NewsCard from './NewsCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../store/actions/news'
import { useParams } from 'react-router-dom';

const NewsList = ({ categories, defaultCategory }) => {
  const news = useSelector((state) => state.data)
  const dispatch = useDispatch()
  const { category } = useParams()

  useEffect(() => {
    dispatch(fetchNews(category, defaultCategory))
  }, [category])

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