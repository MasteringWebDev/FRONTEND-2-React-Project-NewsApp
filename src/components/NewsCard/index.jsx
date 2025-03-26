import './index.css'
import Card from 'react-bootstrap/Card';

function NewsCard({ article }) {
  const publishedAt = new Date(article.publishedAt).toLocaleDateString("en-US", { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' })

  return (
    <Card className='news-card'>
      <Card.Header
        className='d-flex justify-content-between align-items-center'
      >
        <span>{article.source.name}</span>
        <span className='text-muted published-at'>
          {publishedAt}
        </span>   
      </Card.Header>
      <Card.Img 
        variant="top" 
        src={article.urlToImage}
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
            article.description.length <= 150
              ? article.description
              : `${article.description.slice(0, 150)}...`
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