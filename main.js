function calculateChange() {
  const amountDue = parseFloat(document.getElementById("amount-due").value);
  const amountReceived = parseFloat(document.getElementById("amount-received").value);

  let change = Math.round((amountReceived - amountDue) * 100);

  const dollars  = Math.floor(change / 100);
  change %= 100;

  const quarters = Math.floor(change / 25);
  change %= 25;

  const dimes    = Math.floor(change / 10);
  change %= 10;

  const nickels  = Math.floor(change / 5);
  change %= 5;

  const pennies  = change;

  document.getElementById("dollars-output").textContent  = dollars;
  document.getElementById("quarters-output").textContent = quarters;
  document.getElementById("dimes-output").textContent    = dimes;
  document.getElementById("nickels-output").textContent  = nickels;
  document.getElementById("pennies-output").textContent  = pennies;
}

