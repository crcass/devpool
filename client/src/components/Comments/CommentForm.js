import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

let CommentForm = ({ handleSubmit, pristine, submitting }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <Field
        name="comment"
        component="input"
        type="text"
        placeholder="add a comment"
      />
      <Field
        name="link"
        component="input"
        type="url"
        placeholder="link (optional)"
      />
      <button type="submit" disabled={pristine || submitting}>
        Submit
      </button>
    </form>
  </div>
);

const mapStateToProps = state => ({
  // take name from database
  initialValues: {
    author: state.auth.currentUser.uid
  }
});

CommentForm = reduxForm({
  form: 'comment'
})(CommentForm);

export default connect(mapStateToProps)(CommentForm);
