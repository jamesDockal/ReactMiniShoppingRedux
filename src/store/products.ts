import {products} from '../products.json'

interface Action {
    type: string,
    payload: any
}

function productsReducer( state = products, action: Action ) {
    switch(action.type){
        case 'ALL_PRODUCTS':
            return state
            
        case 'GET_CHECKED':
            return state.map(product =>
                product.id === action.payload
                    ? { ...product, checked: !product.checked }
                    : product
                )
        default: 
            return state
    }
}
export default productsReducer