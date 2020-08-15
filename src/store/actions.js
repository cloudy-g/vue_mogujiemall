export default {
  addCart({
    state,
    commit
  }, payload) {
    return new Promise((resolve, reject) => {
      let flag = false;
      state.cartList.some((el, index) => {
        if (el.iid == payload.product.iid) {
          flag = true;
          commit('addCounter', index);
          resolve('当前商品数量 + 1 ~');
        }
        return flag;
      });

      if (!flag) {
        commit('addProduct', payload);
        resolve('添加一件商品~');
      }
    })
  }
}
