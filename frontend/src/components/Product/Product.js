import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../Rating/Rating'
import './Product.css'

const Product = ({ product }) => {

    return (
        <Card className='my-3 p-3 rounded'>
            <Card.Body>
                <Link to={`/product/${product._id}`} style={{ textDecoration: "none" }}>
                    <Card.Title as="div">
                        <h5 style={{ color: '#212529' }}>{product.name}</h5>
                    </Card.Title>
                </Link>
                <Card.Text as="div">
                    <div className="my-3">
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={`#FF9529`} />
                    </div>
                </Card.Text>
                <Card.Text as="h3">
                    ${product.price}
                </Card.Text>

            </Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={require(`../../assets/images/productImage/${product.image}`)} />
            </Link>
        </Card>
    )
}

export default Product