<template>
  <div class="detail-product container">
    <div class="my-5">
      <h2>Giỏ hàng</h2>
      <div class="mt-5">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Sản phẩm</th>
                <th>Giá niêm yết</th>
                <th>Giá đã giảm</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(product, index) in cart" :key="product.id">
                <td>
                  <button class="btn btn-link" @click="goTodetail(product.id)">{{product.name}}</button>
                </td>
                <td>{{product.price}}</td>
                <td>{{product.price*(100 - product.discount)/100}}</td>
                <td>1</td>
                <td>{{product.price*(100 - product.discount)/100}}</td>
                <td>
                  <button @click="removeProducts(index)">Xóa</button>
                </td>
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <td>
                  <p class="font-700">Tổng giá trị đơn hàng:</p>
                </td>
                <td></td>
                <td></td>
                <td>{{cart.length}}</td>
                <td>
                  <p class="font-700">{{countTotalCart}}</p>
                </td>
              </tr>
            </tfoot>
          </table>

          <div class="text-right my-3">
            <button class="btn btn-dark" @click="removeAllCart">Xóa giỏ hàng</button>
          </div>
          <div class="text-right">
            <router-link class="btn btn-primary text-white" to="/Confirm">Đặt hàng</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import _ from "lodash";

export default {
  name: "Cart",
  computed: {
    ...mapState(["listProducts", "cart"]),
    ...mapGetters(["countTotalCart"])
  },
  data() {
    return {
      total: 0
    };
  },
  mounted() {
    _.forEach(this.cart, v => {
      this.total += v.price;
    });
  },
  methods: {
    ...mapMutations(["ADD_CART"]),
    ...mapActions(["removeProduct"]),
    ...mapMutations(["REMOVE_ALL"]),
    ...mapActions(["removeCart"]),
    removeAllCart() {
      if (confirm("Bạn có muốn xóa hết giỏ hàng?")) {
        this.removeCart().then(() => {
          alert("Giỏ hàng đã được xóa");
        });
      }
    },
    // Gọi mutation
    removeProducts(pro) {
      this.removeProduct(pro);
    },
    goTodetail(proId) {
      this.$router.push({ name: "DetailProduct", params: { Pid: proId } });
    }
  }
};
</script>

<style scoped>
.font-700 {
  font-weight: 700;
}
</style>
