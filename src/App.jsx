import "./App.css";
import Aside from "./components/Aside";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="flex h-screen">
        {/* <h1 className='bg-red-500'>gjh</h1> */}
        <div className=" w-64 aside-1 flex-none ...">
          <Aside/>
        </div>
        <div className="navbar-1 w-64 flex-1 ...">
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default App;
