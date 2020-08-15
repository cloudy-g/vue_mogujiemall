export default {
  getSumMoney(state) {
    return state.chosedList.reduce((sum, item) => {
      return sum + item.lowNowPrice * item.num;
    }, 0)

  },
  calcNum(state) {
    return state.chosedList.reduce((sum, item) => {
      return sum + item.num;
    }, 0);
  }
}
