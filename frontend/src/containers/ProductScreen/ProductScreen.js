import { useEffect } from 'react';
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { SpinnerDotted } from 'spinners-react';
import { detailsPorduct } from '../../actions/productActions';
import Error404 from '../../components/Error/Error404/Error404';
import Rating from '../../components/Rating/Rating';

const ProductScreen = (props) => {

    const productParam = useParams()
    const disptach = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
        disptach(detailsPorduct(productParam.productId))
    }, [disptach, productParam])

    return (
        <>
            <div>
                {error ? null : <Link to='/' className='btn btn-light my-3'>Go Back</Link>}
                {loading ? <SpinnerDotted size={'100px'} style={{ display: 'block', margin: 'auto' }} color={'black'} />
                    : error ? <Error404 />
                        :
                        <Row>
                            <Col md={6}>
                                <Image src={`http://localhost:8000${product.image}`} alt={product.name} fluid />
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
                }
            </div >
        </>
    )

}

export default ProductScreen