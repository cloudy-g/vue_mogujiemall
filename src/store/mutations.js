import {
  getIndexByiid
} from '@/common/utils';

export default {
  addCounter(state, payload) {
    state.cartList[payload].num++;
  },

  addProduct(state, payload) {
    state.cartList.push(payload.product);
    state.chosedList.push(payload.product);
    state.flagList.push(true);
  },

  inMoney(state, payload) {
    state.chosedList.push(payload);

    let index = getIndexByiid(state.cartList, payload);
    state.flagList.splice(index, 1, true);
  },

  deMoney(state, payload) {
    let index;
    index = getIndexByiid(state.chosedList, payload);
    state.chosedList.splice(index, 1);

    index = getIndexByiid(state.cartList, payload);
    state.flagList.splice(index, 1, false);
  },

  changeAll(state, payload) {
    state.flagList = state.flagList.map(val => payload);
    if (payload) {
      state.chosedList = [...state.cartList];
    } else {
      state.chosedList = []
    }
  }
}
