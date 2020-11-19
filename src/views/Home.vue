<template>
  <div>
    <v-card>
      <v-container>
        <v-simple-table fixed-header>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Product ID</th>
                <th class="text-left">Date</th>
                <th class="text-left">Status</th>
                <th class="text-left">Contract</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="contract in theContracts" :key="contract.id">
                <td>{{ contract.productId }}</td>
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
import contracts from '../assets/data/contracts.json';

export default {
  name: 'Home',
  data() {
    return {
      theContracts: contracts,
    };
  },
};
</script>
