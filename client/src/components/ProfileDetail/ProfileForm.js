import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

let ProfileForm = ({ handleSubmit, initialValues, pristine, submitting }) => (
  <div>
    <form onSubmit={handleSubmit}>
      {initialValues.company && (
        <>
          <label htmlFor="company">Company</label>
          <Field
            name="company"
            component="input"
            type="text"
            placeholder="Company"
          />
        </>
      )}
      <label htmlFor="linkedin">LinkedIn</label>
      <Field
        name="linkedin"
        component="input"
        type="url"
        placeholder="LinkedIn"
      />
      {initialValues.portfolio && (
        <>
          <label htmlFor="portfolio">Portfolio</label>
          <Field
            name="portfolio"
            component="input"
            type="url"
            placeholder="Portfolio"
          />
        </>
      )}

      <button type="submit" disabled={pristine || submitting}>
        Submit
      </button>
    </form>
  </div>
);

const mapStateToProps = state => ({
  initialValues: {
    company: state.auth.currentUser.company,
    github: state.auth.currentUser.username,
    linkedin: state.auth.currentUser.linkedin,
    name: state.auth.currentUser.name,
    portfolio: state.auth.currentUser.portfolio,
    uid: state.auth.currentUser.uid
  }
});

ProfileForm = reduxForm({
  form: 'profile'
})(ProfileForm);

export default connect(mapStateToProps)(ProfileForm);
