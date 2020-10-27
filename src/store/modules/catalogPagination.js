export default {
  namespaced: true,
  state: {
    perPage: 4,
    currentPageNumber: 1,
    productsQty: 1
  },
  getters: {
    perPage: state => state.perPage,
    currentPageNumber: state => state.currentPageNumber,
    pagesQty: state => Math.ceil(state.productsQty / state.perPage)
  },
  mutations: {
    setProductsQty(state, payload) {
      state.productsQty = payload
    },
    changePageNumber(state, {getters, payload}) {
      const {prev, next, pageNum} = payload
      if (prev && state.currentPageNumber !== 1) { state.currentPageNumber-- }
      else if (next && state.currentPageNumber !== getters.pagesQty) { state.currentPageNumber++ }
      else if (pageNum) { state.currentPageNumber = pageNum }
    },
    zeroingCurrentPage(state) {
      state.currentPageNumber = 1
    }
  },
  actions: {
    setPageNumber({ commit, getters }, payload) {
      commit('changePageNumber', {getters, payload})
    },
  }
}