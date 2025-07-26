var Hours = document.getElementById('Hours');
var Income = document.getElementById('Income');
var ItemPrice = document.getElementById('Item');
var ResultButton = document.getElementById('Resultbtn');
var Display = document.getElementById('Output');
var HourDisplay = document.getElementById('HourlyStat');
function HourlyPay() {
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
    var Hourssss = HourlyPay();
    Display.innerHTML = "You will need to work ".concat(Result.toFixed(2), " hours");
    HourDisplay.innerHTML = "".concat(Hourssss.toFixed(2));
}
ResultButton.addEventListener('click', DisplayOfData);
