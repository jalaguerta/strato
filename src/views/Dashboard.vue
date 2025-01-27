<template>
    <div class="container mt-4">
      <h1 class="mb-4">My 3D Print Dashboard</h1>
  
      <!-- Request Submission Button -->
      <button class="btn btn-primary mb-4" @click="openRequestModal">
        Submit New Request
      </button>
  
      <!-- Active Requests -->
      <div class="row">
        <div class="col-lg-12 mb-4">
          <h3>Active Requests</h3>
          <div v-if="activeRequests.length > 0" class="card">
            <div class="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Material</th>
                    <th>Status</th>
                    <th>Submitted</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(request, index) in activeRequests"
                    :key="index"
                    @click="goToRequestDetails(index)"
                    style="cursor: pointer;"
                  >
                    <td>{{ index + 1 }}</td>
                    <td>{{ request.material }}</td>
                    <td>
                      <span :class="statusClass(request.status)">
                        {{ request.status }}
                      </span>
                    </td>
                    <td>{{ request.submitted }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p v-else>No active requests found. Submit a new request above!</p>
        </div>
      </div>
  
      <!-- History of Completed Requests -->
      <div class="row">
        <div class="col-lg-12">
          <h3>Completed Requests</h3>
          <div v-if="completedRequests.length > 0" class="card">
            <div class="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Material</th>
                    <th>Completion Date</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(request, index) in completedRequests" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ request.material }}</td>
                    <td>{{ request.completedDate }}</td>
                    <td>{{ request.details }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p v-else>No completed requests found.</p>
        </div>
      </div>
  
      <!-- Modal for Request Submission -->
      <div v-if="isModalOpen" class="modal fade show d-block" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">New Print Request</h5>
              <button type="button" class="btn-close" @click="closeRequestModal"></button>
            </div>
            <div class="modal-body">
              <label>Material</label>
              <select class="form-control mb-3" v-model="newRequest.material">
                <option>PLA</option>
                <option>ABS</option>
                <option>Resin</option>
              </select>
  
              <label>Description</label>
              <textarea
                class="form-control mb-3"
                v-model="newRequest.description"
                placeholder="Enter request details"
              ></textarea>
            </div>
            <div class="modal-footer">
              <button class="btn btn-secondary" @click="closeRequestModal">
                Cancel
              </button>
              <button class="btn btn-primary" @click="submitRequest">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div class="modal-backdrop fade show"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        requests: [
          { id: 1, material: "PLA", status: "Pending", submitted: "2025-01-20" },
          { id: 2, material: "ABS", status: "In Progress", submitted: "2025-01-22" },
          {
            id: 3,
            material: "Resin",
            status: "Completed",
            completedDate: "2025-01-15",
            details: "Delivered to user.",
          },
        ],
        newRequest: {
          material: "PLA",
          description: "",
        },
        isModalOpen: false,
      };
    },
    computed: {
      activeRequests() {
        return this.requests.filter(
          (req) => req.status === "Pending" || req.status === "In Progress"
        );
      },
      completedRequests() {
        return this.requests.filter((req) => req.status === "Completed");
      },
    },
    methods: {
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
      openRequestModal() {
        this.isModalOpen = true;
      },
      closeRequestModal() {
        this.isModalOpen = false;
        this.newRequest = { material: "PLA", description: "" };
      },
      submitRequest() {
        if (this.newRequest.description) {
          this.requests.push({
            id: this.requests.length + 1,
            ...this.newRequest,
            status: "Pending",
            submitted: new Date().toISOString().split("T")[0],
          });
          this.closeRequestModal();
        } else {
          alert("Please provide a description for your request.");
        }
      },
      goToRequestDetails(id) {
        this.$router.push(`/dashboard/requests/${id}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .modal {
    background-color: rgba(0, 0, 0, 0.5);
  }
  .card {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
  }
  </style>
  