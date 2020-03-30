<template>
  <div class="hello row">
    <div class="left col-6">
      <h1> {{title}} </h1>

      <div class="m-5">

      </div>
      <form @submit.prevent="addLink">
        <div class="form-group">
          <input class="form-control link-input" type="text" placeholder="Add a link" v-model="newLink">
        </div>
      </form>
      <ul>
        <li v-for="(link, index) in links" v-bind:key="index">
          {{link}}
          <button @click="removeLinks(index)" class="btn btn-primary pull-right">Remove</button>
        </li>
      </ul>
    </div>

    <div class="right col-6">
      <stats/>
    </div>
  </div>
</template>
<script>

import Stats from '@/components/Stats.vue'
import { mapState, mapMutations, mapActions } from 'vuex' 
// mapState helper này cho phép truy cập dữ liệu chứa trong state 
// mapMutations helper này để import mutation ADD_LINK, dành cho sự kiện đồng bộ
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      newLink: ''
    }
  },
  components: {
    Stats
  },
  computed: mapState([
    'title',
    'links'
  ]),
  methods: {
    ...mapMutations([
      'ADD_LINK'
    ]),
    ...mapActions([
      'removeLink'
    ]),
    // Gọi mutation 
    addLink: function() {
      this.ADD_LINK(this.newLink) // Gọi mutation này để truyền dữ liệu cho newLink
      this.newLink = ''
    },
    removeLinks(link) {
      this.removeLink(link)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
