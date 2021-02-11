import products from "../products";

const initialState = {
    products: products,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
        return {
            ...state,
            products:[...state.products, action.payload.newProduct]
            }
        case "DELETE_PRODUCT":
        return {
            ...state,
            products: state.products.filter(
              (product) => product.id !== action.payload.productId
            ),
        }
        default: 
        return state;
    } 
}

export default reducer;