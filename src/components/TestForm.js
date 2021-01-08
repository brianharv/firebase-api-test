import React from 'react';
import PropTypes from 'prop-types';
import TestReusableForm from './TestReusableForm';
import firebase from '../firebase';

const TestForm = props => {

  function addTestDataToFirestore(event) {
    event.preventDefault();
    props.onNewTestData();
    return firebase.firestore().collection('test').add(
      {
        name: event.target.name.value,
        age: event.target.age.value,
        desc: event.target.desc.value
      }
    )
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