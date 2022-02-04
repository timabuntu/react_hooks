import { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("");

  const handleClick = () => {
    if (text === "") {
      setText("Thiago");
    } else {
      setText("");
    }
  };
  return (
    <>
      <div>
        <h2 className="text-xl">{text}</h2>
        <button
          className="px-3 py-2 font-medium bg-blue-500 rounded-md"
          onClick={handleClick}
        >
          Change Title
        </button>
      </div>
    </>
  );
};

export default UseStateBasics;
