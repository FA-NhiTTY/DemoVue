<template>
  <div class="m-5 container home">
    <p v-if="listProducts.length">Tổng số: {{listProducts.length}} sản phẩm</p>
    <div class="row my-5">
      <div class="col-sm-3" v-for="product in listProducts" :key="product.id">
        <div class="card">
          <img
            :src="product.imgLink"
            class="card-img-top"
            :alt="product.name"
            style="max-height: 100%; max-width: 100%;"
          />
          <div class="card-body">
            <h5 @click="goTodetail(product.id)" class="card-title">{{product.name}}</h5>
            <button class="btn btn-light" @click="addToCart(product)">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import _ from "lodash";

// mapState helper này cho phép truy cập dữ liệu chứa trong state
// mapMutations helper này để import mutation ADD_LINK, dành cho sự kiện đồng bộ
export default {
  name: "ListProducts",
  props: {
    msg: String
  },
  data() {
    return {};
  },
  computed: mapState(["listProducts", "cart"]),
  methods: {
    ...mapMutations(["ADD_CART"]),
    goTodetail(proId) {
      this.$router.push({ name: "DetailProduct", params: { Pid: proId } });
    },
    // Gọi mutation
    addToCart(pro) {
      // if (_.isEmpty(cartProId) || !_.includes(this.cartProId, proId)) {
      this.ADD_CART(pro);
      alert("Add cart successful.");
      // }
    }
  }
};
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
