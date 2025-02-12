import "./App.css";
import countStore from "../store/count";
import inputStore from "../store/input";

function App() {
  const { increase, decrease, count } = countStore();
  const { firstName, lastName, updateFName, updateLName } = inputStore();

  return (
    <div>
      <h1>Zustand Learning</h1>
      <div className="card">  
        <h2>From the count store is {count}</h2>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      </div>
      <div>
        <h2>From the input store</h2>
        <p>Current first name: {firstName}</p>
        <p>Current last name: {lastName}</p>
        <input
          type="text"
          placeholder="first name"
          onChange={(e) => updateFName(e.currentTarget.value)}
        />
        <input
          type="text"
          placeholder="last name"
          onChange={(e) => updateLName(e.currentTarget.value)}
        />
      </div>
    </div>
  );
}

export default App;
