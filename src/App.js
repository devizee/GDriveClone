import Data from "./Data";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
    <Header/>
    <div className="App">
      <Sidebar/>
      <Data/>
    </div>
    </>
  );
}

export default App;
