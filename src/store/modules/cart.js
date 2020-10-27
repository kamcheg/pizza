export default {
  namespaced: true,
  state: {
    // isVisiblePrompt: false,
    cart: []
  },
  getters: {
    cart: state => state.cart,
    total: state => state.cart.reduce((sum, i) => sum + i.price * i.quantity, 0),
    totalQty: state => state.cart.reduce((sum, i) => sum + i.quantity, 0),
    isVisiblePrompt: state => state.isVisiblePrompt
  },
  mutations: {
    addProductToCart(state, product_data) {
      const {id, title, quantity, selectedSize, selectedDough, img, price} = product_data
      const currentProduct = state.cart.find(product => product.id === id)

      if (!currentProduct) {
        state.cart.push({ id, title, quantity, selectedSize, selectedDough, img, price })
      } else {
        currentProduct.quantity++
        // state.isVisiblePrompt = true
      }
    },

    clearCart(state) {
      state.cart = []
    },

    deleteProductFromCart(state, id) {
      const index = state.cart.findIndex(product => product.id === id)
      state.cart.splice(index, 1)
    },

    changeQty(state, {id, num}) {
      const currentProduct = state.cart.find(product => product.id === id)

      if (currentProduct.quantity === 1 && num === -1) {return}
      currentProduct.quantity += num
    },

    resetCart(state) {
      state.cart = []
    }

  },
  actions: {

  },
}