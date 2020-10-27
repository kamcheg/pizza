export default {
  namespaced: true,
  state: {
    sortMethods: ['популярности', 'цене', 'алфавиту'],
    chosenIndex: 0
  },
  getters: {
    sortMethods: state => state.sortMethods,
    chosenIndex: state => state.chosenIndex,
    chosenValue: state => state.sortMethods[state.chosenIndex]
  },
  mutations: {
    setChosen(state, {rootState, index}) {
      state.chosenIndex = index

      if (state.sortMethods[index] === 'популярности') {
        rootState.products.sort((a,b) => a.rating - b.rating)
      } else if (state.sortMethods[index] === 'цене') {
        rootState.products.sort((a,b) => a.price - b.price)
      } else if (state.sortMethods[index] === 'алфавиту') {
        rootState.products.sort((a,b) => a.title > b.title ? 1 : -1)
      }
    }
  },
  actions: {
    setChosen({ commit, rootState }, index) {
      commit('setChosen', {rootState, index})
    }
  },
}