function calculateChange() {
  const amountDue = parseFloat(document.getElementById("amount-due").value);
  const amountReceived = parseFloat(document.getElementById("amount-received").value);

  // Validate input
  if (isNaN(amountDue) || isNaN(amountReceived)) {
    alert("Please enter both cost and amount given.");
    return;
  }

  let change = Math.round((amountReceived - amountDue) * 100); // Convert to cents

  if (change < 0) {
    document.getElementById("result").innerHTML = "Not enough money given!";
    clearOutputs();
    return;
  }

  if (change === 0) {
    document.getElementById("result").innerHTML = "Exact amount given — no change needed!";
    clearOutputs();
    return;
  }

  document.getElementById("result").innerHTML =
    `Total Change: $${(change / 100).toFixed(2)}`;

  // Calculate coins
  const dollars  = Math.floor(change / 100);
  change %= 100;

  const quarters = Math.floor(change / 25);
  change %= 25;

  const dimes    = Math.floor(change / 10);
  change %= 10;

  const nickels  = Math.floor(change / 5);
  change %= 5;

  const pennies  = change;

  // Output results
  document.getElementById("dollars-output").innerHTML  = `Dollars: ${dollars}`;
  document.getElementById("quarters-output").innerHTML = `Quarters: ${quarters}`;
  document.getElementById("dimes-output").innerHTML    = `Dimes: ${dimes}`;
  document.getElementById("nickels-output").innerHTML  = `Nickels: ${nickels}`;
  document.getElementById("pennies-output").innerHTML  = `Pennies: ${pennies}`;
}

function clearOutputs() {
  document.getElementById("dollars-output").innerHTML = "";
  document.getElementById("quarters-output").innerHTML = "";
  document.getElementById("dimes-output").innerHTML = "";
  document.getElementById("nickels-output").innerHTML = "";
  document.getElementById("pennies-output").innerHTML = "";
}

