import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import { Register, Login, Todo } from "./pages";
import Protected from "./routes/Protected";
import Public from "./routes/Public";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<Public />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<Protected />}>
          <Route path="/todo" element={<Todo />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

//axios의 디폴트헤더
