import React from 'react';
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import products from '../../assets/javaScript/products';
import Rating from '../../components/Rating/Rating';
const ProductScreen = (props) => {

    const productParam = useParams()
    const product = products.find(storedProduct => storedProduct._id === productParam.productId)
    return (
        <div>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={require(`../../assets/images/productImage/${product.image}`)} alt={product.name} fluid />
                </Col>

                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={`#FF9529`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: ${product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col md={3} className='my-3'>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button className='btn btn-block' disabled={product.countInStock === 0} type='button'>Add to Cart</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>

            </Row>
        </div >
    )
}

export default ProductScreen