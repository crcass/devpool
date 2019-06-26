import JobDetail from '../modules/JobDetail';
import JobsList from '../modules/JobsList';
import SavedJobs from '../modules/SavedJobs';
import StudentList from '../modules/StudentList';
import StudentDetail from '../modules/StudentDetail';

export const jobRoutes = [
  { path: '/jobs', component: JobsList },
  { path: '/jobs/:id', component: JobDetail },
  { path: '/savedJobs/', component: SavedJobs },
  { path: '/savedJobs/:id', component: JobDetail }
];

export const studentRoutes = [
  { path: '/students/', component: StudentList },
  { path: '/students/:id', component: StudentDetail },
  { path: '/profile/', component: JobsList },
  { path: '/jobs/:id', component: JobDetail }
];
