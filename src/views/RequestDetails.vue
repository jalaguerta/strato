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
        <progress value="0" max="100" id="progressBar"></progress>
        <div id="stl-viewer" style="width: 100%; height: 500px;"></div>
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
        request: {}, // This will hold the request details
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
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 500, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true });

  // Set renderer size based on viewer container
  const viewer = document.getElementById("stl-viewer");
  const width = viewer.clientWidth;
  const height = viewer.clientHeight;

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
      geometry.computeBoundingBox();
      const bbox = geometry.boundingBox;
      const center = new THREE.Vector3();
      bbox.getCenter(center);

      geometry.center(); // Center the geometry at origin

      const material = new THREE.MeshStandardMaterial({
        color: 0x007bff,
        metalness: 0.5,
        roughness: 0.1,
      });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      console.log("Geometry Center:", center);

      // Adjust camera to fit object
      const size = new THREE.Vector3();
      bbox.getSize(size);
      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180);
      let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)); // Camera distance based on bounding box size
      cameraZ *= 1.5; // Add padding
      camera.position.set(0, 0, cameraZ);
      camera.lookAt(new THREE.Vector3(0, 0, 0));

      console.log("Camera Position:", camera.position);
    },
    (xhr) => {
      if (xhr.lengthComputable) {
        const percentComplete = (xhr.loaded / xhr.total) * 100;
        console.log(`STL Load Progress: ${percentComplete}%`);
      }
    },
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
}
,
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
  #stl-viewer {
    width: 100%; /* Ensure it spans the full width of its parent */
    height: 500px; /* Maintain a fixed height */
    border: 1px solid #ccc; /* Optional border for clarity */
    border-radius: 8px;
    overflow: hidden;
    position: relative; /* Allow precise positioning inside */
  }
  
  #progressBar {
    width: 100%;
    height: 24px;
    margin-bottom: 10px;
  }
  </style>
  
  