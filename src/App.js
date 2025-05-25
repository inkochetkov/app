import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Projects from "./pages/projects";
import Project from "./pages/project";
import NotFound from "./pages/notfound";


function App() {
  return (
    <>
    <Router>
      <Header />
        <Routes>
          <Route path="/" element ={<Projects />} />
          <Route path="/:name" element ={<Project />} />
          <Route path="*" element={<NotFound/>}  />
        </Routes>
    </Router>
 
    </>
  );
}

export default App;
