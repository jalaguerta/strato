<template>
  <div class="container mt-4">
    <h1 class="mb-4">Print Request Details</h1>

    <!-- Print Details Card -->
    <div class="card">
      <div class="card-header">
        <h3 class="mb-0">{{ request.name || `Request #${requestId}` }}</h3>
      </div>
      <div class="card-body">
        <p><strong>Material:</strong> {{ request.material }}</p>
        <p><strong>Status:</strong> <span :class="statusClass(request.status)">{{ request.status }}</span></p>
        <p><strong>Submitted:</strong> {{ request.submitted }}</p>
        <p><strong>Description:</strong> {{ request.description }}</p>
      </div>
    </div>

    <!-- STL Viewer -->
    <div class="mt-4">
      <h3>3D Object Viewer</h3>
      <div id="stl-viewer" style="width: 100%; height: 500px;"></div>
    </div>
  </div>
</template>

<script>
import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader"; // Ensure STLLoader is installed

export default {
  props: ["id"],
  data() {
    return {
      requestId: this.$route.params.id,
      request: {}, // This will hold the request details
    };
  },
  created() {
    // Fetch request details based on the ID
    this.fetchRequestDetails();
  },
  mounted() {
    // Initialize STL viewer once the component is mounted
    this.initSTLViewer();
  },
  methods: {
    fetchRequestDetails() {
      // Simulated data fetching
      const mockRequests = [
        {
          id: "0",
          name: "Gear Prototype",
          material: "PLA",
          status: "Pending",
          submitted: "2025-01-20",
          description: "A custom gear for a robotics project.",
          stlFile: "/path/to/gear.stl", // Replace with an actual STL file path
        },
        // Add more mock data here if needed
      ];
      this.request = mockRequests.find((req) => req.id === this.requestId) || {};
    },
    initSTLViewer() {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / 500,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, 500);
      document.getElementById("stl-viewer").appendChild(renderer.domElement);

      // Add light
      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(5, 5, 5).normalize();
      scene.add(light);

      // Load STL file
      const loader = new STLLoader();
      loader.load(this.request.stlFile, (geometry) => {
        const material = new THREE.MeshStandardMaterial({ color: 0x007bff });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        mesh.rotation.x = -0.5 * Math.PI; // Correct STL orientation
      });

      // Set up the camera
      camera.position.z = 10;

      // Animate the scene
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
      animate();
    },
    statusClass(status) {
      switch (status) {
        case "Pending":
          return "badge badge-warning";
        case "In Progress":
          return "badge badge-primary";
        case "Completed":
          return "badge badge-success";
        default:
          return "badge badge-secondary";
      }
    },
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}
#stl-viewer {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
}
</style>
