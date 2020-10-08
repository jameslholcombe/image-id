import React from "react"

import Container from "../components/container"
import Button from "@material-ui/core/Button"

export default function Home() {
  require("@tensorflow/tfjs-backend-webgl")
  const mobilenet = require('@tensorflow-models/mobilenet')
  const image = require("../../static/coffee.jpg")

  const idImage = async () => {
    const model = await mobilenet.load()
    const img = document.getElementById('test')
    const predictions = await model.classify(img)
    console.log(predictions)
  }

  return (
    <>
      <Container>
        <div>Home page</div>
        <img src={image} id="test" alt="ID this" />
        <Button onClick={idImage} variant="contained" color="primary">ID</Button>
      </Container>
    </>
  )
}
