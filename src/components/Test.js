import React, { useEffect, useState } from 'react';
import firebase from '../firebase';

const Test = () => {

  const [loading, setLoading] = useState(false);
  const [testData, setTestData] =  useState([]);
  const [gifState, setGifState] = useState([]);

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
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=3`)
    .then(
      response => {
        if (!response.ok) {
          Error (response.statusText);
        }
        console.log(response);
        return response.json();
      }
    )
    .then(
      data => {
        console.log(data.data[0].url)
        return setGifState(data.data[0].url)
      }
    )
    .catch = (error) => {
      return error;
    }
  }, []);

  if (loading) {
    return <h3>loading...</h3>
  }

  
  
  return(
    <React.Fragment>
      {testData.map((test, index) => (
        <div key={test.id}>
        <h3> Person {index + 1}:</h3>
        <p>{test.name}, {test.age}</p>
        <p>{test.desc}</p>
        <p>{gifState}</p>
        </div>
      )
      )}
    </React.Fragment>
  )
}

export default Test;