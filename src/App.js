import { Route, Routes } from "react-router-dom";
import { ProviderContext } from "./context/contex";
import Start from "./pages/1-Start/Start";
import Home from "./pages/2-Home/Home";

function App() {
  return (
    <ProviderContext>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </ProviderContext>
  );
}

export default App;
