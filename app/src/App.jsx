import { useState, useEffect } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Sections from './components/Sections'
import EditModal from './components/Editor'

library.add(fas, far, fab)

function App() {
  const [config, setConfig] = useState({})
  const [editModal, setEditModal] = useState(false)

  const getConfig = () => {
    fetch("data/my-conf.json")
      .then(response => response.json())
      .then(data => {
        setConfig(data)
        if (data.title) {
          document.title = data.title
        }
      })
  }

  useEffect(getConfig, [])

  return (
    <>
      <div id="ops-bar">
        <FontAwesomeIcon icon="fa-solid fa-rotate-right" onClick={ getConfig } />
        <FontAwesomeIcon icon="fa-solid fa-pen-to-square" onClick={ () => {setEditModal(!editModal)} }/>
      </div>
      <div id="main-text">
        <div id="title">
          { config.title ? <h1>{ config.title }</h1> : null }
        </div>
        <div id="description">
          { config.description ? <p>{ config.description }</p> : null }
        </div>
      </div>
      <div id="sections">
        { config.sections ? <Sections sections={config.sections} /> : null }
      </div>
      <div id="footer">
        <div id="attrib">
          <p>BuildLess Dash built by <a href="https://dilangilluly.us" target="_blank">Dilan Gilluly</a>.</p>
        </div>
      </div>
      { editModal ? <EditModal config={config} setConfig={setConfig} setEditModal={setEditModal} /> : null }
    </>
  )
}

export default App
