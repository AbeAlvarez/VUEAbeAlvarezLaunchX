import { createStore } from 'vuex'

export default createStore({
  state: {
    productos:[],
    carrito: {}
  },
  getters: {
  },
  mutations: {
    setProducto (state, payload){
      state.productos = payload
      console.log(state.productos)
    },

  },
  actions: {
    async fetchData ({ commit }) {
      try{
        const res = await fetch('api.json')
        const data = await res.json()
        commit('setProducto', data)
      } catch (error){
        console.log(error)
      }
    },
    itemCar({commit, state}, producto){
      state.carrito.hasOwnProperty(producto.id)
        ? producto.cantidad = state.carrito[producto.id].cantidad + 1
        :producto.cantidad = 1
      commit('setCarrito', producto)
    }
  },
  modules: {
  }
})
