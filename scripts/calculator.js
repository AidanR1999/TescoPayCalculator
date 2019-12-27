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
    // var annualPostTax = calcTax(annualPreTax, values.bracket);

    // displayPreTax(weeklyPreTax, monthlyPreTax, annualPreTax);
    // displayPostTax(weeklyPostTax, monthlyPostTax, annualPostTax);
}

//PRE-TAX CALCULATIONS
function calcWeeklyPay(values) {
    console.log(values);
    var pay = values.hourlyPay * 7;
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
    $(document).ready(function() {
        values.hourlyPay = Number($('#hourlyPay').val());
        values.taxBracket = $('#taxBracket').val();

        values.weeklyStandHours = Number($('#weeklyStandHours').val());
        values.weeklyPremHours = Number($('#weeklyPremHours').val());
    });

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