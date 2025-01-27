<template>
    <div>
      <!-- Amazing Team Section -->
      <section class="section section-lg">
        <div class="container">
          <!-- Section Heading -->
          <div class="row justify-content-center text-center mb-lg">
            <div class="col-lg-8">
              <h2 class="display-3">The Amazing Team</h2>
              <p class="lead text-muted">
                Meet the brilliant minds who bring ideas to life and make the impossible possible.
              </p>
            </div>
          </div>
  
          <!-- Team Members -->
          <div class="row justify-content-center">
            <div
              v-for="(teamMember, index) in team"
              :key="index"
              class="col-md-6 col-lg-4 mb-5"
            >
              <div class="px-3">
                <!-- Profile Image -->
                <img
                  :src="teamMember.image"
                  :alt="`Photo of ${teamMember.name}`"
                  class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                  style="width: 200px;"
                />
                <div class="pt-4 text-center">
                  <!-- Team Member Name and Role -->
                  <h5 class="title">
                    <span class="d-block mb-1">{{ teamMember.name }}</span>
                    <small class="h6 text-muted">{{ teamMember.role }}</small>
                  </h5>
  
                  <!-- Social Links -->
                  <div class="mt-3">
                    <base-button
                      v-for="(social, idx) in teamMember.socials"
                      :key="idx"
                      tag="a"
                      :href="social.link"
                      :type="social.type"
                      :icon="social.icon"
                      rounded
                      icon-only
                    ></base-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Call to Action Section -->
      <section class="section section-lg pt-0">
        <div class="container">
          <card gradient="warning" no-body shadow-size="lg" class="border-0">
            <div class="p-5">
              <div class="row align-items-center">
                <div class="col-lg-8">
                  <h3 class="text-white">We make 3D Printing accesible </h3>
                  <p class="lead text-white mt-3">
                    We’re on a mission to make 3D printing affordable, easy to use, and within reach for all. 
                    Whether you’re a creator, hobbyist, or innovator, our platform empowers you to turn ideas into reality.
                  </p>
                </div>
                <div class="col-lg-3 ml-lg-auto">
                  <base-button 
                    tag="a" 
                    href="https://www.creative-tim.com/product/vue-argon-design-system" 
                    type="white" 
                    block 
                    size="lg"
                  >
                    Download Vue
                  </base-button>
                </div>
              </div>
            </div>
          </card>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        team: [
          {
            name: "Romina Hadid",
            role: "CEO",
            image: "img/theme/team-1-800x800.jpg",
            socials: [
              { link: "#", type: "primary", icon: "fa fa-twitter" },
              { link: "#", type: "primary", icon: "fa fa-facebook" },
              { link: "#", type: "primary", icon: "fa fa-dribbble" },
            ],
          },
          {
            name: "Alexander Smith",
            role: "COO",
            image: "img/theme/team-2-800x800.jpg",
            socials: [
              { link: "#", type: "info", icon: "fa fa-twitter" },
              { link: "#", type: "info", icon: "fa fa-facebook" },
              { link: "#", type: "info", icon: "fa fa-dribbble" },
            ],
          },
          {
            name: "John Doe",
            role: "CTO",
            image: "img/theme/team-3-800x800.jpg",
            socials: [
              { link: "#", type: "success", icon: "fa fa-twitter" },
              { link: "#", type: "success", icon: "fa fa-facebook" },
              { link: "#", type: "success", icon: "fa fa-dribbble" },
            ],
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Center the team members with equal spacing */
  .row.justify-content-center {
    text-align: center;
  }
  
  .col-lg-4 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  