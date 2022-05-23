import axios from 'axios'
import * as actionType from '../constants/productConstants'

export const listProducts = () => async (dispatch) => {
    dispatch({ type: actionType.PRODUCT_LIST_REQUEST })
    axios.get(`http://127.0.0.1:8000/api/products/`)
        .then(res => {
            dispatch({
                type: actionType.PRODUCT_LIST_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err.response, 'error')
            dispatch({
                type: actionType.PRODUCT_LIST_FAIL,
                payload: err.response.statusText,
            })
        })
}

export const detailsPorduct = (id) => async (dispatch) => {
    dispatch({ type: actionType.PRODUCT_DETAILS_REQUEST })
    axios.get(`http://127.0.0.1:8000/api/products/${id}`)
        .then(res => {
            dispatch({
                type: actionType.PRODUCT_DETAILS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err.response, 'error')
            dispatch({
                type: actionType.PRODUCT_DETAILS_FAIL,
                payload: err.response.statusText,
            })
        })
}