<template>
  <div>
    <h2>Add Student</h2>
    <b-form @submit.prevent="addStudent">
      <b-form-group label="First Name">
        <b-form-input v-model="student.firstName"></b-form-input>
      </b-form-group>
      <b-form-group label="Last Name">
        <b-form-input v-model="student.lastName"></b-form-input>
      </b-form-group>
      <!-- Add more fields as needed -->
      <b-button type="submit" variant="primary">Add Student</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      student: {
        firstName: '',
        lastName: '',
        // Initialize other fields
      },
    };
  },
  methods: {
    addStudent() {
      axios.post('http://localhost:3000/api/students', this.student)
        .then(() => {
          alert('Student added successfully');
          this.$router.push('/students');
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>
