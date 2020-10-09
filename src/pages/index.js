import React, { useState, useEffect } from "react"

import Container from "../components/container"
import UploadButton from "../components/UploadButton"

import Button from "@material-ui/core/Button"

// This is pinned at 2.4.0 because of a breaking change in 2.5.0
require('@tensorflow/tfjs-backend-cpu')
require("@tensorflow/tfjs-backend-webgl")

export default function Home() {

  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()

  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }
    setSelectedFile(e.target.files[0])
  }

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const mobilenet = require('@tensorflow-models/mobilenet')
  const cocoSsd = require('@tensorflow-models/coco-ssd')

  const idImage = async () => {
    const model = await mobilenet.load()
    const img = document.getElementById('test')
    const predictions = await model.classify(img)
    console.log(predictions)
  }

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
          <img src={preview} id="test" alt="ID this" />
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
