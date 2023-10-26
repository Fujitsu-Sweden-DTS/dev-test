<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const users = ref([]);

onMounted(() => {
  axios.get("http://localhost:3000/api/users/includeApplications").then((res) => {
    users.value = res.data;
  });
});
</script>

<template>
  <h4>Users</h4>
  <div class="alert alert-secondary mt-3" role="alert">
    <b>Task</b><br />In this view, the applications being listed are hard coded in the service function. Your task is to use the data from
    <b>groups.mockup.js</b> to list the correct applications for each user.
  </div>
  <table class="table mt-3">
    <thead>
      <tr>
        <th scope="col">username</th>
        <th scope="col">firstName</th>
        <th scope="col">lastName</th>
        <th scope="col">applications</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users">
        <td>{{ user.username }}</td>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>
          <ul>
            <li v-for="application in user.applications">{{ application }}</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</template>
