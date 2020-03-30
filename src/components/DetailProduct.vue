<template>
  <div class="detail-product">
    <div class="container my-5">
      <h1 class="text-primary text-center">{{title}}</h1>
      <hr />
      <div class="row" v-if="product !== null">
        <div class="col-sm-4">
          <div class="card">
            <img
              :src="product.imgLink"
              class="card-img-top"
              :alt="product.name"
              style="max-height: 100%; max-width: 100%;"
            />
          </div>
        </div>

        <div class="col-sm-5">
          <h5>{{product.name}}</h5>
          <p>Giá niêm yết: {{product.price}}</p>
          <p class="text-larger text-danger">
            <strong>Giá bán: {{product.price*(100-product.discount)/100}}</strong>
            <span class="badge badge-danger">- {{product.discount}} %</span>
          </p>
          <div class="info text-left">
            <p class="border-bottom">Thông số kỹ thuật:</p>

            <div class="info-item">
              <p class="text-key">Màu sắc:</p>
              <p class="text-value">{{product.info.color}}</p>
            </div>
          </div>

          <div class="import-cart text-left">
            <button class="btn btn-light" @click="addToCart()">
              Add to cart
              <i class="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import _ from "lodash";

export default {
  name: "DetailProduct",
  data() {
    return {
      title: "Chi tiết sản phẩm",
      product: null
    };
  },
  computed: mapState(["listProducts"]),
  mounted() {
    this.product = _.find(this.listProducts, (v) => {
      return v.id === this.$route.params.Pid
    })
    console.log(this.product)
  },
  methods: {
    ...mapMutations(["ADD_CART"]),
    addToCart() {
      this.ADD_CART(this.product);
      alert("Add cart successful.");
      // console.log( this.$route.params.Pid)
      // alert("Thành công, mã sp: ", this.$route.params.Pid);
    }
  }
};
</script>

<style scoped>
.text-larger {
  font-size: larger;
}

.info-item {
  align-items: left;
  display: flex;
}

.text-key {
  width: 135px;
}

.text-value {
  flex: 1;
}
</style>
