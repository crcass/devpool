import React from 'react';
import { Field, reduxForm } from 'redux-form';

let CommentForm = ({ handleSubmit, pristine, reset, submitting }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Comment</label>
      <Field name="comment" component="input" type="text" />
      <button type="submit" disabled={pristine || submitting}>
        Submit
      </button>
    </form>
  </div>
);

CommentForm = reduxForm({
  form: 'comment'
})(CommentForm);

export default CommentForm;
