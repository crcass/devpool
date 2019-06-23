import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const initialState = {
  comments: { comments: [], commentsLoaded: false },
  student: {
    github: null,
    linkedin: null,
    image: null,
    name: null,
    portfolio: null,
    repos: [],
    studentLoaded: false
  },
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
