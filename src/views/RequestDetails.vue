<template>
    <div class="container mt-4">
      <h1 class="mb-4 text-primary">Print Request Details</h1>
  
      <!-- Print Details Card -->
      <div class="card shadow">
        <div class="card-header bg-primary text-white">
          <h3 class="mb-0 text-white">{{ request.name || `Request #${requestId}` }}</h3>
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
        <h3 class="text-primary">3D Object Viewer</h3>
        <div id="stl-viewer" class="stl-viewer border rounded shadow-sm"></div>
      </div>
    </div>
  </template>
  
  <script>
  import * as THREE from "three";
  import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
  
  export default {
    props: ["id"],
    data() {
      return {
        requestId: this.$route.params.id,
        request: {}, // Holds the print request details
      };
    },
    created() {
      this.fetchRequestDetails();
    },
    mounted() {
      this.initSTLViewer();
    },
    methods: {
      fetchRequestDetails() {
        const mockRequests = [
          {
            id: "0",
            name: "Gear Prototype",
            material: "PLA",
            status: "Pending",
            submitted: "2025-01-20",
            description: "A custom gear for a robotics project.",
            stlFile: "/gear.stl", // Ensure the STL file is in the public folder
          },
        ];
        this.request = mockRequests.find((req) => req.id === this.requestId) || {};
      },
  
      initSTLViewer() {
        const scene = new THREE.Scene();
        const viewer = document.getElementById("stl-viewer");
        const width = viewer.clientWidth;
        const height = viewer.clientHeight;
  
        // Camera
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  
        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);
        viewer.appendChild(renderer.domElement);
  
        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);
  
        const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight1.position.set(10, 10, 10);
        scene.add(directionalLight1);
  
        const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
        directionalLight2.position.set(-10, -10, -10);
        scene.add(directionalLight2);
  
        // Orbit Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
  
        // STL Loader
        const loader = new STLLoader();
        loader.load(
          this.request.stlFile,
          (geometry) => {
            // Compute bounding box and center the geometry
            geometry.computeBoundingBox();
            const bbox = geometry.boundingBox;
            const center = new THREE.Vector3();
            bbox.getCenter(center);
  
            geometry.center(); // Center the geometry at (0, 0, 0)
  
            const material = new THREE.MeshStandardMaterial({
              color: 0x007bff,
              metalness: 0.5,
              roughness: 0.1,
            });
            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);
  
            // Adjust camera to fit object
            const size = new THREE.Vector3();
            bbox.getSize(size);
            const maxDim = Math.max(size.x, size.y, size.z);
            const fov = camera.fov * (Math.PI / 180);
            let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * 1.5; // Add padding
            camera.position.set(0, 0, cameraZ);
            camera.lookAt(new THREE.Vector3(0, 0, 0));
          },
          undefined,
          (error) => {
            console.error("Error loading STL file:", error);
          }
        );
  
        // Handle window resize
        window.addEventListener("resize", () => {
          const viewerWidth = viewer.clientWidth;
          const viewerHeight = viewer.clientHeight;
  
          camera.aspect = viewerWidth / viewerHeight; // Adjust aspect ratio
          camera.updateProjectionMatrix();
          renderer.setSize(viewerWidth, viewerHeight); // Update renderer
        });
  
        // Animation loop
        const animate = () => {
          requestAnimationFrame(animate);
          controls.update();
          renderer.render(scene, camera);
        };
        animate();
      },
  
      statusClass(status) {
        switch (status) {
          case "Pending":
            return "badge bg-warning text-dark";
          case "In Progress":
            return "badge bg-primary";
          case "Completed":
            return "badge bg-success";
          default:
            return "badge bg-secondary";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Viewer styles */
  .stl-viewer {
    width: 100%;
    height: 500px;
    background-color: #f8f9fa; /* Light background for better contrast */
    border: 1px solid #dee2e6;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
  }
  </style>
  