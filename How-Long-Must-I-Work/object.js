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
var SubbieHeader = document.getElementById('Subbie-Header');
var showingIncome = true;
PageSwitch.addEventListener('click', function () {
    if (showingIncome) {
        Page1.style.display = 'none';
        Page2.style.display = 'block';
        SubHeader.innerHTML = 'Your Total Investment is';
        SubbieHeader.innerHTML = 'Months';
        Display.innerHTML = '';
        HourDisplay.innerHTML = '';
    }
    else {
        Page1.style.display = 'block';
        Page2.style.display = 'none';
        SubHeader.innerHTML = 'The Investment Required';
        SubbieHeader.innerHTML = 'Hourly rate';
        Display.innerHTML = '';
        HourDisplay.innerHTML = '';
    }
    showingIncome = !showingIncome;
});
PageSwitch2.addEventListener('click', function () {
    if (!showingIncome) {
        Page1.style.display = 'block';
        Page2.style.display = 'none';
        SubHeader.innerHTML = 'The Investment Required';
        SubbieHeader.innerHTML = 'Hourly rate';
        Display.innerHTML = '';
        HourDisplay.innerHTML = '';
    }
    else {
        Page1.style.display = 'none';
        Page2.style.display = 'block';
        SubHeader.innerHTML = 'Your Total Investment is';
        SubbieHeader.innerHTML = 'Months';
        Display.innerHTML = '';
        HourDisplay.innerHTML = '';
    }
    showingIncome = !showingIncome;
});
//-----------------------------------------
var InvestmentButton = document.getElementById('Resultbtn-Investment');
var IntitalInvestment = document.getElementById('InInvestment');
var MonthlyContrubtion = document.getElementById('MonthlyPay');
var IntrestRate = document.getElementById('Rates');
var InvestmentPeriod = document.getElementById('Years');
function TimePeriod() {
    var Investment = parseFloat(InvestmentPeriod.value) || 0;
    return Investment;
}
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
    var Timeeee = TimePeriod();
    Display.innerHTML = "$ ".concat(GrandTOTAL);
    HourDisplay.innerHTML = "".concat(Timeeee);
}
InvestmentButton.addEventListener('click', DisplayInvestment);
