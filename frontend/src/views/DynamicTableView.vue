<script setup>
import DyanmicTable from "../components/DynamicTable.vue";
import { ref } from "vue";

const cities = [
  {
    name: "New York",
    country: "USA",
    population: 8398748,
  },
  {
    name: "Los Angeles",
    country: "USA",
    population: 3990456,
  },
  {
    name: "London",
    country: "UK",
    population: 8982000,
  },
];

const animals = [
  {
    name: "Lion",
    species: "Panthera leo",
    habitat: "Grasslands and savannas",
    lifespan: 10,
  },
  {
    name: "Elephant",
    species: "Loxodonta africana",
    habitat: "African savannas and forests",
    lifespan: 60,
  },
  {
    name: "Tiger",
    species: "Panthera tigris",
    habitat: "Various, including forests and grasslands",
    lifespan: 15,
  },
];
</script>

<template>
  <h4>Dyanmic table</h4>
  <div class="alert alert-secondary mt-3" role="alert">
    <b>Task</b><br />
    In this view, the dynamic table component is used to render a table for an array of unknown objects. Your task is to implement filtering to the dynamic
    table component. The table should only display rows matching the filter criteria. The filtering can be a single input field, an input field per column or
    any other kind of filtering function.
  </div>
  <div class="alert alert-light my-3" role="alert">
    <pre>{{ cities }}</pre>
  </div>
  <DyanmicTable class="my-3" :data="cities" />
  <div class="alert alert-light mt-3" role="alert">
    <pre>{{ animals }}</pre>
  </div>
  <DyanmicTable :data="animals" />
</template>
