<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" :class="[route.path == '/' ? 'active' : '']" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="[route.path == '/users' ? 'active' : '']" to="/users">Users</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="[route.path == '/summedAge' ? 'active' : '']" to="/summedAge">Summed age</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="[route.path == '/userApplications' ? 'active' : '']" to="/userApplications">User applications</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="[route.path == '/dynamicTable' ? 'active' : '']" to="/dynamicTable">Dynamic table</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="[route.path == '/slowOrganizations' ? 'active' : '']" to="/slowOrganizations">Slow organizations</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container my-4">
    <RouterView />
  </div>
</template>

<style scoped></style>
