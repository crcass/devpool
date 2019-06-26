import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const initialState = {
  auth: {
    currentUser: null,
    loggedIn: false,
    loggingIn: false
  },
  comments: { comments: [], commentsLoaded: false },
  jobs: { jobs: [], jobsLoaded: false },
  repos: {
    repos: [],
    reposLoaded: false
  },
  savedJobs: { savedJobs: [], savedJobsLoaded: false },
  students: {
    students: [],
    studentsLoading: false,
    studentsLoaded: false
  }
};

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export default store;
