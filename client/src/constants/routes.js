import Dashboard from '../components/Dashboard';
import JobDetail from '../components/JobDetail';
import JobsList from '../components/JobsList';
import SavedJobs from '../components/SavedJobs';
import SavedJobDetail from '../components/SavedJobDetail';
import StudentList from '../components/StudentList';
import StudentDetail from '../components/StudentDetail';

export const jobRoutes = [
  { path: '/dashboard/', component: Dashboard },
  { path: '/jobs', component: JobsList },
  { path: '/jobs/:id', component: JobDetail },
  { path: '/savedJobs/', component: SavedJobs },
  { path: '/savedJobs/:id', component: SavedJobDetail }
];

export const studentRoutes = [
  { path: '/students/', component: StudentList },
  { path: '/students/:id', component: StudentDetail },
  { path: '/profile/', component: JobsList },
  { path: '/jobs/:id', component: JobDetail }
];
