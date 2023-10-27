<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const orgs = ref([]);

onMounted(() => {
  axios.get("http://localhost:3000/api/organization/list").then((res) => {
    orgs.value = res.data;
  });
});
</script>

<template>
  <h4>Users</h4>
  <div class="alert alert-secondary mt-3" role="alert">
    <b>Task</b><br />
    The data in this table is a concatenation of results from a few different sources. But due to some unoptimized promise resolving in the
    backend service, the application is unnecessarily kept waiting. Modify the backend service so we don't have to wait as long.
  </div>
  <table class="table mt-3">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">name</th>
        <th scope="col">location</th>
        <th scope="col">manager</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="org in orgs">
        <td>{{ org.id }}</td>
        <td>{{ org.name }}</td>
        <td>{{ org.location }}</td>
        <td>{{ org.manager }}</td>
      </tr>
    </tbody>
  </table>
</template>
