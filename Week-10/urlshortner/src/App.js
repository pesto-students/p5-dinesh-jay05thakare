import Shortner from "./components/Shortner";
import Result from "./components/Result";
import Header from "./components/Header";

import "./App.css";
import { useState } from "react";

function App() {
  const [shortenedUrl, setShortenedUrl] = useState(
    "You will find shortened link here"
  );
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <Header />
      <Shortner setShortenedUrl={setShortenedUrl} setLoading={setLoading} />
      <Result result={shortenedUrl} loading={loading}/>
    </div>
  );
}

export default App;
