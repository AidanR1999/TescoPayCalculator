//global premium rate
const _premiumRate = 1.25;

//MAIN CONTROLLER
function calcPayControl() {
    var values = getValues();
    console.log(values);

    var weeklyPreTax = calcWeeklyPay(values);
    // var weeklyPostTax = calcTax(weeklyPreTax, values.bracket);

    var monthlyPreTax = calcMonthlyPay(values);
    // var monthlyPostTax = calcTax(monthlyPreTax, values.bracket);

    var annualPreTax = calcAnnualPay(values);
    console.log(weeklyPreTax, monthlyPreTax, annualPreTax);

    // display in table cells by ID
    $('#week').html( '£ ' + weeklyPreTax.toFixed(2));
    $('#month').html('£ ' + monthlyPreTax.toFixed(2));
    $('#year').html('£ ' + annualPreTax.toFixed(2));


    // var annualPostTax = calcTax(annualPreTax, values.bracket);

    // displayPreTax(weeklyPreTax, monthlyPreTax, annualPreTax);
    // displayPostTax(weeklyPostTax, monthlyPostTax, annualPostTax);
}

//PRE-TAX CALCULATIONS
function calcWeeklyPay(values) {
    debugger;
    console.log(values);
    var pay = values.hourlyPay * values.weeklyStandHours; // not sure what the value "7" was for? 
    console.log(pay);
    pay += (values.hourlyPay * _premiumRate) * values.weeklyPremHours; 
    return pay;
}

function calcMonthlyPay(values){
    return calcWeeklyPay(values) * 4;
}

function calcAnnualPay(values){
    return calcWeeklyPay(values) * 52;
}

//TAX CALCULATIONS
function calcTax(preTax, bracket){}

//HELPERS
function getValues() {
    var values = {};
        values.hourlyPay = Number($('#hourlyPay').val());
        values.taxBracket = $('#taxBracket').val();

        values.weeklyStandHours = Number($('#weeklyStandHours').val());
        values.weeklyPremHours = Number($('#weeklyPremHours').val());

    return values;
}

function checkValues(values) {
    if(isNaN(values.hourlyPay)) {
        return false
    }
    if(isNaN(values.weeklyStandHours)) {
        return false
    }
    if(isNaN(values.weeklyPremHours)) {
        return false
    }
    return true;
}

//DISPLAY
function displayPreTax(preTax){}
function displayPostTax(postTax){}