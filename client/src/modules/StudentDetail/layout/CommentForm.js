import React from 'react';
import { Field, reduxForm } from 'redux-form';

let CommentForm = ({ handleSubmit, pristine, submitting }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <Field name="author" component="input" type="text" placeholder="author" />
      <Field
        name="comment"
        component="input"
        type="text"
        placeholder="add a comment"
      />
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
