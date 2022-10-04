import { Route, Routes } from "react-router-dom";
import { ProtectRoute } from "./components/ProtectRoute/ProtectRoute";
import { ProviderContext } from "./context/contex";
import Start from "./pages/1-Start/Start";
import Home from "./pages/2-Home/Home";
import Register from "./pages/3-Register/Register";
import ViewProduct from "./pages/4-ViewProduct/ViewProduct";

function App() {
  return (
    <ProviderContext>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={ <ProtectRoute> <Home /> </ProtectRoute> } />
        <Route path="/product/:name/:id" element={<ViewProduct/>}/>
      </Routes>
    </ProviderContext>
  );
}

export default App;
