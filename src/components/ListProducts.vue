<template>
  <div class="m-5 container home">
    <p v-if="listProducts.length">Tổng số: {{listProducts.length}} sản phẩm</p>
    <div class="row my-5">
      <div class="col-sm-3" v-for="product in listProducts" :key="product.id">
        <a-card hoverable style="width: 240px">
          <img
            :src="product.imgLink"
            class="card-img-top"
            :alt="product.name"
            style="max-height: 100%; max-width: 100%;"
            slot="cover"
          />
          <div class="ant-card-meta">
            <div class="ant-card-meta-detail">
              <div class="ant-card-meta-detail">
                <div class="ant-card-meta-title" style="white-space: normal;"> {{product.name}} </div>
                <div class="ant-card-meta-description">
                  <p>{{product.price}}</p>
                  <button class="btn btn-light" @click="addToCart(product)">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </a-card>
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
      alert("Thêm vào giỏ hàng thành công.");
      // }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ant-card-meta-title {
  white-space: normal !important;
}

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
