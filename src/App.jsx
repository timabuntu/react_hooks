import { useState } from "react";
import UseStateBasics from "./components/UseStateBasics";

function App() {
  return (
    <div className="App">
      <h1 className="text-lg text-center">React Hooks</h1>
      <main className="flex items-center justify-center min-h-screen">
        <UseStateBasics />
      </main>
    </div>
  );
}

export default App;
