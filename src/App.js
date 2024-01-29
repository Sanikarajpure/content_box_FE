import "./App.css";
import { Routes, Route } from "react-router-dom";
import PreventSigninRoute from "./utilities/preventSignInRoute";
import PrivateRoute from "./utilities/privateRoute";
import Register from "./routes/register";
import Login from "./routes/login";
import Content from "./routes/contentForm";
import ContentPreview from "./routes/contentPreview";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PreventSigninRoute />}>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/" element={<Login />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route exact path="/content/upload" element={<Content />} />
          <Route exact path="/content/view" element={<ContentPreview />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
