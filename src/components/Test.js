import React, { useEffect, useState } from 'react';
import firebase from '../firebase';

const Test = () => {

  const [loading, setLoading] = useState(false);
  const [testData, setTestData] =  useState([]);

  const ref = firebase.firestore().collection('test');

  const getTestData = () => {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach(doc => {
        items.push(doc.data());
      });
      setTestData(items)
      setLoading(false)
    })
  }

  useEffect(()=> {
    getTestData();
  },[]);

  if (loading) {
    return <h3>loading...</h3>
  }

  return(
    <React.Fragment>
      <h3> Person:</h3>
      {testData.map((test) => (
        <div key={test.id}>
        <p>{test.name}, {test.age}</p>
        <p>{test.desc}</p> 
        </div>
      )
      )}
      <hr/>
    </React.Fragment>
  )
}

export default Test;