import "./App.css";
import Aside from "./components/Aside";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="flex">
        {/* <h1 className='bg-red-500'>gjh</h1> */}
        <div className="bg-pink-300 w-64 flex-none ...">
          <Aside/>
        </div>
        <div className="bg-pink-400 w-64 flex-1 ...">
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default App;
