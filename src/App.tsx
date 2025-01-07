import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { Definition } from "./pages/Definition";
import { Pil } from "./pages/Pil";
import { Rcr } from "./pages/Rcr";
import { Wheelover } from "./pages/Wheelover";
import { Anchoring } from "./pages/Anchoring";
import { Howisthisdone } from "./pages/Howisthisdone";
import { Accuracy } from "./pages/Accuracy";
import { Factors } from "./pages/Factors";
import { Explain } from "./pages/Explain";
import { Demo } from "./pages/Demo";
import { Symbol } from "./pages/Symbol";
import { Symbol2 } from "./pages/Symbol2";
import { Demo2 } from "./pages/Demo2";
import { Explain2 } from "./pages/Explain2";
import { Bridge } from "./pages/Bridge";

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/definition" element={<Definition/>}/>
        <Route path="/paralellIndexLines" element={<Pil/>}/>
        <Route path="/radarClearingRanges" element={<Rcr/>}/>
        <Route path="/wheelover" element={<Wheelover/>}/>
        <Route path="/anchoring" element={<Anchoring/>}/>
        <Route path="/howisthisdone" element={<Howisthisdone/>}/>
        <Route path="/accuracy" element={<Accuracy/>}/>
        <Route path="/factors" element={<Factors/>}/>
        <Route path="/symbol" element={<Symbol/>}/>
        <Route path="/explain" element={<Explain/>}/>
        <Route path="/explain2" element={<Explain2/>}/>
        <Route path="/demo" element={<Demo/>}/>
        <Route path="/demo2" element={<Demo2/>}/>
        <Route path="/symbol2" element={<Symbol2/>}/>
        <Route path="/bridge" element={<Bridge/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App
