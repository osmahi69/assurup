<template>
     <div id="app">
  <v-app >
      <v-app-bar>
        <template >

        </template>
        <v-avatar @click="goHome()" class="avatar">
            <v-img :src="require('./assurup.jpg')" class="grey lighten-2" width="0" />
        </v-avatar>
           <v-toolbar-title color="blue" class="ml-3">Assurup</v-toolbar-title>
        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab>Home</v-tab>
          <router-link to="/products"><v-tab>Products</v-tab></router-link>
            <v-tab>Contract</v-tab>
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
  components: {
  },
  methods: {
    goHome() {
      this.$router.push('/');
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
</style>
