import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
// import products from '../../assets/javaScript/products'
import Product from '../../components/Product/Product'

const HomeScreen = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/products/`)
            .then(res => {
                setProducts(res.data)
                console.log('res', res)
            })
            .catch(err => {
                alert('hukka')
                console.log(err);
            })
    }, [])


    return (
        <div>
            <h1>Latest Product</h1>
            <Row>
                {
                    products.map(product => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
                            <Product product={product} />
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default HomeScreen