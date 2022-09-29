import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'

import Button from './button'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Button type="primary" className=" w-full rounded-lg">
      Hello
    </Button>
  </React.StrictMode>
)

reportWebVitals()
