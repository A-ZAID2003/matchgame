const TabItem = props => {
  const {tabsList, setActivetabId} = props
  const {tabId, displayText} = tabsList

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
