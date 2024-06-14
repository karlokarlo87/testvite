import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthSuccess from "./components/AuthSuccess";
import AuthSuccess1 from "./components/AuthSuccess1";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/blogs" element={<AuthSuccess />} />
            <Route path="/contact" element={<AuthSuccess1 />} />
            <Route path="*" element={<AuthSuccess />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
