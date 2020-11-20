<template>
  <div id="app">
  <v-app class="app">
      <v-app-bar
        color="#F0F8FF"
      >
        <template>
        </template>
        <v-avatar @click="goToHome()" class="avatar">
            <v-img :src="require('./assurup.jpg')" class="grey lighten-2" width="0" />
        </v-avatar>
           <v-toolbar-title color="blue" class="ml-3 headerTitle">Assurup</v-toolbar-title>
        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab @click="goToHome()">Home</v-tab>
          <v-tab @click="goToProducts()">Products</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
        <v-container style="height: 1000px;">
            <router-view></router-view>
        </v-container>
  </v-app>
</div>
</template>
<script>
import contracts from '@/assets/data/contracts.json';
import products from '@/assets/data/products.json';

export default {
  name: 'App',
  methods: {
    goToHome() {
      this.$router.push('/');
    },
    goToProducts() {
      this.$router.push('/products');
    },
  },
  mounted() {
    this.$store.dispatch('contracts/setValue', { list: contracts });
    this.$store.dispatch('products/setValue', { list: products });
  },
};
</script>
<style lang="scss" scoped>
.avatar {
  cursor: pointer
}
.headerTitle {
  color: blue;
}
</style>
