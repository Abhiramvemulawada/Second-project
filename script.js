document.getElementById("convertBtn").addEventListener("click", function() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    const rates = {
        USD: { EUR: 0.85, GBP: 0.75, INR: 74.00, USD: 1 },
        EUR: { USD: 1.18, GBP: 0.88, INR: 87.00, EUR: 1 },
        GBP: { USD: 1.33, EUR: 1.14, INR: 99.00, GBP: 1 },
        INR: { USD: 0.014, EUR: 0.011, GBP: 0.010, INR: 1 }
    };

    if (amount && rates[fromCurrency][toCurrency]) {
        const convertedAmount = (amount * rates[fromCurrency][toCurrency]).toFixed(2);
        document.getElementById("result").textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } else {
        document.getElementById("result").textContent = "Please enter a valid amount.";
    }
});
