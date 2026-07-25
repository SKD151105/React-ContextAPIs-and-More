import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [currencyInfo, setCurrencyInfo] = useState(null);

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((data) => setCurrencyInfo(data[currency]));
    }, [currency]);
    console.log(currencyInfo); // Use this to check the fetched data while debugging.

    return currencyInfo;
}

export default useCurrencyInfo;