const Hours = document.getElementById('Hours') as HTMLInputElement;
const Income = document.getElementById('Income') as HTMLInputElement;
const ItemPrice = document.getElementById('Item') as HTMLInputElement;
const ResultButton = document.getElementById('Resultbtn') as HTMLButtonElement;
const Display = document.getElementById('Output') as HTMLHeadElement;
const HourDisplay = document.getElementById('HourlyStat') as HTMLParagraphElement;


function TimeItWillTake(){
    const HoursWorked = parseFloat(Hours.value) || 0;
    const IncomePerMonth = parseFloat(Income.value) || 0;
    const ItemPrice1 = parseFloat(ItemPrice.value) || 0;

    let Time = 0;
    let hourlyRate = 0;
    let MonthlyHours = HoursWorked * 4;
    let Hoursss = 0;

    hourlyRate = IncomePerMonth / MonthlyHours ;
    Hoursss = ItemPrice1 / hourlyRate;
    

    return Hoursss;
}

const Result = TimeItWillTake();



function DisplayOfData(){
    const Result = TimeItWillTake();

    Display.innerHTML = `You will need to work ${Result.toFixed(2)} hours`
}

ResultButton.addEventListener('click',DisplayOfData)