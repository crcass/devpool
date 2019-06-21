import React from 'react';
import { Field, reduxForm } from 'redux-form';

let Comments = ({ handleSubmit, pristine, reset, submitting }) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor="comment">Comment</label>
    <Field name="comment" component="input" type="text" />
    <button type="submit" disabled={pristine || submitting}>
      Submit
    </button>
  </form>
);

Comments = reduxForm({
  form: 'comment'
})(Comments);

export default Comments;
