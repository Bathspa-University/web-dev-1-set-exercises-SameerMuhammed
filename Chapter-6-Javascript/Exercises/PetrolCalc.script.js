// add event listener to calc btn
document.getElementById('calculateBtn').addEventListener('click', function() {
    // Get the values from the input fields
    const cost = parseFloat(document.getElementById('COST').value);
    const liters = parseFloat(document.getElementById('LITRES').value);
    
    // Calculate the total cost by multiplying cost by litres 
    const totalCost = cost * liters;
    
    // displaying the total cost
    document.getElementById('result').textContent = `TOTAL COST: AED ${totalCost.toFixed(2)}`;
});