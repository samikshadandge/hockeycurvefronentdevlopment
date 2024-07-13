document.getElementById('calculateBtn').addEventListener('click', function() {
    // Get user inputs
    const principal = parseFloat(document.getElementById('principal').value);
    const annualInterest = parseFloat(document.getElementById('interest').value);
    const months = parseInt(document.getElementById('duration').value);

    // Calculate EMI
    const monthlyInterest = annualInterest / 12 / 100;
    const emi = (principal * monthlyInterest * Math.pow(1 + monthlyInterest, months)) / (Math.pow(1 + monthlyInterest, months) - 1);

    // Display the result
    document.getElementById('emiResult').innerText = emi.toFixed(2);
});
