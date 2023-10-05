// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imagesListDetails, onUpdateThumbnailId, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imagesListDetails
  const thumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'
  const onBtnClick = () => {
    onUpdateThumbnailId(id)
  }

  return (
    <li className="list-container">
      <button type="button" className="button" onClick={onBtnClick}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
