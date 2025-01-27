<template>
  <header class="header-global fixed-header">
    <base-nav class="navbar-main bg-dark" expand>
      <!-- Logo -->
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img src="img/brand/white.png" alt="Strato 3D Printing" />
      </router-link>

      <!-- Dashboard Navigation Links -->
      <ul class="navbar-nav align-items-lg-center ml-lg-auto">
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/dashboard/overview">Overview</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/dashboard/requests">My Requests</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/dashboard/settings">Settings</router-link>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle text-white"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Account
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" to="/profile">Profile</router-link>
            <router-link class="dropdown-item" to="/logout">Logout</router-link>
          </div>
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1030;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

body {
  margin-top: 80px;
}

.navbar-main {
  height: 80px;
}

.navbar-nav .dropdown-menu {
  background-color: #343a40; /* Match dark theme */
  border: none;
}

.dropdown-item {
  color: #fff !important;
}

.dropdown-item:hover {
  background-color: #495057;
}

.navbar-nav .nav-link {
  font-size: 16px;
  padding: 10px 15px;
}

.navbar-nav .nav-link:hover {
  text-decoration: underline;
}
</style>
