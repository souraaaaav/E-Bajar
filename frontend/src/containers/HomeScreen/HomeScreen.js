
import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../actions/productActions'
import Error404 from '../../components/Error/Error404/Error404'
import Product from '../../components/Product/Product'

const HomeScreen = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList)
    const { error, loading, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div>
            {error ? null : <h1>Latest Product</h1>}

            {loading ? <h2>Loading...</h2>
                : error ? <Error404 />
                    :
                    <Row>
                        {products.map(product => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
                                <Product product={product} />
                            </Col>
                        ))}
                    </Row>
            }

        </div>
    )
}

export default HomeScreen