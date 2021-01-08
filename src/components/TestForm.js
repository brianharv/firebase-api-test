import React from 'react';
import PropTypes from 'prop-types';
import TestReusableForm from './TestReusableForm';

const TestForm = props => {

  function addTestDataToFirestore(event) {
    event.preventDefault();
    props.onNewTestData();
  }

  return (
    <React.Fragment>
      <TestReusableForm 
        formSubmissionHandler={addTestDataToFirestore}
        buttonText = "Submit"
      />
    </React.Fragment>
  )
}

TestForm.propTypes = {
  onNewTestData: PropTypes.func
}

export default TestForm;