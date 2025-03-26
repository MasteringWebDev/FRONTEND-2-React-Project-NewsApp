import './index.css'
import Card from 'react-bootstrap/Card';

function NewsCard({ article }) {
  const fallbackImage = 'https://img.freepik.com/premium-vector/newspaper-with-breaking-news-scraps-newspaper-pages-background-urgent-news_47243-1756.jpg'
  
  const fallbackDescription = `
    Stay updated with the latest details! Click 'Read More' to explore the full news story and stay informed
  `

  return (
    <Card className='news-card'>
      <Card.Header
        className='d-flex justify-content-between align-items-center'
      >
        <span>{article.source.name}</span>
        <span className='text-muted published-at'>
          {new Date(article.publishedAt).toLocaleTimeString()}
        </span>   
      </Card.Header>
      <Card.Img 
        variant="top" 
        src={article.urlToImage || fallbackImage}
        className='news-img'
      />
      <Card.Body>
        <Card.Title className='news-title'>
          {
            article.title.length <= 80
              ? article.title
              : `${article.title.slice(0, 80)}...`
          }
        </Card.Title>
        <Card.Text 
          className='text-muted news-content'
          style={{ textAlign: 'justify' }}
        >
          {
            article.description && article.description.length > 150
              ? `${article.description.slice(0, 150)}...`
              : (article.description || fallbackDescription) 
          }
        </Card.Text>
        <a 
          variant="primary"
          className='btn btn-primary w-100'
          href={article.url}
          target='_blank'
        >
          Read more
        </a>
      </Card.Body>
    </Card>
  );
}

export default NewsCard;