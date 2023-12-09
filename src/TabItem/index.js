const TabItem = props => {
  const {tabsList} = props
  const {tabId, displayText} = tabsList
  return (
    <div>
      <ul>
        <li>
          <p>{displayText}</p>
        </li>
      </ul>
    </div>
  )
}

export default TabItem
