import {Routes, Route} from "react-router-dom";
import Login from "./pages/auth/Login.tsx";
import Dashboard  from "./pages/Dashboard.tsx";

function App() {

  return (
    <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="" element={<Dashboard/>} />
    </Routes>
  )
}

export default App
