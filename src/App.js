import SavetoDB from "./Component/SavetoDB"
import Edit from "./Component/Edit"
import Show from "./Component/Show"
import Details from "./Component/Details";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Show />} />
          <Route path="/edit/:id" element={<Edit/>} />
          <Route path="/form" element={<SavetoDB/>}/>
          <Route path="/details/:id" element={<Details/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
