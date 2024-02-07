import React from "react"
import ImageItem from "./ImageItem"
import "./index.css"
import "./App.css"

import "./App.css"
function Image({ imagePlaceHolder }) {
  return (
    <div className="imageList  ">
      {imagePlaceHolder.map((image, index) => {
        return <ImageItem key={index} imageItems={image} />
      })}
    </div>
  )
}
export default Image
