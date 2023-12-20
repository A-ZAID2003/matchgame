import './index.css'

const Images = props => {
  const {imageDetails, setActiveThumbnail} = props
  const {id, thumbnailUrl, category} = imageDetails

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
