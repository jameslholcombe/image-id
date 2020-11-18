import React from 'react';

import Button from '@material-ui/core/Button';

import Predictions from './Predictions';
import UploadButton from './UploadButton';

const ImagePrediction = ({
  preview,
  onSelectFile,
  getTensorFlowResponse,
  predictions,
  noPredictions,
}) => {
  return (
    <>
      <div className="image-prediction">
        <div>
          {preview && (
            <img
              className="image-preview"
              src={preview}
              id="uploadedImage"
              alt="ID this"
            />
          )}
        </div>
        <div className="upload-container">
          <UploadButton onSelectFile={onSelectFile} />
        </div>
        <div className="id-button-container">
          <Button onClick={getTensorFlowResponse} variant="outlined" color="primary" size="large">
            ID Image
          </Button>
        </div>
        {predictions.length > 0 && <Predictions predictions={predictions} />}
        {noPredictions === true && <div>Cannot find a match</div>}
      </div>
    </>
  );
};

export default ImagePrediction;
