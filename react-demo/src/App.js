import { useState } from "react";

function WelcomeMessage(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="App">
      <WelcomeMessage name="Student" />
      <button onClick={() => setShowMessage(!showMessage)}>
        Toggle Message
      </button>
      {showMessage && <p>This is a hidden message!</p>}
    </div>
  );
}

export default App;
