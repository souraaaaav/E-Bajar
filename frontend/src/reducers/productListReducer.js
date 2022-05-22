import * as productActionType from '../constants/productConstants'

export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case productActionType.PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] }

        case productActionType.PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload }

        case productActionType.PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}