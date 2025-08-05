const conversionRate = 0.00060; 

function convertCurrency() {
    const nairaAmount = document.getElementById('nairaAmount').value;
    if (nairaAmount) {
        const dollarAmount = (nairaAmount * conversionRate).toFixed(2);
        document.getElementById('result').textContent = `${nairaAmount} Naira = ${dollarAmount} Dollars`;
    } else {
        document.getElementById('result').textContent = 'Please enter an amount.';
    }
}
