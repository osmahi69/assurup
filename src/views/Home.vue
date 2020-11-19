<template>
<div>
<v-container>
  <v-flex>
    <v-data-table
      dense
      :headers="headers"
      :items="desserts"
      item-key="name"
      class="elevation-1"
    ></v-data-table>
  </v-flex>
</v-container>
</div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style>

</style>
