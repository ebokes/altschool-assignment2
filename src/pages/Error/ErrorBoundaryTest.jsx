import React from "react";
import { useState } from "react";
import { ErrorTestContainer, IncrementBtn } from "./styles";

const ErrorBoundaryTest = () => {
  const [counter, setCounter] = useState(0);
  const [decrement, setDecrement] = useState(3);

  const handleCount = () => {
    setCounter((prev) => prev + 1);
    setDecrement((prev) => prev - 1);
  };

  if (counter === 3) {
    // Simulate an error!
    throw new Error("Simulated error.");
  }

  return (
    <ErrorTestContainer>
      <div>
        <h2>This is a simulated ErrorBoundary page</h2>
        <h1>{counter}</h1>
        <IncrementBtn onClick={handleCount}>+</IncrementBtn>
        <p>
          Click the button {decrement}{" "}
          {decrement === 3 ? "" : decrement === 2 ? "more " : "last "}
          time
          {decrement !== 1 && "s"} to trigger an error
        </p>
      </div>
    </ErrorTestContainer>
  );
};

export default ErrorBoundaryTest;
