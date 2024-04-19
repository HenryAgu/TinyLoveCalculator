import { useState } from "react";

function App() {
  const [percentage, setPercentage] = useState(0);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [yourName, setYourName] = useState("");
  const [crushName, setCrushName] = useState("");
  // @ts-ignore
  const handleLoveCalculation = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newNumber = Math.floor(Math.random() * 100) + 1;
    setPercentage(newNumber);
    setLoading(false);

    if (newNumber <= 10) {
      setResult(
        `Hmm, it seems like there's a bit of distance between ${yourName} and ${crushName}. Keep your hopes high, miracles happen!`
      );
    } else if (newNumber < 35) {
      setResult(
        `Well, ${yourName}, there's some potential spark between you and ${crushName}. Don't hesitate to make a move and see where it leads!`
      );
    } else if (newNumber < 65) {
      setResult(
        `Looks like there's a good chance for love to blossom between ${yourName} and ${crushName}! Take the initiative and see where this journey takes you both!`
      );
    } else if (newNumber < 85) {
      setResult(
        `Wow! With such a high percentage, it's clear that there's a strong connection between ${yourName} and ${crushName}. Don't hold back, seize the moment!`
      );
    } else if (newNumber < 100) {
      setResult(
        `Congratulations, ${yourName}! You and ${crushName} are a match made in heaven! It's time to celebrate and embrace this beautiful connection!`
      );
    }
  };
  return (
    <main className="flex flex-col gap-y-5 items-center justify-center w-full h-full my-10">
      <div>
        <h1 className="font-custom italic text-center text-2xl lg:text-4xl text-[#e85c8b] font-bold">
          Tiny-Love Calculator
        </h1>
        <form
          action=""
          className="flex flex-col items-center mt-5"
          onSubmit={handleLoveCalculation}
        >
          <div className="flex flex-col my-0 mx-10 gap-y-3.5 lg:flex-row lg:gap-x-2.5 items-center">
            <div className="flex flex-col gap-y-1.5">
              <label htmlFor="">Your Name</label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                value={yourName}
                onChange={(e) => setYourName(e.target.value)}
                className=" py-2 px-3 w-[90vw] lg:w-[30vw] border-2 border-[#e85c8b] rounded-md outline-[#e85c8b]"
              />
            </div>
            <div className="flex flex-col gap-y-1.5">
              <label htmlFor="">Your Crush's Name</label>
              <input
                type="text"
                required
                placeholder="Enter your crush's name"
                value={crushName}
                onChange={(e) => setCrushName(e.target.value)}
                className="py-2 p-3 w-[90vw] lg:w-[30vw] border-2 border-[#e85c8b] rounded-md outline-[#e85c8b]"
              />
            </div>
          </div>
          <button className="mt-5 bg-[#e85c8b] text-white py-2 p-5 rounded-lg">
            {loading ? "Calculating..." : "Submit"}
          </button>
        </form>
      </div>
      <div className="mt-10">
        <h1 className="font-custom text-8xl font-semibold text-[#e85c8b]">
          {percentage}%
        </h1>
      </div>
      <div className="text-center mt-5 w-[90%]">
        <p className="font-custom font-medium italic text-[#e85c8b] text-sm lg:text-xl">
          {result}
        </p>
      </div>
    </main>
  );
}

export default App;
