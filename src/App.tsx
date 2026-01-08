import {Routes, Route} from "react-router-dom";
import Dashboard  from "./pages/Dashboard.tsx";
import Layout from "@/pages/layout.tsx";
import {ThemeProvider} from "@/components/theme/theme-provider.tsx";
import NotFound from "@/pages/NotFound.tsx";
import Companies from "@/pages/Companies/Companies.tsx";


function App() {

  return (
      <ThemeProvider>
          <Routes>
              <Route path="/" element={<Layout/>} >
                  <Route index element={<Dashboard/>} />
                  <Route path="/companies" element={<Companies/>} />
              </Route>

              <Route path="*" element={<NotFound/>} />
          </Routes>
      </ThemeProvider>
  )
}

export default App
