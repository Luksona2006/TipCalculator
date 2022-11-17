let percentButtons = document.querySelectorAll('.percent');

let billInput = document.querySelector('#bill');
let inputOfPercent = document.getElementById('custom');

let inputOfPeople = document.querySelector('#numberOfPeople');

let warnBill = document.querySelector('#warnBill');
let warnTip = document.querySelector('#warnTip');
let warnPeople = document.querySelector('#warnPeople');

let resetBtn = document.getElementById('reset');

let generate = document.getElementById('generate');

let amountSum = document.getElementById('amount');
let totalSum = document.getElementById('total');

// LIMIT

inputOfPercent.oninput = function() {
    this.value = this.value.substr(0, 2);
}

billInput.oninput = function() {
    this.value = this.value.substr(0, 6);
}

inputOfPeople.oninput = function() {
    this.value = this.value.substr(0, 2);
}

// Math Floor

// BILL INPUT

function billClick(e) {
    const bill = e.currentTarget;
    bill.style.border = "2px #26C2AE solid";
}

// PERCENT BUTTONS
let percent = false;

function buttonClick(e) {
    percentButtons.forEach(btn => {
        btn.style.background = "#00474B";
        btn.style.border = "2px #00474B solid"
        btn.style.color = "#FFFFFF";
    })
    
    const currentButton = e.currentTarget;
    currentButton.style.background = "#26C2AE";
    currentButton.style.border = "2px #26C2AE solid"
    currentButton.style.color = "#00474B";

    if(currentButton.matches("input")) {
        percentButtons.forEach(btn => {
            btn.style.background = "#00474B";
            btn.style.border = "2px #00474B solid"
            btn.style.color = "#FFFFFF";
        })

        currentButton.style.border = "2px #26C2AE solid"
    }

    if(inputOfPercent.value.length > 0) {
        inputOfPercent.value = "";
    }

    inputOfPercent.style.border = "2px #F3F9FA solid";

    percent = currentButton.innerText;

    return percent
}

// PERCENT INPUT

 function percentInputClick(e) {
    const currentPercentInput = e.currentTarget;
    currentPercentInput.style.border = "2px #26C2AE solid";

    percentButtons.forEach((btn) => {
        btn.style.background = "#00474B";
        btn.style.border = "2px #00474B solid"
        btn.style.color = "#FFFFFF";
    });

    percent = false;
}

// PERSON INPUT 

function person(e) {
    const person = e.currentTarget;
    person.style.border = "2px #26C2AE solid";
}

// EVENTS


billInput.addEventListener('click', billClick);

percentButtons.forEach(button => {
    button.addEventListener('click', buttonClick)
})

inputOfPercent.addEventListener('click', percentInputClick);

numberOfPeople.addEventListener('click', person);

generate.addEventListener('click', getResults);

resetBtn.addEventListener('click', resetResults);




// GET RESULTS

function getResults(bill,person) {  
    // GIVE VARIABLES THEIR PROPERTIES

    bill = billInput.value;

    if(percent == false) {
        percent = inputOfPercent.value;
    } else {
        let percentUpdated = [];
        for(let i = 0; i < percent.length - 1; i++) {
            percentUpdated.push(percent[i]);
        }
        percent = "";
        for(let j = 0; j < percentUpdated.length; j++) {
            percent += percentUpdated[j];
        }
    }

    person = numberOfPeople.value;

    // // CHECK VALUES: IF SOMETHING IS WRONG OUTPUT WARN TEXT

    let errorsSign = [[bill, warnBill],[percent, warnTip],[person, warnPeople]];

    for(let i = 0; i < errorsSign.length; i++) {
        for(let j = 0; j < errorsSign[i].length; j++) {
            if(errorsSign[i][0] <= 0 || errorsSign[i][0] == "") {
                errorsSign[i][1].style.display = "inline-block"
                if(i >= errorsSign.length) {
                    return false;
                }
            } else {
                errorsSign[i][1].style.display = "none"
            }
        }
    }

    
    // ROUND OFF VALUES

    let amount = bill * (percent/100) / person;
    let total = bill * (percent/100);

    amount = Math.round(amount * 100) / 100;
    total = Math.round(total * 100) / 100;

    // SET AMOUNT / TOTAL

    if(total == 0 || amount == Infinity) {
        amountSum.textContent = "$0.00";
        totalSum.textContent= "$0.00";
        return false
    }

    amountSum.textContent = "$" + amount;
    totalSum.textContent= "$" + total;

    // RRESET VALUES AT THE END OF THE FUNCTION

  
    warnBill.style.display = "none";
    warnTip.style.display = "none";
    warnPeople.style.display = "none";
    

    percentButtons.forEach((btn) => {
        btn.style.background = "#00474B";
        btn.style.border = "2px #00474B solid"
        btn.style.color = "#FFFFFF";
    });

    billInput.value = "";
    inputOfPercent.value = "";
    numberOfPeople.value = "";

    billInput.style.border = "2px #F3F9FA solid";
    inputOfPercent.style.border = "2px #F3F9FA solid";
    numberOfPeople.style.border = "2px #F3F9FA solid";
}

// RESET VALUES

function resetResults() {
    document.getElementById('amount').textContent = "$0.00" 
    document.getElementById('total').textContent= "$0.00";

    percentButtons.forEach((btn) => {
        btn.style.background = "#00474B";
        btn.style.border = "2px #00474B solid"
        btn.style.color = "#FFFFFF";
    });

    warnBill.style.display = "none";
    warnTip.style.display = "none";
    warnPeople.style.display = "none";
 }


    









