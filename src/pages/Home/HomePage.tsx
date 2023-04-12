import "./Home.scss";

import { useState } from "react";

import reactLogo from "@/assets/react.svg";
import { useAppSelector } from "@/store/setupStores";

import viteLogo from "../../../public/vite.svg";

function App() {
  const nickName = useAppSelector(({ userInfo }) => userInfo.nickName);
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 data-testid="greetings">Hello, {nickName}</h1>
      <div className="card">
        <button data-testid="increase" type="button" onClick={() => setCount((count) => count + 1)}>
          count is <div data-testid="count">{count}</div>
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
