import { Route, Routes } from "react-router-dom";
import { ProviderContext } from "./context/contex";
import Start from "./pages/1-Start/Start";
import Home from "./pages/2-Home/Home";
import Register from "./pages/3-Register/Register";

function App() {
  return (
    <ProviderContext>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>} />
      </Routes>
    </ProviderContext>
  );
}

export default App;
