import './index.css'
import Card from 'react-bootstrap/Card';

function NewsCard({ article }) {
  return (
    <Card className='news-card'>
      <Card.Header
        className='d-flex justify-content-between align-items-center'
      >
        <span>{article.source.name}</span>
        <span className='text-muted published-at'>
          {new Date(article.publishedAt).toLocaleString()}
        </span>   
      </Card.Header>
      <Card.Img 
        variant="top" 
        src={article.urlToImage} />
      <Card.Body>
        <Card.Title>
          {article.title}
        </Card.Title>
        <Card.Text 
          className='text-muted'
          style={{ textAlign: 'justify' }}
        >
          {article.description}
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