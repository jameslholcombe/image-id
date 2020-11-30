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
          {preview !== undefined
          ? (
              <img
                className="image-preview"
                src={preview}
                id="uploadedImage"
                alt="ID this"
              />
            )
          : (
              <div className="upload-container">
                <UploadButton onSelectFile={onSelectFile} predictions={predictions} noPredictions={noPredictions} />
              </div>
            )
          }
        <div className="id-button-container">
          {(predictions.length > 0 || noPredictions === true)
          ? <UploadButton onSelectFile={onSelectFile} predictions={predictions} noPredictions={noPredictions} />
          : (preview !== undefined) && (
            <Button onClick={getTensorFlowResponse} variant="outlined" color="primary" size="large">
              Identify
            </Button>
          )}
        </div>
        {predictions.length > 0 && <Predictions predictions={predictions} />}
        {noPredictions === true && <div>Cannot find a match</div>}
      </div>
    </>
  );
};

export default ImagePrediction;
