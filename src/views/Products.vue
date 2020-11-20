<template>
<v-card outlined elevation="2">
  <v-card-title class="title"> Products</v-card-title>
  <div v-for="product in theProducts" :key="product.id">
      <div class="displayFlex">
        <th class="metaData"> Description of product {{product.id}}:</th>
        <v-text-field
        class="textField"
        label="Description"
        :value="product.description"
      ></v-text-field>
      </div>
      <div class="displayFlex">
        <th class="name"> Name of product: {{product.id}}</th>
        <v-text-field
        class="textFieldName"
        label="Name"
        :value="product.name"
      ></v-text-field>
        </div>
        <div class="displayFlex">
        <th class="metaData"> Total price of product {{product.id}}: </th>
        <div> {{PriceOfProduct}} </div>
      </div>
      <v-divider/>
      </div>
    </v-card>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'Products',
  data() {
    return {

    };
  },
  computed: {
    ...mapState((['products', 'contracts'])),
    theProducts() {
      return this.products.list;
    },
    PriceOfProduct() {
      let a = 0;
      const selectedProduct = this.products.list.map((p) => {
        this.contracts.list.map((c, index) => {
          if (p.id === c.productId && c[index] === c[index + 1]) {
            a += c[index] + c[index + 1];
            console.log(a);
            return a;
          }
          return null;
        });
        return null;
      });
      return selectedProduct;
    },
  },
};
</script>
<style lang="scss" scoped>
.displayFlex {
  display: flex;
}
.title {
  font-weight: 900;
  color: blue;
}
.metaData {
  font-weight: 700;
  margin-top: 24px;
  color: black;
  padding: 24px;
}
.name {
  font-weight: 700;
  margin-top: 20px;
  color: black;
  padding: 24px;
}
.textField {
  max-width: 700px;
  margin-top: 18px;
}
.textFieldName {
  max-width: 700px;
  margin-top: 18px;
  margin-left: 46px;
}
.displayFlex {
  display: flex;
}
</style>
