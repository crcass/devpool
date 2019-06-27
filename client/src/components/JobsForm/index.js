import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

let JobsForm = ({ handleSubmit, pristine, submitting }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Field
          name="title"
          component="input"
          type="text"
          placeholder="job title"
          required
        />
        <Field
          name="description"
          component="input"
          type="text"
          placeholder="description"
          required
        />
        <Field
          name="link"
          component="input"
          type="url"
          placeholder="link to apply"
          required
        />
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  initialValues: {
    author: state.auth.currentUser.uid,
    company: 'good company',
    image: 'lol.jpg',
    website: 'www.bob.com'
  }
});

JobsForm = reduxForm({ form: 'job' })(JobsForm);

export default connect(mapStateToProps)(JobsForm);
