const Images = props => {
  const {imagesList} = props
  const {id, imageUrl, thumbnailUrl, category} = imagesList
  return (
    <div>
      <ul>
        <li>
          <img src={imageUrl} className="images" />
        </li>
      </ul>
    </div>
  )
}

export default Images
