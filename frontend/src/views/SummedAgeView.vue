<script setup>
import axios from "axios";
import { ref } from "vue";

const summedAgeResult = ref("");

function getSummedAge() {
  axios.get("http://localhost:3000/api/users/summedAge").then((res) => {
    summedAgeResult.value = res.data.result;
  });
}
</script>

<template>
  <h4>Summed age</h4>
  <div class="alert alert-secondary mt-3" role="alert">
    <b>Task</b><br />
    In this view, there is a button that can be used to sum the age of all users. Currently, the backend returns undefined instead of the summed age. Your task
    is to investigate the backend code, identify the root cause of this issue and solve it.
  </div>
  <div class="alert alert-success mt-3" role="alert" v-show="summedAgeResult != ''">
    {{ summedAgeResult }}
  </div>
  <div class="mt-3">
    <button type="button" class="btn btn-primary" v-on:click="getSummedAge()">Sum the age of all user</button>
  </div>
</template>
