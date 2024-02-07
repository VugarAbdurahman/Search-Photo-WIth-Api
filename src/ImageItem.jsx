import "./index.css"
import "./App.css"

function ImageItem(imageItems) {
  return (
    <div>
      <img
        className="imageItem"
        src={imageItems.imageItems.urls.small}
        alt={imageItems.imageItems.alt_description}
      />
    </div>
  )
}

export default ImageItem
