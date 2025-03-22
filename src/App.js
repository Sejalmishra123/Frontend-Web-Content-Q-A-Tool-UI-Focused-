import { useState } from "react";
import axios from "axios";

function App() {
  const [urls, setUrls] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleIngest = async () => {
    await axios.post(
      "https://backend-web-content-q-a-tool.onrender.com/ingest",
      { urls: urls.split(",") }
    );
    alert("Content Ingested!");
  };

  const handleAsk = async () => {
    const response = await axios.post(
      "https://backend-web-content-q-a-tool.onrender.com/ask",
      {
        question,
      }
    );
    setAnswer(response.data.answer);
  };

  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h1> Web Content Q & A Tool </h1>{" "}
      <textarea
        rows="3"
        cols="50"
        placeholder="Enter URLs (comma-separated)..."
        onChange={(e) => setUrls(e.target.value)}
      />{" "}
      <br />
      <button onClick={handleIngest}> Ingest Content </button> <br /> <br />
      <textarea
        rows="2"
        cols="50"
        placeholder="Ask a question..."
        onChange={(e) => setQuestion(e.target.value)}
      />{" "}
      <br />
      <button onClick={handleAsk}> Get Answer </button> <br /> <br />{" "}
      {answer && <h3> Answer: {answer} </h3>}{" "}
    </div>
  );
}

export default App;
