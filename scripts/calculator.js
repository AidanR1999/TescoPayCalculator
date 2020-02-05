//global premium rate
const _premiumRate = 1.25;

//MAIN CONTROLLER
function calcPayControl() {
    //get data from form
    var values = getValues();

    //calculate values
    var weeklyPreTax = calcWeeklyPay(values);
    var weeklyPostTax = calcTax(weeklyPreTax, values.taxBracket);

    var monthlyPreTax = calcMonthlyPay(values);
    var monthlyPostTax = calcTax(monthlyPreTax, values.taxBracket);

    var annualPreTax = calcAnnualPay(values);
    var annualPostTax = calcTax(annualPreTax, values.taxBracket)
    console.log(annualPreTax);

    // display in table cells by ID
    $('#preType').html('Before tax');
    $('#preWeek').html(weeklyPreTax.toFixed(2));
    $('#preMonth').html(monthlyPreTax.toFixed(2));
    $('#preYear').html(annualPreTax.toFixed(2));

    $('#postType').html('After tax');
    $('#postWeek').html(weeklyPostTax.toFixed(2));
    $('#postMonth').html(monthlyPostTax.toFixed(2));
    $('#postYear').html(annualPostTax.toFixed(2));
}

//PRE-TAX CALCULATIONS
function calcWeeklyPay(values) {
    //get standard pay
    var pay = values.hourlyPay * values.weeklyStandHours;

    //add premium pay
    pay += (values.hourlyPay * _premiumRate) * values.weeklyPremHours; 

    return pay;
}

function calcMonthlyPay(values){
    //pay is every 4 weeks
    return calcWeeklyPay(values) * 4;
}

function calcAnnualPay(values){
    //annual is 52 weeks, 13 payments
    return calcWeeklyPay(values) * 52;
}

//TAX CALCULATIONS
function calcTax(preTax, bracket){
    var postTax = preTax;
    switch(bracket){
        case "B":
            postTax = preTax * 0.81;
            break;
        case "C":
            postTax = preTax * 0.80;
            break;
        case "D":
            postTax = preTax * 0.79;
            break;
        case "E":
            postTax = preTax * 0.59;
            break;
        case "F":
            postTax = preTax * 0.54;
            break;
    }

    return postTax;
}

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