<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <router-link class="navbar-brand" to="/">Trang chủ</router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
      
          <ul class="nav">
            <li class="nav-item">
              <span class="nav-link">
                <router-link class="text-white" to="/ListProducts">Sản phẩm</router-link>
              </span>
            </li>

            <li class="nav-item">
              <span class="nav-link">
                <router-link class="text-white" to="/Cart">
                  Giỏ hàng <a-icon type="shopping-cart" />
                  <span class="badge badge-light"> {{countCart}} </span>
                </router-link>
              </span>
            </li>
          </ul>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex' // truy cập đc vào các getters

export default {
  computed: {
    ...mapGetters([
      'countCart'
    ])
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
