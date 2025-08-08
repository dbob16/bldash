import { useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './Editor.css'

function EditModal({config, setConfig, setEditModal}) {
  const editField = useRef(null)

  const updateConfig = () => {
    setConfig(JSON.parse(editField.current.value))
    setEditModal(false)
  }

  const prettify = () => {
    const dataObject = JSON.parse(editField.current.value)
    editField.current.value = JSON.stringify(dataObject, null, 2)
  }

  useEffect(() => {
    editField.current.value = JSON.stringify(config, null, 2)
  })

  return (
  <>
  <div id="editor-wrapper">
    <div id="editor-title">
      <div className="left">Edit Config</div>
      <div className="right"><FontAwesomeIcon icon="fa-solid fa-xmark" onClick={() => {setEditModal(false)}} /></div>
    </div>
    <div>
      <textarea ref={editField}></textarea>
    </div>
    <div id="button-container">
      <button onClick={updateConfig}>Test</button>
      <button onClick={prettify}>Prettify</button>
      <button onClick={() => {setEditModal(false)}}>Cancel</button>
    </div>
  </div>
  </>
  )
}

export default EditModal
