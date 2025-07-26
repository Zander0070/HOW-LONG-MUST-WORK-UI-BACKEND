var Hours = document.getElementById('Hours');
var Income = document.getElementById('Income');
var ItemPrice = document.getElementById('Item');
var ResultButton = document.getElementById('Resultbtn');
var Display = document.getElementById('Output');
var HourDisplay = document.getElementById('HourlyStat');
function Hours2() {
    var HoursWorked = parseFloat(Hours.value) || 0;
    var IncomePerMonth = parseFloat(Income.value) || 0;
    var ItemPrice1 = parseFloat(ItemPrice.value) || 0;
    var hourlyRate = 0;
    var MonthlyHours = HoursWorked * 4;
    hourlyRate = IncomePerMonth / MonthlyHours;
    return hourlyRate;
}
function TimeItWillTake() {
    var HoursWorked = parseFloat(Hours.value) || 0;
    var IncomePerMonth = parseFloat(Income.value) || 0;
    var ItemPrice1 = parseFloat(ItemPrice.value) || 0;
    var Time = 0;
    var hourlyRate = 0;
    var MonthlyHours = HoursWorked * 4;
    var Hoursss = 0;
    hourlyRate = IncomePerMonth / MonthlyHours;
    Hoursss = ItemPrice1 / hourlyRate;
    return Hoursss;
}
function DisplayOfData() {
    var Result = TimeItWillTake();
    var Hourss = Hours2();
    Display.innerHTML = "You will need to work ".concat(Result.toFixed(2), " hours");
    HourDisplay.innerHTML = "Hourly Rate: $".concat(Hourss.toFixed(2));
}
ResultButton.addEventListener('click', DisplayOfData);
//-------------------------------------------------//
//Investment page ahhhhhh
var PageSwitch = document.getElementById('Investbtn');
var Page1 = document.getElementById('Sub-Main-container');
var Page2 = document.getElementById('Sub-Main-Investment-container');
var PageSwitch2 = document.getElementById('HoursWorkbtn');
var SubHeader = document.getElementById('Header2');
var showingIncome = true;
PageSwitch.addEventListener('click', function () {
    if (showingIncome) {
        Page1.style.display = 'none';
        Page2.style.display = 'block';
        SubHeader.innerHTML = 'Your Total Investment is';
        Display.innerHTML = '';
    }
    else {
        Page1.style.display = 'block';
        Page2.style.display = 'none';
        SubHeader.innerHTML = 'The Investment Required';
        Display.innerHTML = '';
    }
    showingIncome = !showingIncome;
});
PageSwitch2.addEventListener('click', function () {
    if (!showingIncome) {
        Page1.style.display = 'block';
        Page2.style.display = 'none';
        SubHeader.innerHTML = 'The Investment Required';
        Display.innerHTML = '';
    }
    else {
        Page1.style.display = 'none';
        Page2.style.display = 'block';
        SubHeader.innerHTML = 'Your Total Investment is';
        Display.innerHTML = '';
    }
    showingIncome = !showingIncome;
});
//-----------------------------------------
var InvestmentButton = document.getElementById('Resultbtn-Investment');
var IntitalInvestment = document.getElementById('InInvestment');
var MonthlyContrubtion = document.getElementById('MonthlyPay');
var InvestmentPeriod = document.getElementById('Years');
function TotalInvestment() {
    var Investment = parseFloat(IntitalInvestment.value) || 0;
    var MonthlyContro = parseFloat(MonthlyContrubtion.value) || 0;
    var timeOfInvestment = parseFloat(InvestmentPeriod.value) || 0;
    var TOTAL = 0;
    TOTAL = MonthlyContro * timeOfInvestment;
    TOTAL = TOTAL + Investment;
    return TOTAL;
}
function DisplayInvestment() {
    var GrandTOTAL = TotalInvestment();
    Display.innerHTML = "$ ".concat(GrandTOTAL);
}
InvestmentButton.addEventListener('click', DisplayInvestment);
