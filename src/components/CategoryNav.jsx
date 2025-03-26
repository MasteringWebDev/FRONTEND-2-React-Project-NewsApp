import { Nav } from 'react-bootstrap'
import { Link, useLocation } from "react-router-dom";

const CategoryNav = ({ categories , defaultCategory }) => {
  let location = useLocation()

  return (
    <div>
      <Nav 
        fill 
        variant="tabs" 
      >
        {categories.map((category, index) => (
          <Nav.Item key={index}>
            <Nav.Link 
              eventKey={category}
              as={Link}
              to={`/categories/${category.toLowerCase()}`}
              active={
                location.pathname === `/categories/${category.toLowerCase()}` || (location.pathname === '/' && category === defaultCategory)
              }
            >
              {category}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  )
}

export default CategoryNav