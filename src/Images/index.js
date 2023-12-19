import './index.css'

const Images = props => {
  const {imagesDetails, setActiveThumbnail} = props
  const {id, thumbnailUrl, category} = imagesDetails

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
