function App() {
  return (
    <main className="flex flex-col gap-y-5 items-center justify-center w-full h-screen">
      <div>
        <h1 className="text-center text-4xl text-[#e85c8b] font-bold">Tiny Love Calculator</h1>
        <form action="" className="flex flex-col items-center mt-5">
          <div className="flex flex-col my-0 mx-10 gap-y-3.5 lg:flex-row lg:gap-x-2.5 items-center">
            <div className="flex flex-col gap-y-1.5">
              <label htmlFor="">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className=" py-2 px-3 w-[90vw] lg:w-[30vw] border-2 border-[#e85c8b] rounded-md outline-[#e85c8b]"
              />
            </div>
            <div className="flex flex-col gap-y-1.5">
            <label htmlFor="">Your Crush's Name</label>
              <input
                type="text"
                placeholder="Enter your crush's name"
                className="py-2 p-3 w-[90vw] lg:w-[30vw] border-2 border-[#e85c8b] rounded-md outline-[#e85c8b]"
              />
            </div>
          </div>
          <button className="mt-5 bg-[#e85c8b] text-white py-2 p-5 rounded-lg">
            Submit
          </button>
        </form>
      </div>
      <div>
        <h1 className="text-8xl font-semibold text-[#e85c8b]">65%</h1>
      </div>
    </main>
  );
}

export default App;
