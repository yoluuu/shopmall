export default {
    addOldProduct(state,payload) {
        payload.count += 1;
        console.log(state.shopCartProduct);
    },
    addNewProduct(state,payload) {
        state.shopCartProduct.push(payload);
        console.log(state.shopCartProduct);
    }
}