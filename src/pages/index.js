import React, { useState, useEffect } from "react"

import Container from "../components/container"
import UploadButton from "../components/UploadButton"

import Button from "@material-ui/core/Button"

// This is pinned at 2.4.0 because of a breaking change in 2.5.0
require('@tensorflow/tfjs-backend-cpu')
require("@tensorflow/tfjs-backend-webgl")

export default function Home() {

  // These are the two AI model instances
  const mobilenet = require('@tensorflow-models/mobilenet')
  const cocoSsd = require('@tensorflow-models/coco-ssd')

  // State variable that contains the uploaded image
  const [selectedFile, setSelectedFile] = useState()

  // State variable that contains the preview URL
  const [preview, setPreview] = useState()

  // Callback for uploading an image file
  // Need to add error handling for wrong file type
  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }
    setSelectedFile(e.target.files[0])
  }

  // Sets image path in state for src attribute
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }
    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // Cleans up on unmount
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  // Run Mobilenet model
  const idImage = async () => {
    const model = await mobilenet.load()
    const img = document.getElementById('test')
    const predictions = await model.classify(img)
    console.log(predictions)
  }

  // Run CocoSsd model
  const idObjects = async () => {
    const model = await cocoSsd.load()
    const img = document.getElementById('test')
    const predictions = await model.detect(img)
    console.log(predictions)
  }

  return (
    <>
      <Container>
        <div>Home page</div>
        <div>
          {preview && <img src={preview} id="test" alt="ID this" />}
        </div>
        <div>
          <UploadButton onSelectFile={onSelectFile} />
        </div>
        <Button onClick={idImage} variant="contained" color="primary">ID Image</Button>
        <Button onClick={idObjects} variant="contained" color="primary">ID Objects</Button>
      </Container>
    </>
  )
}
