import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [result, setResult] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<PageOne result={result} setResult={setResult} />}
          />
          <Route
            path="/happysweetseventeen"
            element={<PageTwo result={result} setResult={setResult} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
