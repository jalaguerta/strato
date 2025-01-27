<template>
    <footer class="footer bg-primary text-white">
      <div class="container py-5">
        <!-- Contact Info Section -->
        <div class="row">
          <div class="col-md-6">
            <h4 class="text-white font-weight-bold">Strato 3D Printing</h4>
            <p>
              Bringing your ideas to life with precision 3D printing services.
            </p>
            <ul class="list-unstyled">
              <li>Email: <a href="mailto:support@strato3d.com" class="text-white">support@strato3d.com</a></li>
              <li>Phone: <a href="tel:+1234567890" class="text-white">+1 (234) 567-890</a></li>
            </ul>
          </div>
  
          <!-- Social Media Section -->
          <div class="col-md-6 text-md-right">
            <h5 class="text-white">Follow Us</h5>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener"
              class="btn btn-neutral btn-icon-only btn-facebook btn-round"
            >
              <i class="fa fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener"
              class="btn btn-neutral btn-icon-only btn-twitter btn-round"
            >
              <i class="fa fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
              class="btn btn-neutral btn-icon-only btn-instagram btn-round"
            >
              <i class="fa fa-instagram"></i>
            </a>
          </div>
        </div>
  
        <hr />
  
        <!-- Footer Bottom -->
        <div class="row align-items-center">
          <div class="col-md-6">
            <p>&copy; {{ year }} Strato 3D Printing. All rights reserved.</p>
          </div>
          <div class="col-md-6 text-md-right">
            <ul class="nav nav-footer justify-content-end">
              <li class="nav-item">
                <router-link to="/about" class="nav-link text-white">About Us</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/services" class="nav-link text-white">Services</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link text-white">Contact</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "AppFooter",
    data() {
      return {
        year: new Date().getFullYear(),
      };
    },
  };
  </script>
  
<style>
</style>
