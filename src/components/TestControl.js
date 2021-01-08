import React from 'react';
import TestList from './TestControl';
import TestForm from  './TestForm';
import { useState } from 'react';

const TestControl = () => {

  const [formVisible, setFormVisible] = useState(false)


  const handleFormVisible = () => {
    const newFormVisible = {...formVisible}
    return setFormVisible(!newFormVisible)
  }

  

  let currentVisible = null;
  let buttonText = null;

  if (formVisible) {
    currentVisible = <TestForm  onNewDataCreation={handleFormVisible}/>
    buttonText = "Return to Test List"
  } else {
    currentVisible = <TestList />
    buttonText = "Add a Test Data Item"
  }
  return (
    <React.Fragment>
      {currentVisible}
      <button onClick={handleFormVisible}>{buttonText}</button>
    </React.Fragment>    
  )
}

export default TestControl;