import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthSuccess from "./components/AuthSuccess";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthSuccess />}>
            <Route index element={<AuthSuccess />} />
            <Route path="blogs" element={<AuthSuccess />} />
            <Route path="contact" element={<AuthSuccess />} />
            <Route path="*" element={<AuthSuccess />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
