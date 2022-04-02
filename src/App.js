import BatchingExample from "./exempels/BatchingExample";
import UseTransition from "./exempels/UseTransition";
import UseDeferredValue from "./exempels/UseDeferredValue";

function App() {
  return (
    <div className="App">
      <h4>Batching</h4>
     <BatchingExample/>
     <hr/>
      <h4>UseDeferredValue hook</h4>
      {/*<UseTransition/>*/}
      <UseDeferredValue/>
    </div>
  );
}

export default App;
