import axios from 'axios'
import * as productActionType from '../constants/productConstants'

export const listProducts = () => async (dispatch) => {
    dispatch({ type: productActionType.PRODUCT_LIST_REQUEST })
    axios.get(`http://127.0.0.1:8000/api/products/`)
        .then(res => {
            dispatch({
                type: productActionType.PRODUCT_LIST_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err.response, 'error')
            dispatch({
                type: productActionType.PRODUCT_LIST_FAIL,
                payload: err.response.statusText,
            })
        })
}