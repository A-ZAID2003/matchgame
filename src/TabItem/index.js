const TabItem = props => {
  const {tabsDetails, setActivetabId} = props
  const {tabId, displayText} = tabsDetails

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
