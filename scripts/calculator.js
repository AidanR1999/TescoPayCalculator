//MAIN CONTROLLER
function calcPayControl() {
    var values = getValues();

    if(!checkValues(values)) {
        return null;
    }

    // var weeklyPreTax = calcWeeklyPay(values);
    // var weeklyPostTax = calcTax(weeklyPreTax, values.bracket);

    // var monthlyPreTax = calcMonthlyPay(values);
    // var monthlyPostTax = calcTax(monthlyPreTax, values.bracket);

    // var annualPreTax = calcAnnualPay(values);
    // var annualPostTax = calcTax(annualPreTax, values.bracket);

    // displayPreTax(weeklyPreTax, monthlyPreTax, annualPreTax);
    // displayPostTax(weeklyPostTax, monthlyPostTax, annualPostTax);
}

//PRE-TAX CALCULATIONS
function calcWeeklyPay(values) {
    
}
function calcMonthlyPay(values){}
function calcAnnualPay(values){}

//TAX CALCULATIONS
function calcTax(preTax, bracket){}

//HELPERS
function getValues() {
    var values = {};
    $(document).ready(function() {
        values.hourlyPay = $('#hourlyPay').val();
        values.taxBracket = $('#taxBracket').val();

        values.weeklyStandHours = $('#weeklyStandHours').val();
        values.weeklyPremHours = $('#weeklyPremHours').val();
    });

    return values;
}

function checkValues() {
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