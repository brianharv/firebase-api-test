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
        return response.json();
      }
    )
    .then(
      jsonResponse => {
        console.log(jsonResponse.data)
        return setGifState(jsonResponse.data)
      }
    )
    .catch = (error) => {
      return error;
    }
    setLoading(false)
  }, []);

  if (loading) {
    return <h3>loading...</h3>
  }
  
  console.log(gifState)

  return(
    <React.Fragment>
      {testData.map((test, index) => (
        <div key={test.id}>
        <h3> Person {index + 1}:</h3>
        <p>{test.name}, {test.age}</p>
        <p>{test.desc}</p>
        </div>
      )
      )}
      {gifState.map(gif => (
        <div key={gif.id}>
          < img src={gif.images.downsized.url}/>
        </div>
      )
      )}
    </React.Fragment>
  )
}

export default Test;