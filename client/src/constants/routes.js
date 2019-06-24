import StudentList from '../modules/StudentList';
import StudentDetail from '../modules/StudentDetail';

export const studentRoutes = [
  { path: '/students/', component: StudentList },
  { path: '/students/:id', component: StudentDetail }
];
