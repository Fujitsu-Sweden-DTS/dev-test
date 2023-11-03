<script setup>
import { ref, computed } from 'vue';

const props = defineProps(['data']);
const filterInput = ref('');

const computedDataKeys = computed(() => {
  return Object.keys(props.data[0]);
});

const objectContainsFilterInput = (obj, searchString) => {
  return Object.values(obj).some(
    value => typeof value === 'string' && value.toLowerCase().includes(searchString.value.toLowerCase())
  );
};

const filteredData = computed(() => {
  if (!filterInput.value) {
    return props.data;
  }
  return props.data.filter(item => objectContainsFilterInput(item, filterInput));
});
</script>

<template>
  <div>
    <label>Filter:&nbsp;</label>
    <input v-model="filterInput"/>
  </div>

  <table class="table">
    <thead>
      <tr>
        <th v-for="key in computedDataKeys">{{ key }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="dataRow in filteredData">
        <td v-for="key in computedDataKeys">{{ dataRow[key] }}</td>
      </tr>
    </tbody>
  </table>
</template>
