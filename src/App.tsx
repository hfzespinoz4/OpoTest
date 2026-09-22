import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ScalesIndexPage from './pages/ScalesIndexPage'
import ScaleDetailPage from './pages/ScaleDetailPage'
import PracticePage from './pages/PracticePage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="escalas" element={<ScalesIndexPage />} />
        <Route path="escalas/:scaleId" element={<ScaleDetailPage />} />
        <Route path="practicar" element={<PracticePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
