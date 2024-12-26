<template>
  <div>
    <!-- Conditionally render based on decodedData -->
    <templates-simple v-if="decodedData" :acc="decodedData" />
    <div
      v-else
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <base-loading class="h-5 w-5" />
    </div>
  </div>
</template>

<script setup>
import { decodeData } from "../utils/transformer";
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

// Access the route query parameters
const route = useRoute();
const acc = route.query.data;

// Declare the decodedData as a reactive reference
const decodedData = ref(null);

// Watch the query parameter to decode the data reactively
watchEffect(() => {
  if (acc) {
    decodedData.value = decodeData(acc);
  }
});
</script>

<style scoped>
</style>
