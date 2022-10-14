import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import { Register, Login, Todo } from "./pages";
import Protected from "./routes/Protected";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Protected />}>
          <Route path="/todo" element={<Todo />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

//axios의 디폴트헤더
