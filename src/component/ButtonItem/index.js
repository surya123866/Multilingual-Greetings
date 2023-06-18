import './index.css'

const ButtonItem = props => {
  const {eachItemDetails, setActiveButtonId, isActive} = props
  const {id, buttonText} = eachItemDetails

  const buttonClick = () => {
    setActiveButtonId(buttonText)
  }

  const activeClassName = isActive ? 'button active' : 'button'

  return (
    <li className="list">
      <button type="button" className={activeClassName} onClick={buttonClick}>
        {buttonText}
      </button>
    </li>
  )
}

export default ButtonItem
