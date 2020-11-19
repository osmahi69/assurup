<template>
  <div>
    <v-card outlined>
      <v-card-title class="title"> Product </v-card-title>
       <v-list-item>
        <v-list-item-content>
           <div class="displayFlex">
             <div>
            <v-list-item-title class="descriptionTitle">
              {{"Description:"}}
              </v-list-item-title>
              </div>
              <p class="description">
              {{selectedProduct.description}}
              </p>
              </div>
          <div class="displayFlex">
            <div>
              <v-list-item-title class="metaData" v-for="metaData in data" :key="metaData">
              {{metaData}}
              </v-list-item-title>
            </div>
            <div>
              <v-list-item-title class="data">
              {{selectedContrat.status}}
              </v-list-item-title>
              <v-list-item-title class="data">
              {{selectedContrat.effectiveDate}}
              </v-list-item-title>
              <v-list-item-title class="data">
              {{selectedContrat.price}}
              </v-list-item-title>
            </div>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>
<script>
import contracts from '../assets/data/contracts.json';
import products from '../assets/data/products.json';

export default {
  data() {
    return {
      data: ['Status:', 'Date:', 'Price:'],
      theContracts: contracts,
      theProducts: products,
    };
  },
  computed: {
    selectedContrat() {
      const id = this.$route.params.contractId;
      const selectedContrat = this.theContracts.find((contract) => contract.id.toString() === id);
      return selectedContrat;
    },
    selectedProduct() {
      const pId = this.$route.params.productId;
      const selectedProduct = this.theProducts.find((p) => p.id.toString() === pId);
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
}
.description {
  margin:0;
  margin-left: 10px;
  color: grey;
}
.descriptionTitle {
  font-weight: 700;
  color: black;
}
.data {
  margin-top: 24px;
  margin-left: 10px;
  color: grey;
}
</style>
