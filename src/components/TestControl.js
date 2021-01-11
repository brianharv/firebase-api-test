import React, { useState } from 'react';
import TestList from './TestList';
import TestForm from  './TestForm';

const TestControl = () => {

  const [formVisible, setFormVisible] = useState(false);


  const handleFormVisible = () => {
    if (formVisible === false) {
      return setFormVisible(true)
    } else {
      return setFormVisible(false)
    }
  }

  let currentVisible = null;
  let buttonText = null;

  if (formVisible) {
    currentVisible = <TestForm onNewTestData={handleFormVisible} />
    buttonText = "Return to Test List"
  } else {
    currentVisible = <TestList />
    buttonText = "Add a Test Data Item"
  }
  return (
    <React.Fragment>
      <h3> This is the Test Control Component</h3>
      {currentVisible}
      <button onClick={handleFormVisible}>{buttonText}</button> 
    </React.Fragment>    
  )
}

export default TestControl;