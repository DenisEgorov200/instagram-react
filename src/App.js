import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Postspage from "./pages/Postspage";
import Profilepage from "./pages/Profilepage";
import Notfoundpage from "./pages/Notfoundpage";

import Layuot from "./components/Layuot";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layuot />}>
          <Route index element={<Postspage />} />
          <Route path="profile" element={<Profilepage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
