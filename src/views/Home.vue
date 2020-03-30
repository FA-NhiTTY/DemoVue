<template>
  <div class="home">
    <router-link :to="{name: 'ListProducts'}">ListProducts</router-link>
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
