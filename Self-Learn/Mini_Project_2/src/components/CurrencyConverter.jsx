import { useState } from "react";
import InputBox from "./InputBox.jsx";
import useCurrencyInfo from "../hooks/useCurrencyInfo.js";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  const swapCurrencies = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * (currencyInfo[to] || 0));
  };

  return (
    <div className="w-[90%] max-w-xl mx-auto border border-white/60 rounded-3xl p-4 backdrop-blur-md bg-white/30 shadow-lg">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        {/* TOP INPUT BOX */}
        <div className="w-full mb-1">
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectedCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
          />
        </div>

        {/* SWAP BUTTON */}
        <div className="relative w-full h-0.5 z-10">
          <button
            type="button"
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-xl bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition-colors text-lg font-bold shadow-md"
            onClick={swapCurrencies}
          >
            Swap
          </button>
        </div>

        {/* BOTTOM INPUT BOX */}
        <div className="w-full mt-1 mb-4">
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectedCurrency={to}
            amountDisabled={true}
          />
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors text-xl font-bold shadow-md"
        >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </div>
  );
}
