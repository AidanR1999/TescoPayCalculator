//MAIN CONTROLLERS
function calcWeeklyPayControl() {
    var values = getValues();

    var preTax = calcWeeklyPay(values);
    var postTax = calcTax(preTax, values.bracket);

    displayPreTax(preTax);
    displayPostTax(postTax);
}

function calcMonthlyPayControl() {
    var values = getValues();

    var preTax = calcMonthlyPay(values);
    var postTax = calcTax(preTax, values.bracket);

    displayPreTax(preTax);
    displayPostTax(postTax);
}

function calcAnnualPayControl() {
    var values = getValues();

    var preTax = calcAnnualPay(values);
    var postTax = calcTax(preTax, values.bracket);

    displayPreTax(preTax);
    displayPostTax(postTax);
}

//PRE-TAX CALCULATIONS
function calcWeeklyPay(values);
function calcMonthlyPay(values);
function calcAnnualPay(values);

//TAX CALCULATIONS
function calcTax(preTax, bracket);

//HELPERS
function getValues();

//DISPLAY
function displayPreTax(preTax);
function displayPostTax(postTax);