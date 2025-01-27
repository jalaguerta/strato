<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-primary shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-6">
                <h1 class="display-3  text-white">3D Printing
                  <span>to your doorstep</span>
                </h1>
                <p class="lead  text-white">Connect with skilled local makers to bring your designs to life.
                  Get high-quality 3D printing, faster delivery, and support your community.</p>
                <div class="btn-wrapper d-flex align-items-center flex-wrap" style="gap: 1rem;">
                  <router-link to="/register" class="d-flex align-items-center">
                    <base-button tag="a" class="mb-0" type="info" icon="fa fa-code">
                      Print now
                    </base-button>
                  </router-link>
                  <base-button tag="button" class="mb-0" type="white" icon="ni ni-cloud-download-95"
                    @click="scrollToSection('work-with-us')">
                    Maker Signup
                  </base-button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 1st Hero Variation -->
    </div>
    <section class="section section-lg pt-lg-0 mt--200">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row row-grid">
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="ni ni-check-bold" type="primary" rounded class="mb-4">
                  </icon>
                  <h6 class="text-primary text-uppercase">Democratizing 3D Printing</h6>
                  <p class="description mt-3">Our platform bridges the gap in 3D printing accessibility by combining
                    affordable, high-quality printing services with a collaborative model-sharing database.
                    From hobbyists to educators, we empower users with the tools, resources, and community to explore
                    and unleash their creativity.</p>
                  <div>
                    <badge type="primary" rounded>design</badge>
                    <badge type="primary" rounded>system</badge>
                    <badge type="primary" rounded>creative</badge>
                  </div>
                  <base-button tag="a" href="#" type="primary" class="mt-4">
                    Learn more
                  </base-button>
                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="ni ni-istanbul" type="success" rounded class="mb-4">
                  </icon>
                  <h6 class="text-success text-uppercase">All-in-One 3D Printing Ecosystem</h6>
                  <p class="description mt-3">We integrate cutting-edge 3D printing services with a robust educational
                    platform.
                    Users can print custom designs, access a comprehensive library of models, and gain valuable insights
                    through tutorials, guides, and troubleshooting resources—all in one centralized hub.</p>
                  <div>
                    <badge type="success" rounded>business</badge>
                    <badge type="success" rounded>vision</badge>
                    <badge type="success" rounded>success</badge>
                  </div>
                  <base-button tag="a" href="#" type="success" class="mt-4">
                    Learn more
                  </base-button>
                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="ni ni-planet" type="warning" rounded class="mb-4">
                  </icon>
                  <h6 class="text-warning text-uppercase">Fostering Innovation Through Collaboration</h6>
                  <p class="description mt-3">By blending a community-driven database, state-of-the-art printing
                    solutions, and an innovative decentralized production model, we’re setting a new standard for
                    accessibility and scalability in 3D printing.
                    Join us in making 3D printing affordable, efficient, and universally accessible.</p>
                  <div>
                    <badge type="warning" rounded>marketing</badge>
                    <badge type="warning" rounded>product</badge>
                    <badge type="warning" rounded>launch</badge>
                  </div>
                  <base-button tag="a" href="#" type="warning" class="mt-4">
                    Learn more
                  </base-button>
                </card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section bg-secondary">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6">
            <div class="card bg-primary shadow border-0">
              <img v-lazy="'img/print/print.webp'" class="card-img-top">
              <blockquote class="card-blockquote">
                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" class="svg-bg">
                  <polygon points="0,52 583,95 0,95" class="fill-primary"></polygon>
                  <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-primary"></polygon>
                </svg>
                <h4 class="display-3 font-weight-bold text-white">Design System</h4>
                <p class="lead text-italic text-white">The Arctic Ocean freezes every winter and much of
                  the sea-ice then thaws every summer, and that process will continue whatever
                  happens.</p>
              </blockquote>
            </div>
          </div>
          <div class="col-md-6">
            <div class="pl-md-5">
              <icon name="ni ni-settings" class="mb-5" size="lg" type="warning" shadow rounded></icon>
              <h3>Our Mission</h3>
              <p class="lead">Our mission is to democratize 3D printing by making it affordable, accessible, and easy to
                understand for everyone. </p>
              <p>By combining high-quality printing services, a vibrant model-sharing community, and educational
                resources, we empower creators, educators, and
                innovators to bring their ideas to life, fostering collaboration and creativity worldwide.</p>
              <a href="#" class="font-weight-bold text-warning mt-5">Unlock the power of 3D printing</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="work-with-us" class="section section-shaped my-0 overflow-hidden">
      <div class="shape shape-style-3 bg-gradient-primary shape-skew">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container pt-lg pb-300">
        <div class="row text-center justify-content-center">
          <div class="col-lg-10">
            <h2 class="display-3 text-white">Become a Printing Partner</h2>
            <p class="lead text-white">Join our growing network of skilled 3D printing enthusiasts and professionals.
              Earn money while helping to make 3D printing accessible to everyone.</p>
          </div>
        </div>
        <div class="row row-grid mt-5">
          <div class="col-lg-4">
            <icon name="ni ni-settings" size="lg" gradient="white" shadow round color="primary"></icon>
            <h5 class="text-white mt-3">Join a Thriving Community</h5>
            <p class="text-white mt-3">Become part of a collaborative network of 3D printing enthusiasts and experts.
            </p>
          </div>
          <div class="col-lg-4">
            <icon name="ni ni-ruler-pencil" size="lg" gradient="white" shadow round color="primary"></icon>
            <h5 class="text-white mt-3">Monetize Your 3D Printer</h5>
            <p class="text-white mt-3">Maximize the potential of your equipment by receiving print orders and turning idle time into income.</p>
          </div>
          <div class="col-lg-4">
            <icon name="ni ni-atom" size="lg" gradient="white" shadow round color="primary"></icon>
            <h5 class="text-white mt-3">Reduce Idle Time</h5>
            <p class="text-white mt-3">Access a consistent flow of print jobs from our growing network of users,
              helping you stay busy and profitable.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-lg pt-lg-0 section-contact-us">
      <div class="container">
        <div class="row justify-content-center mt--300">
          <div class="col-lg-8">
            <card gradient="secondary" shadow body-classes="p-lg-5">
              <h4 class="mb-1">Want to work with us?</h4>
              <p class="mt-0">Your expertise matters</p>
              <base-input class="mt-5" alternative placeholder="Your name" addon-left-icon="ni ni-user-run">
              </base-input>
              <base-input alternative placeholder="Email address" addon-left-icon="ni ni-email-83">
              </base-input>
              <base-input class="mb-4">
                <textarea class="form-control form-control-alternative" name="name" rows="4" cols="80"
                  placeholder="Type a message..."></textarea>
              </base-input>
              <base-button type="primary" round block size="lg">
                Send Message
              </base-button>
            </card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Some data here
    };
  },
  methods: {
    scrollToSection(id) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};

</script>
