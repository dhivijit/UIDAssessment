document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('convert-button').addEventListener('click', function() {
        const baseCurrency = document.getElementById('base-currency').value.toUpperCase() || 'USD';
        const targetCurrency = document.getElementById('target-currency').value.toUpperCase() || 'INR';
        const amount = parseFloat(document.getElementById('amount').value) || 1;

        convertCurrency(baseCurrency, targetCurrency, amount);
    });

    function convertCurrency(baseCurrency, targetCurrency, amount) {
        const apiKey = 'fca_live_rSiFYUR91mKSotDuhYRSV3UPSG6Yip1Pr2FZyZNJ'; // Replace with your API key
        const url = `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&base_currency=${baseCurrency}&currencies=${targetCurrency}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.data && data.data[targetCurrency]) {
                    const exchangeRate = data.data[targetCurrency];
                    const convertedAmount = amount * exchangeRate;
                    displayConversionResult(baseCurrency, targetCurrency, amount, convertedAmount);
                } else {
                    alert('Currency conversion data not available. Please check the currencies and try again.');
                }
            })
            .catch(error => {
                alert('An error occurred while converting currency. Please try again later.');
                console.error(error);
            });
    }

    function displayConversionResult(baseCurrency, targetCurrency, amount, convertedAmount) {
        const conversionResultDiv = document.getElementById('conversion-result');
        conversionResultDiv.innerHTML = `
            <h2>Conversion Result</h2>
            <p>${amount} ${baseCurrency} = ${convertedAmount} ${targetCurrency}</p>
        `;
    }
});
