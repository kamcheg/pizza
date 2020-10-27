export default {
  namespaced: true,
  state: {
    pizzaTypes: [
      {
        id: 'all',
        label: 'Все'
      },
      {
        id: 'meat',
        label: 'Мясные'
      },
      {
        id: 'vegetarian',
        label: 'Вегетарианские'
      },
      {
        id: 'grill',
        label: 'Гриль'
      },
      {
        id: 'spicy',
        label: 'Острые'
      },
      // {
      //   id: 'closed',
      //   label: 'Закрытые'
      // },
    ],
    chosenId: 'all'
  },
  getters: {
    pizzaTypes: state => state.pizzaTypes,
    chosenLabel: state => {
      const currentType = state.pizzaTypes.find(item => item.id === state.chosenId)
      return currentType.label
    },
    chosenId: state => state.chosenId
  },
  mutations: {
    setChosen(state, type) {
      state.chosenId = type
    }
  },
  actions: {

  },
}