import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function UploadButton({ onSelectFile, predictions, noPredictions }) {
  const classes = useStyles();

  return (
    <div className={`upload-button ${classes.root}`}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        type="file"
        onChange={onSelectFile}
      />
      <label htmlFor="contained-button-file">
        <Button color="primary" component="span">
          {(predictions.length > 0 || noPredictions === true) ? <span>Upload New Image</span> : <span>Upload</span>}
        </Button>
      </label>
      <input
        accept="image/*"
        className={classes.input}
        id="icon-button-file"
        type="file"
        onChange={onSelectFile}
      />
      <label htmlFor="icon-button-file">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
  );
}
