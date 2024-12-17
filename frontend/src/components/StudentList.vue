<template>
  <div>
    <h2>Students</h2>
    <b-table striped hover :items="students"></b-table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      students: [],
    };
  },
  created() {
    axios.get('http://localhost:3000/api/students')
      .then(response => {
        this.students = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
};
</script>
