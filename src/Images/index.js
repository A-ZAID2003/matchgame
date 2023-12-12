import './index.css'

const Images = props => {
  const {imagesList, setActiveThumbnail} = props
  const {id, imageUrl, thumbnailUrl, category} = imagesList

  const onClickThumbnail = () => {
    setActiveThumbnail(id)
  }

  return (
    <li>
      <button type="button" onClick={onClickThumbnail}>
        <img src={thumbnailUrl} alt={category} />
      </button>
    </li>
  )
}

export default Images
