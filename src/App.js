import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Todo } from "./pages";
import Protected from "./routes/Protected";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<Protected />}>
        <Route path="/todo" element={<Todo />} />
      </Route>
    </Routes>
  );
}

export default App;

//axios의 디폴트헤더
