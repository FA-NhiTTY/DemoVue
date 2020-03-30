import Vue from 'vue'
import Vuex from 'vuex'
import products from '@/data_fake/products.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Vuex-Test',
    links: [
      'abc.com',
      'qwerty.com'
    ],
    cart: [],
    listProducts: products
  },
  getters: {
    countLinks: state => {
      return state.links.length
    },
    countCartProducts: state => {
      return state.cart.length 
    },
    countProducts: state => {
      return state.listProducts.length
    },
    countCart: state => {
      return state.cart.length
    },
    countTotalCart: state => {
      var cart = state.cart
      var total = 0
      _.forEach(cart, v => {
        total += v.price;
      });
      return total
    }
  },
  // dành cho các sự kiện đồng bộ
  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link)
    },

    REMOVE_LINK: (state, link)  => {
      state.links.splice(link, 1)
    },

    REMOVE_ALL: (state) => {
      state.links = []
    },

    ADD_CART: (state, product) => {
      state.cart.push(product)
    },

    REMOVE_PRODUCT: (state, product) => {
      state.cart.splice(product, 1)
    },

    REMOVE_CART: (state) => {
      state.cart = []
    }
  },
  // dành cho các sự kiện bất đồng bộ
  actions: {
    removeLink: (context, link) => {
      context.commit('REMOVE_LINK', link)
    },
    removeAll ({commit}) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('REMOVE_ALL')
          resolve()
        }, 1500)
      })
    },
    removeProduct: (context, product) => {
      context.commit('REMOVE_PRODUCT', product)
    },
    removeCart: ({commit}) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('REMOVE_CART')
          resolve()
        }, 1500)
      })
    }
  },
  modules: {
  }
})
