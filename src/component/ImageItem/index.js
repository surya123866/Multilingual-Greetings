import './index.css'

const ImageItem = props => {
  const {activeImagedetails} = props
  const {imageUrl, imageAltText} = activeImagedetails
  return <img src={imageUrl} alt={imageAltText} width="500" height="600" />
}
export default ImageItem
