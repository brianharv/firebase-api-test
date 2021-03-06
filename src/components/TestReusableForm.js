import React from 'react';
import PropTypes from 'prop-types';

const TestReusableForm = props => {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          placeholder='Name'
          name="name"
        />
        <input 
          type='text'
          name='age'
          placeholder='Age'
        />
        <textarea
          name='desc'
          placeholder='Description'
        />
        <button type='submit'> {props.buttonText} </button>  
      </form>
    </React.Fragment>
  )
}

TestReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default TestReusableForm;