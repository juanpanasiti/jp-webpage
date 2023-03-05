import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { MyPageApp } from './MyPageApp'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MyPageApp />
  </React.StrictMode>,
)
