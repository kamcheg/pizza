export default {
  namespaced: true,
  state: {
    toOrderPopup: false,
  },
  getters: {
    toOrderPopup: state => state.toOrderPopup
  },
  mutations: {
    closePopup(state, popupName) {
      state[popupName] = false
    },
    openPopup(state, popupName) {
      state[popupName] = true
    }
  },
  actions: {

  },
}