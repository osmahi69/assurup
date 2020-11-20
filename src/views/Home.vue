<template>
<div>
    <v-card elevation="2">
      <v-card-title class="title"> Contracts </v-card-title>
      <v-container>
          <v-text-field
            v-model="search"
            label="Filter"
            class="mx-4"
          ></v-text-field>
        <v-simple-table fixed-header :custom-filter="filterOnlyCapsText">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Product ID</th>
                <th class="text-left">Name</th>
                <th class="text-left">Date</th>
                <th class="text-left">Status</th>
                <th class="text-left">Contract</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(contract, index) in theContracts" :key="contract.id">
                <td>{{ contract.productId }}</td>
                <td>{{ selectedProduct[index]}}</td>
                <td>{{ contract.effectiveDate }}</td>
                <td>{{ contract.status }}</td>
                <td>
                  <router-link
                    :to="'/contract/' + contract.id + '/' + contract.productId"
                    ><v-btn> Details </v-btn></router-link
                  >
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      search: '',
    };
  },
  computed: {
    ...mapState((['contracts', 'products'])),
    selectedProduct() {
      let name = {};
      const selectedProduct = this.contracts.list.map((c) => {
        this.products.list.map((p) => {
          if (p.id === c.productId) {
            name = p.name;
            return name;
          }
          return null;
        });
        return name;
      });
      return selectedProduct;
    },
    theContracts() {
      return this.contracts.list;
    },
  },
};
</script>
<style lang="scss" scoped>
.title {
  font-weight: 900;
  color: blue;
}
</style>
