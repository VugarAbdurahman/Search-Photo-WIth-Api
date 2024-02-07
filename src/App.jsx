import React, { useState } from "react"
import { SearchHeader } from "./SearchHeader"
import searchImages from "./api"
import Image from "./Image"
import "./App.css"
import "./index.css"

const App = () => {
  const [images, setImages] = useState([])
  const handleSubmit = async (term) => {
    const result = await searchImages(term)

    setImages(result)
  }

  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <Image imagePlaceHolder={images} />
    </div>
  )
}

export default App
