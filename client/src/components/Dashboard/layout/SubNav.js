import React from 'react';
import { Link } from 'react-router-dom';
import SubNavContainer from './SubNavContainer';

const SubNav = ({ comments, currentUser, jobs, savedJobs }) => (
  <SubNavContainer>
    <ul>
      {currentUser.provider === 'google.com' && (
        <li>
          <Link to="/dashboard/students">Students</Link>
        </li>
      )}
      <li>
        <Link to="/dashboard/jobs">Jobs ({jobs.length})</Link>
      </li>
      <li>
        <Link to="/dashboard/comments/">Comments ({comments.length})</Link>
      </li>
      {currentUser.provider === 'github.com' && (
        <li>
          <Link to="/dashboard/savedJobs/">{savedJobs.length} Saved Jobs</Link>
        </li>
      )}
    </ul>
  </SubNavContainer>
);

export default SubNav;
