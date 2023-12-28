const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabId = () => {
    setActiveTabId(tabId)
  }

  return (
    <div>
      <ul>
        <li>
          <button type="button" onClick={onClickTabId}>
            {displayText}
          </button>
        </li>
      </ul>
    </div>
  )
}

export default TabItem
