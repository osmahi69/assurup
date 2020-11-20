<template>
<v-card outlined elevation="2">
  <v-card-title class="title"> Products</v-card-title>
  <div v-for="(product, index) in theProducts" :key="product.id">
      <div class="displayFlex">
        <th class="metaData"> Description of product {{product.id}}:</th>
        <v-text-field
        class="textField"
        label="Description"
        :value="product.description"
        @change="updateDescription($event, product)"
      ></v-text-field>
      </div>
      <div class="displayFlex">
        <th class="name"> Name of product: {{product.id}}</th>
        <v-text-field
        class="textFieldName"
        label="Name"
        :value="product.name"
        @change="updateName($event, product)"
      ></v-text-field>
        </div>
        <div class="displayFlex">
        <th class="metaData"> Total price of product {{product.id}}: </th>
        <span class="price"> {{ PriceOfProduct[index] }}</span>
      </div>
      <v-divider/>
      </div>
    </v-card>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'Products',
  methods: {
    updateDescription(newValue, product) {
      const updatedProduct = { ...product, description: newValue };
      this.$store.commit('products/UPDATE_PRODUCT', updatedProduct);
    },
    updateName(newValue, product) {
      const updatedProduct = { ...product, name: newValue };
      this.$store.commit('products/UPDATE_PRODUCT', updatedProduct);
    },
  },
  computed: {
    ...mapState((['products', 'contracts'])),
    theProducts() {
      return this.products.list;
    },
    PriceOfProduct() {
      console.log('this.contracts.list : ', this.contracts.list.toString());
      const listOfTotalPrice = this.products.list.map((p) => {
        let totalPrice = 0;
        console.log('this is P :', p);
        this.contracts.list.map((c) => {
          console.log('this is c :', c);
          if (p.id === c.productId) {
            totalPrice += c.price;
            console.log('&', totalPrice);
            return totalPrice;
          }
          return null;
        });
        return totalPrice;
      });
      console.log(listOfTotalPrice);
      return listOfTotalPrice;
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
.price {
  margin-top: 48px;
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
