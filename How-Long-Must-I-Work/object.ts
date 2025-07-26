const Hours = document.getElementById('Hours') as HTMLInputElement;
const Income = document.getElementById('Income') as HTMLInputElement;
const ItemPrice = document.getElementById('Item') as HTMLInputElement;
const ResultButton = document.getElementById('Resultbtn') as HTMLButtonElement;
const Display = document.getElementById('Output') as HTMLHeadElement;
const HourDisplay = document.getElementById('HourlyStat') as HTMLParagraphElement;

function Hours2(){
    const HoursWorked = parseFloat(Hours.value) || 0;
    const IncomePerMonth = parseFloat(Income.value) || 0;
    const ItemPrice1 = parseFloat(ItemPrice.value) || 0;

   
    let hourlyRate = 0;
    let MonthlyHours = HoursWorked * 4;
   

    hourlyRate = IncomePerMonth / MonthlyHours ;
    
    

    return hourlyRate;
}


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





function DisplayOfData(){
    const Result = TimeItWillTake();
    const Hourss = Hours2()

    Display.innerHTML = `You will need to work ${Result.toFixed(2)} hours`;
    HourDisplay.innerHTML = `Hourly Rate: $${Hourss.toFixed(2)}`;
}

ResultButton.addEventListener('click',DisplayOfData)




//-------------------------------------------------//
//Investment page ahhhhhh

const PageSwitch = document.getElementById('Investbtn') as HTMLButtonElement;
const Page1 = document.getElementById('Sub-Main-container') as HTMLDivElement;
const Page2 = document.getElementById('Sub-Main-Investment-container') as HTMLDivElement;
const PageSwitch2 = document.getElementById('HoursWorkbtn') as HTMLButtonElement;
const SubHeader = document.getElementById('Header2') as HTMLHeadElement
let showingIncome = true;

PageSwitch.addEventListener('click', ()=>{
    if(showingIncome){
        Page1.style.display ='none'
        Page2.style.display = 'block';
        SubHeader.innerHTML = 'Your Total Investment is'
         Display.innerHTML = ''; 
    } else {
        Page1.style.display='block';
        Page2.style.display='none';
        SubHeader.innerHTML = 'The Investment Required'
         Display.innerHTML = ''; 
    }

    showingIncome = !showingIncome;
})

PageSwitch2.addEventListener('click', ()=>{
    if(!showingIncome){
        Page1.style.display ='block'
        Page2.style.display = 'none';
        SubHeader.innerHTML = 'The Investment Required'
         Display.innerHTML = ''; 

       
    } else {
        Page1.style.display='none';
        Page2.style.display='block';
        SubHeader.innerHTML = 'Your Total Investment is'
        Display.innerHTML = ''; 
    }

    showingIncome = !showingIncome;
})

//-----------------------------------------

const InvestmentButton = document.getElementById('Resultbtn-Investment') as HTMLButtonElement;
const IntitalInvestment = document.getElementById('InInvestment') as HTMLInputElement;
const MonthlyContrubtion = document.getElementById('MonthlyPay') as HTMLInputElement;
const InvestmentPeriod = document.getElementById('Years') as HTMLInputElement;




function TotalInvestment(){
    let Investment = parseFloat(IntitalInvestment.value) || 0;
    let MonthlyContro = parseFloat(MonthlyContrubtion.value) || 0;
    let timeOfInvestment = parseFloat(InvestmentPeriod.value) || 0; 
    
    let TOTAL = 0;
    TOTAL = MonthlyContro * timeOfInvestment;
    TOTAL = TOTAL + Investment;

    return TOTAL;

}



function DisplayInvestment(){
    let GrandTOTAL = TotalInvestment();
    Display.innerHTML = `$ ${GrandTOTAL}`

}

InvestmentButton.addEventListener('click',DisplayInvestment)

