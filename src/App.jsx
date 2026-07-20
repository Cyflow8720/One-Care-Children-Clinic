import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="h-[2000px] bg-gray-100 flex justify-center items-center">
        <h1 className="text-4xl">Scroll Down 👇</h1>
      </div>
    </>
  );
}

export default App;