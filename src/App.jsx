import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import About from "./pages/About"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import NotFound from "./pages/Notfound"
import MainLayout from "./components/layout/MainLayout"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
)
}

export default App
