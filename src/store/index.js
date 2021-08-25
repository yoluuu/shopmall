import Vue from 'vue'
import Vuex from 'vuex'
// import mutations from "./mutations";
// import actions from "./actions";

Vue.use(Vuex)

const state = {
  shopCartProduct: [],
}

export default new Vuex.Store({
  state,
  mutations: {
    addOldProduct(state,payload) {
      payload.count += 1;
    },
    addNewProduct(state,payload) {
      //添加进入购物车,设置商品为被选择状态
      payload.isSelected = true;
      state.shopCartProduct.push(payload);
    }
  },
  actions: {
    addCart(context, payload) {
      return new Promise((resolve,reject) => {
        let oldProduct = context.state.shopCartProduct.find((item) => payload.iid === item.iid);
        if(oldProduct) {
          context.commit('addOldProduct', oldProduct);
          resolve('添加成功，在购物车等亲~');
        }else {
          context.commit('addNewProduct', payload);
          resolve('添加成功，在购物车等亲~');
          // resolve('成功,在购物车等亲~');
        }
      })

    },
  },
  modules: {
  }
})
