import React, { useState, useEffect } from 'react';

import ContentContainer from '../components/ContentContainer';
import ImagePrediction from '../components/ImagePrediction';
import Info from '../components/Info';

import parseTensorFlowResponse from '../helpers/parseTensorflowResponse';

import Grid from '@material-ui/core/Grid';

require('@tensorflow/tfjs-backend-cpu');
require('@tensorflow/tfjs-backend-webgl');

export default function Home() {
  // These are the two AI model instances
  const mobilenet = require('@tensorflow-models/mobilenet');
  const cocoSsd = require('@tensorflow-models/coco-ssd');

  // State variable that contains the uploaded image
  const [selectedFile, setSelectedFile] = useState();

  // State variable that contains the preview URL
  const [preview, setPreview] = useState();

  // State variable that contains the TensorFlow predictions
  const [predictions, setPredictions] = useState([]);

  const [noPredictions, setNoPredictions] = useState(false);

  // Callback for uploading an image file
  // Need to add error handling for wrong file type
  const onSelectFile = e => {
    setPredictions([]);
    setNoPredictions(false);
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  // Sets image path in state for src attribute
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // Cleans up on unmount
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const getTensorFlowResponse = async () => {
    const mobileNetModel = await mobilenet.load();
    const cocoSsdModel = await cocoSsd.load();

    // Need error handling for empty image
    const img = document.getElementById('uploadedImage');
    const mobileNetPredictions = await mobileNetModel.classify(img);
    const cocoSsdPredictions = await cocoSsdModel.detect(img);
    const tensorFlowResponse = parseTensorFlowResponse(mobileNetPredictions, cocoSsdPredictions);
    tensorFlowResponse.length > 0 ? setPredictions(tensorFlowResponse) : setNoPredictions(true);
  };

  return (
    <>
      <ContentContainer>
        <Grid container spacing={6}>
          <Grid item sm={6} xs={12}>
            <Info />
          </Grid>
          <Grid item sm={6} xs={12}>
            <ImagePrediction
              preview={preview}
              onSelectFile={onSelectFile}
              getTensorFlowResponse={getTensorFlowResponse}
              predictions={predictions}
              noPredictions={noPredictions}
            />
          </Grid>
        </Grid>
      </ContentContainer>
    </>
  );
}
