export default {
    addCart(context, payload) {
        let oldProduct = context.state.shopCartProduct.find((item) => payload.iid === item.iid);
        if(oldProduct) {
            context.commit('addOldProduct', oldProduct)
        }else {
            context.commit('addNewProduct', payload);
        }
    },
}