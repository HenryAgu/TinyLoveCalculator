function App() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen">
      <div>
        <h1 className="text-center text-4xl text-blue-400 font-bold">Love Calculator</h1>
        <form action="" className="flex flex-col items-center mt-5">
          <div className="flex flex-col lg:flex-row items-center">
            <div>
              <input
                type="text"
                placeholder="Male name"
                className="py-2 px-5 outline-blue-400"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Female name"
                className="py-2 p-5 outline-blue-400"
              />
            </div>
          </div>
          <button className="mt-5 bg-blue-400 text-white py-2 p-5 rounded-lg">
            Submit
          </button>
        </form>
      </div>
      <div>
        <h1 className="text-7xl font-bold text-blue-400">65%</h1>
      </div>
    </main>
  );
}

export default App;
