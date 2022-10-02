import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Content } from './Content'
import { ErrorPage } from './pages/ErrorPage'
import { Info } from './pages/Info'
import { Missions } from './pages/Missions'
import { Paralax } from './pages/Paralax'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Paralax />} />
        <Route path='' element={<Content />}>
          <Route path='missions' element={<Missions />} />
          <Route path='missions/:missionId' element={<Missions />} />
          <Route path='info' element={<Info />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
