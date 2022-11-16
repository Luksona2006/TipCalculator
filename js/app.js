let percentButtons = document.querySelectorAll('.percent');

let billInput = document.querySelector('#bill');
let inputOfPercent = document.getElementById('custom');

let inputOfPeople = document.querySelector('#numberOfPeople');

let warnBill = document.querySelector('#warnBill');
let warnTip = document.querySelector('#warnTip');
let warnPeople = document.querySelector('#warnPeople');

let resetBtn = document.getElementById('reset');

let generate = document.getElementById('generate');

// LIMIT

inputOfPercent.oninput = function() {
    this.value = this.value.substr(0, 2);
}

billInput.oninput = function() {
    this.value = this.value.substr(0, 5);
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

    if(bill <= 0 || bill.length < 0 && person <= 0 || person.length < 0 && percent <= 0 || percent == false || percent.length < 0) {
        warnBill.style.display = "inline-block";
        warnTip.style.display = "inline-block";
        warnPeople.style.display = "inline-block";
        return false;
    }
    if(bill <= 0 || bill.length < 0 && person <= 0 || person.length < 0) {
        warnBill.style.display = "inline-block";
        warnPeople.style.display = "inline-block";
        return false;
    }
    if(bill <= 0 || bill.length < 0 && percent <= 0 || percent == false || percent.length < 0) {
        warnBill.style.display = "inline-block";
        warnTip.style.display = "inline-block";
        return false;
    }
    if(person <= 0 || person.length < 0 && percent <= 0 || percent == false || percent.length < 0) {
        warnPeople.style.display = "inline-block";
        warnTip.style.display = "inline-block";
        return false;
    }
    if(bill <= 0 || bill.length < 0) {
        warnBill.style.display = "inline-block";
        warnPeople.style.display = "inline-block";
        return false;
    }
    if(percent <= 0 || percent == false || percent.length < 0) {
        warnTip.style.display = "inline-block";
        return false;
    }
    if(person <= 0 || person.length < 0) {
        warnPeople.style.display = "inline-block";
        return false;
    }
    
    // const errorsSign = [{inputOfPercent: warnTip},{inputOfPeople: warnPeople},{percent: warnTip}];


    let amount = bill * (percent/100) / person;
    let total = bill * (percent/100);

    amount = Math.round(amount * 100) / 10;
    total = Math.round(total * 100) / 10;

    document.getElementById('amount').textContent = "$" + amount;
    document.getElementById('total').textContent= "$" + total;

    if(true) {
        warnBill.style.display = "none";
        warnTip.style.display = "none";
        warnPeople.style.display = "none";
    }

}

// RESET RESULTS

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


    









