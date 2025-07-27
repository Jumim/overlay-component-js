import { Routes, Route } from 'react-router-dom'
import { MainPage } from '@pages'

export const Router = () => {
  return (
    <Routes>
      <Route element={<MainPage />} path="/" />
    </Routes>
  )
}
