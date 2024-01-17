import { useState } from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Meme />
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}

export default App;
