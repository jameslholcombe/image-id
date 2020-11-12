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
      <div>
        <UploadButton onSelectFile={onSelectFile} />
      </div>
      <Button onClick={getTensorFlowResponse} variant="contained" color="primary">
        ID Image
      </Button>
      {predictions.length > 0 && <Predictions predictions={predictions} />}
      {noPredictions === true && <div>Cannot find a match</div>}
    </>
  );
};

export default ImagePrediction;
