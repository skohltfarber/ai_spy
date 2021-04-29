import React, { useState, useEffect, useRef } from "react";
import Default from "../layout/default.js";
import firebase from "../firebase/config";

import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import '../css/style.scss';

// markup
const IndexPage = () => {

  const [isModelLoading, setIsModelLoading] = useState(false);
  const [model, setModel] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [results, setResults] = useState([]);

  const imageRef = useRef();
  const fileInputRef = useRef();

  const loadModel = async () => {
    setIsModelLoading(true);
    try {
      const model = await mobilenet.load();
      setModel(model)
      setIsModelLoading(false);
    } catch (error) {
      console.log(error);
      setIsModelLoading(false);
    }
  }

  const uploadImage = (e) => {
    setResults([]);
    const { files } = e.target
    if (files.length > 0) {
      const url = URL.createObjectURL(files[0])
      setImageURL(url)
    } else {
      setImageURL(null)
    }
  }

  const handlePrediction = async () => {
    const results = await model.classify(imageRef.current);
    setResults(results);

    // Store Results and Image
    saveResults(results);
  }

  const saveResults = results => {

    const guess = {
      guess_1: results[0].className,
      probability_1: results[0].probability,
      guess_2: results[1].className,
      probability_2: results[1].probability,
      guess_3: results[2].className,
      probability_3: results[2].probability,
      createdAt: Date.now()

    }

    firebase
      .firestore()
      .collection('guess')
      .add(
        guess
      );
  }

  const handleTriggerUpload = () => {
    setResults([]);
    fileInputRef.current.click()
  }

  useEffect(() => {
    loadModel();
  }, []);

  if (isModelLoading) {
    return <h2>Model Loading...</h2>
  }

  return (
    <Default> <div className="App">
      <h1 className="header">Let AI Spy on You!!</h1>
      <div className='inputHolder'>
        <input type='file' accept="image/*" capture='camera' className="uploadInput"
          onChange={uploadImage} ref={fileInputRef}
        />
        <button className="uploadImage" onClick={handleTriggerUpload}>Upload Spy Image</button>&nbsp;&nbsp;
        {imageURL && <button className="button" onClick={handlePrediction}>
          AI Spy
        </button>}
      </div>
      <div className="mainWrapper">
        <div className="mainContent">
          <div className="imageHolder">
            {imageURL && <img src={imageURL} alt="Upload Preview" crossOrigin="anonymous" ref={imageRef} />}
          </div>
          {results.length > 0 && <div className="resultsHolder">
            {results.map((results, index) => {
              return (
                <div className="result" key={results.className}>
                  <span className="name">{results.className}</span>
                  <span className="confidence">Confidence level:{(results.probability * 100).toFixed(2)}% {index === 0 && <span className="bestGuess">Best Guess
</span>}</span>
                </div>
              )
            })}
          </div>}
        </div>
      </div>
    </div></Default>
  )
}

export default IndexPage