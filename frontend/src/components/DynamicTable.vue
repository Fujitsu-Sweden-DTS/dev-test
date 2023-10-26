<script setup>
import { computed } from "vue";

const props = defineProps(["data"]);

const computedDataKeys = computed(() => {
  return Object.keys(props.data[0]);
});
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="key in computedDataKeys">{{ key }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="dataRow in data">
        <td v-for="key in computedDataKeys">{{ dataRow[key] }}</td>
      </tr>
    </tbody>
  </table>
</template>
