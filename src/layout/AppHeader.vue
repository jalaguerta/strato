<template>
    <header class="header-global fixed-header">
      <base-nav class="navbar-main bg-primary" expand>
        <!-- Logo -->
        <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
          <img src="img/brand/white.png" alt="Strato 3D Printing" />
        </router-link>
  
        <!-- Navigation Links -->
        <ul class="navbar-nav align-items-lg-center ml-lg-auto">
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/">How it Works</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/about">About</router-link>
          </li>
          <li class="nav-item">
          <router-link class="nav-link" to="/dashboard">
            <base-button type="green" class="btn btn-success text-black">dashboard</base-button>
          </router-link>
        </li>
          <li class="nav-item">
          <router-link class="nav-link" to="/login">
            <base-button type="white" class="btn btn-secondary text-black">Login</base-button>
          </router-link>
        </li>
        </ul>
      </base-nav>
    </header>
  </template>
  
  <script>
  import BaseNav from "@/components/BaseNav";
  
  export default {
    components: {
      BaseNav,
    },
  };
  </script>
  
  <style scoped>
  .fixed-header {
    position: fixed; /* Keeps the header fixed at the top */
    top: 0;
    left: 0;
    width: 100%; /* Ensures it spans the entire width */
    z-index: 1030; /* Places it above other content */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Optional: Add shadow for better visibility */
  }
  
  body {
    margin-top: 80px; /* Add padding equal to the header height to avoid overlap with content */
  }
  
  .navbar-main {
    height: 80px; /* Set a consistent height for the header */
  }
  </style>
  