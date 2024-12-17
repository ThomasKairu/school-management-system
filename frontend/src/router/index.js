import { createRouter, createWebHistory } from 'vue-router';
import StudentList from '../components/StudentList.vue';
import AddStudent from '../components/AddStudent.vue';

const routes = [
  { path: '/students', component: StudentList },
  { path: '/add-student', component: AddStudent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
