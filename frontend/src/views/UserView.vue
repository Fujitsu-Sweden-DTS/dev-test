<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const users = ref([]);

onMounted(() => {
  axios.get("http://localhost:3000/api/users/").then((res) => {
    users.value = res.data;
  });
});
</script>

<template>
  <h4>Users</h4>
  <div class="alert alert-secondary mt-3" role="alert">
    <b>Task</b><br />
    In this vew, there is a two-second delay when fetching user data from the backend. During this time, the user table remains empty. Your task is to enhance
    the user experience by implementing a loading indicator that clearly communicates to the user that the data is currently being fetched.
  </div>
  <table class="table mt-3">
    <thead>
      <tr>
        <th scope="col">username</th>
        <th scope="col">firstName</th>
        <th scope="col">lastName</th>
        <th scope="col">country</th>
        <th scope="col">age</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users">
        <td>{{ user.username }}</td>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.country }}</td>
        <td>{{ user.age }}</td>
      </tr>
    </tbody>
  </table>
</template>
