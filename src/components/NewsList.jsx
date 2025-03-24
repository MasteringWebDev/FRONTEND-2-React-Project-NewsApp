import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap'
import NewsCard from './NewsCard';

const API_ENDPOINT = 'https://newsapi.org/v2/top-headlines'
const API_KEY = 'f40203cc39184176a487521beaf0836b'

const NewsList = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = async () => {
    try {
      const res = await fetch(`${API_ENDPOINT}?apiKey=${API_KEY}&country=us`)
      const jsonRes = await res.json()
      setNews(jsonRes.articles)
    } catch (error) {
      console.log(error)
    }
  }

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