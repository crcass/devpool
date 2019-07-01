import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import FormWrap from '../../shared/FormWrap';

let AddUserForm = ({ handleSubmit, initialValues, pristine, submitting }) => (
  <FormWrap>
    <form onSubmit={handleSubmit}>
      {initialValues.provider === 'google.com' && (
        <>
          <label htmlFor="company">Current Employer</label>
          <Field name="company" component="input" type="text" />
          <label htmlFor="website">Company Website</label>
          <Field
            name="website"
            component="input"
            type="url"
            placeholder="must start with https://"
          />
        </>
      )}
      <label htmlFor="linkedin">LinkedIn Page</label>
      <Field
        name="linkedin"
        component="input"
        type="url"
        placeholder="must start with https://"
      />
      {initialValues.provider === 'github.com' && (
        <>
          <label htmlFor="portfolio">Portfolio Link</label>
          <Field
            name="portfolio"
            component="input"
            type="url"
            placeholder="must start with https://"
          />
        </>
      )}
      <button disabled={pristine || submitting}>Submit</button>
    </form>
  </FormWrap>
);

const mapStateToProps = state => ({
  initialValues: {
    company: state.auth.currentUser.company,
    github: state.auth.currentUser.username,
    linkedin: state.auth.currentUser.linkedin,
    name: state.auth.currentUser.name,
    portfolio: state.auth.currentUser.portfolio,
    provider: state.auth.currentUser.provider,
    uid: state.auth.currentUser.uid
  }
});

AddUserForm = reduxForm({
  form: 'addUser'
})(AddUserForm);

export default connect(mapStateToProps)(AddUserForm);
