import Comments from '../components/Comments';
import JobDetail from '../components/JobDetail';
import JobsList from '../components/JobsList';
import SavedJobs from '../components/SavedJobs';
import SavedJobDetail from '../components/SavedJobDetail';
import StudentList from '../components/StudentList';
import StudentDetail from '../components/StudentDetail';

const staticRoutes = [
  { path: '/dashboard/comments/', component: Comments },
  { path: '/dashboard/jobs', component: JobsList },
  { path: '/jobs/:id', component: JobDetail }
];

export const studentRoutes = [
  ...staticRoutes,
  { path: '/dashboard/savedJobs', component: SavedJobs },
  { path: '/savedJobs/:id', component: SavedJobDetail }
];

export const recruiterRoutes = [
  ...staticRoutes,
  { path: '/dashboard/students', component: StudentList },
  { path: '/students/:id', component: StudentDetail }
];
