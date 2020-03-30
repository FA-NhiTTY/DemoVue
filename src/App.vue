<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <b-navbar toggleable="lg" type="dark" variant="info">
      <router-link class="navbar-brand" to="/">Home</router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
      
          <ul class="nav">
            <li class="nav-item">
              <span class="nav-link">
                <router-link class="text-white" to="/ListProducts">List Products</router-link>
              </span>
            </li>

            <li class="nav-item">
              <span class="nav-link">
                <router-link class="text-white" to="/Cart">
                  Cart
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
