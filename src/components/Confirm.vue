<template>
  <div class="confirm container">
    <div class="m-5">
      <h1>Xác nhận thông tin</h1>

      <b-form @submit="onSubmit" @reset="onReset" class="text-left">
        <b-form-group id="input-group-1" label="Email:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Nhập email"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Họ Tên:" label-for="input-2">
          <b-form-input id="input-2" v-model="form.name" required placeholder="Nhập họ tên"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Giới tính:" label-for="input-3">
          <b-form-select id="input-3" v-model="form.gender" :options="genderList" required></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-4" label="Địa chỉ:" label-for="input-4">
          <b-form-input id="input-4" v-model="form.address" required placeholder="Nhập địa chỉ"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Số điện thoại:" label-for="input-4">
          <b-form-input id="input-4" v-model="form.tel" required placeholder="Nhập số điện thoại"></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Xác nhận</b-button>
        <b-button type="reset" variant="outline-dark" class="ml-3">Hủy</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions} from "vuex";

export default {
  name: "Confirm",
  data() {
    return {
      total: 0,
      form: {
        email: "",
        name: "",
        gender: null,
        address: "",
        tel: ""
      },
      genderList: ["Nam", "Nữ"]
    };
  },
  mounted() {},
  methods: {
    ...mapMutations(["REMOVE_ALL"]),
    ...mapActions(["removeCart"]),

    onSubmit(evt) {
      evt.preventDefault();
      // alert(JSON.stringify(this.form))
      this.removeCart().then(() => {
        this.$router.push({ name: "Success" });
      });
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.gender = null;
      this.form.checked = [];
    }
  }
};
</script>

<style scoped>
.font-700 {
  font-weight: 700;
}
</style>