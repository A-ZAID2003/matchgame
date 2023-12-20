const TabItem = props => {
  const {tabDetails, setActivetabId} = props
  const {tabId, displayText} = tabDetails

  const onClickTabId = () => {
    setActivetabId(tabId)
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
