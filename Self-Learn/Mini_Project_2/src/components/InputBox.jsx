import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white rounded-xl flex ${className} p-5`}>
      {/* LEFT SIDE: Amount */}
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/70 mb-2 inline-block font-semibold text-lg"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          className="outline-none w-full bg-transparent py-1.5 text-3xl font-bold text-black"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      {/* RIGHT SIDE: Currency Select */}
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/70 mb-2 w-full font-semibold text-lg">
          Currency
        </p>
        <select
          className="outline-none rounded-lg px-3 py-1 bg-gray-200 cursor-pointer text-xl font-bold text-black"
          disabled={currencyDisabled}
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
