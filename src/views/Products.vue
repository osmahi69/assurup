<template>
<v-card outlined elevation="2">
  <v-card-title class="title"> Products</v-card-title>
  <div v-for="product in theProducts" :key="product.id">
      <div class="displayFlex">
        <th class="metaData"> Description {{product.id}}:</th>
        <v-text-field
        class="textField"
        label="Description"
        :rules="rules"
      ></v-text-field>
      </div>
      <div class="displayFlex">
        <th class="name"> Name: {{product.id}}</th>
        <v-text-field
        class="textFieldName"
        label="Name"
        :rules="rules"
      ></v-text-field>
        <input v-model="message" />
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
    ...mapState((['products'])),
    theProducts() {
      return this.products.list;
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
