import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import FormWrap from '../../shared/FormWrap';

let CommentForm = ({ handleSubmit, pristine, submitting }) => (
  <FormWrap>
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Add a comment</label>
      <Field name="comment" component="input" type="text" />
      <label htmlFor="link">Link (optional)</label>
      <Field name="link" component="input" type="url" />
      <button type="submit" disabled={pristine || submitting}>
        Submit
      </button>
    </form>
  </FormWrap>
);

const mapStateToProps = state => ({
  initialValues: {
    author: state.auth.currentUser.name
  }
});

CommentForm = reduxForm({
  form: 'comment'
})(CommentForm);

export default connect(mapStateToProps)(CommentForm);
