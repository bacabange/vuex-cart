// initial state
const state = () => ({
  items: [],
  isLoading: false,
  totalPrice: 0
})

// getters
const getters = {
  cartTotalPrice: (state) => {
    return state.items.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}

// actions
const actions = {
  addProductToCart ({ state, commit }, product) {
    const cartItem = state.items.find(item => item.id === product.id)
    if (!cartItem) {
      commit('pushProductToCart', product)
    } else {
      commit('incrementItemQuantity', product)
    }
  },

  clearCart ({ commit }) {
    commit('setCartItems', { items: [] })
  },

  removeItem ({ commit }, product) {
    commit('removeItem', product)
  }
}

// mutations
const mutations = {
  pushProductToCart (state, product) {
    state.items.push({...product, quantity: 1})
  },

  incrementItemQuantity (state, product) {
    const cartItem = state.items.find(item => item.id === product.id)
    cartItem.quantity = cartItem.quantity + 1
  },

  removeItem (state, product) {
    state.items = state.items.filter(item => item.id !== product.id)
  },

  setCartItems (state, { items }) {
    state.items = items
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
