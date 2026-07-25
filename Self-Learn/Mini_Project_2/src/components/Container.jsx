import { useState, useCallback, useEffect, useRef } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");
  // useRef hook
  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const generatePassword = useCallback(() => {
    // Password generation logic
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbersAllowed) {
      string += "0123456789";
    }
    if (charactersAllowed) {
      string += "!@#$%^&*()-+";
    }

    for (let i = 0; i < length; i++) {
      pass += string.charAt(Math.floor(Math.random() * string.length));
    }
    setPassword(pass);
  }, [length, numbersAllowed, charactersAllowed, setPassword]);

  useEffect(() => {
    // eslint-disable-next-line
    generatePassword();
  }, [generatePassword]);

  return (
    <div className="max-w-160 w-[90%] bg-gray-100 rounded-3xl text-center font-bold text-2xl p-5 m-auto text-black">
      <div className="flex rounded-xl overflow-hidden mb-4 bg-gray-300">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-2 px-4"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="bg-gray-700 text-white px-4 py-2 hover:bg-gray-900 transition-colors duration-300"
        >
          Copy
        </button>
      </div>
      <div className="flex flex-wrap justify-between gap-x-6">
        <div className="flex items-center gap-2">
          <input
            type="range"
            id="length"
            min="6"
            max="100"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="cursor-pointer appearance-none h-2 w-20 rounded-full bg-gray-300
    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:h-4
    [&::-webkit-slider-thumb]:w-4
    [&::-webkit-slider-thumb]:rounded-full
    [&::-webkit-slider-thumb]:bg-gray-600
    [&::-webkit-slider-thumb]:cursor-pointer
    [&::-moz-range-thumb]:h-4
    [&::-moz-range-thumb]:w-4
    [&::-moz-range-thumb]:rounded-full
    [&::-moz-range-thumb]:bg-gray-600
    [&::-moz-range-thumb]:border-0
    [&::-moz-range-thumb]:cursor-pointer"
          />
          <label htmlFor="length" className="text-gray-800 font-medium w-33 cursor-pointer">
            Length:{length}
          </label>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="numbers"
            defaultChecked={numbersAllowed}
            onChange={() => setNumbersAllowed((prev) => !prev)}
            className="cursor-pointer h-5 w-5 rounded-full border-2 border-gray-400 
               appearance-none checked:bg-gray-600 checked:border-gray-600
               transition-colors relative grid place-items-center checked:after:content-['✓'] checked:after:text-white checked:after:text-sm checked:after:leading-none"
          />
          <label htmlFor="numbers" className="text-gray-800 font-medium cursor-pointer">
            Numbers
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="characters"
            defaultChecked={charactersAllowed}
            onChange={() => setCharactersAllowed((prev) => !prev)}
            className="cursor-pointer h-5 w-5 rounded-full border-2 border-gray-400 
               appearance-none checked:bg-gray-600 checked:border-gray-600
               transition-colors relative grid place-items-center checked:after:content-['✓'] checked:after:text-white checked:after:text-sm checked:after:leading-none"
          />
          <label htmlFor="characters" className="text-gray-800 font-medium cursor-pointer">
            Characters
          </label>
        </div>
      </div>
    </div>
  );
}
