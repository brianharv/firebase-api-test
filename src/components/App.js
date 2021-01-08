import React, { useEffect } from 'react';
import TestControl from './TestControl';

const App = () => {
  useEffect(() => {
    document.title = `Testing Firebase Out`;
  });
  return(
    <React.Fragment>
      <TestControl />
    </React.Fragment>
  )
}

export default App;