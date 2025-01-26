<template>
    <div class="homepage">
      <!-- Hero Section -->
      <header class="position-relative bg-primary py-7 text-center">
        <h1 class="display-3 text-white font-weight-bold">Welcome to Strato</h1>
        <p class="lead text-white">A new way of 3D Printing</p>
  
        <!-- Image after the heading -->
        <div class="hero-image-container mt-4">
          <img src="@/assets/images/hero.jpg" alt="3D Printing Showcase" class="hero-image img-fluid rounded">
        </div>
  
        <button class="btn btn-white btn-lg mt-4" @click="scrollToSection('services')">
          Explore Our Services
        </button>
      </header>
  
      <!-- Services Section -->
      <section id="services" class="py-7">
        <div class="container">
          <h2 class="text-center display-4 font-weight-bold mb-5">Our Services</h2>
          <div class="row">
            <div
              class="col-md-4"
              v-for="service in services"
              :key="service.id"
            >
              <div class="card shadow border-0">

                <div class="card-body">
                  <h5 class="card-title">{{ service.title }}</h5>
                  <p class="card-text text-muted">{{ service.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Call to Action -->
      <section class="py-7 bg-secondary text-center text-white">
        <h2 class="display-4 font-weight-bold">Ready to Bring Your Ideas to Life?</h2>
        <p class="lead text-dark">Upload your 3D model or get in touch to start printing today!</p>
        <button class="btn btn-primary btn-lg mt-4" @click="navigateToUpload">
          Get Started
        </button>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        services: [
          {
            id: 1,
            title: "Rapid Prototyping",
            description: "Fast and precise 3D printing for your prototypes.",
          },
          {
            id: 2,
            title: "Model Marketplace",
            description: "Discover models for gifts, decor, and more.",
          },
          {
            id: 3,
            title: "Peer Printing",
            description: "Affordable printing through local makers.",
          },
        ],
      };
    },
    methods: {
      scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      },
      navigateToUpload() {
        this.$router.push("/upload"); // Update to match your upload route <img :src="service.image" :alt="service.title" class="card-img-top" />
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add a buffer to account for the fixed header */
  .homepage {
    padding-top: 80px; /* Match this to the height of your fixed header */ 
  }
  
  .hero-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .hero-image {
    max-width: 30%;
    height: auto;
    border-radius: 1000px; /* Optional for rounded corners */
  }
  </style>
  