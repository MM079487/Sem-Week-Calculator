var dateInput = document.getElementById("dataSelect")
var findButton = document.getElementById("findButton")
var resultDiv = document.getElementById("result")

dateInput.max = new Date().toISOString().split('T')[0] // set max to today

function buttonTrigger(){
    let targetDate = new Date(dateInput.value)
    let today = new Date()
    if(targetDate == "Invalid Date") return resultDiv.innerText = "Invalid Date"
    if(today.toLocaleDateString() == targetDate.toLocaleDateString()) return resultDiv.innerText = "Can't be today!"
    if(targetDate > today) return resultDiv.innerText = "Can't be a future date!"

    resultDiv.innerText = Math.floor(weeksBetween(targetDate, today)/7)+1
}

function weeksBetween(d1, d2) {
    return Math.floor((d2 - d1) / (1000 * 60 * 60 * 24));
}

function semButton(sem){
    let date;
    switch (sem) {
        case 1:
            date = new Date("07/14/2025").toISOString().split('T')[0]
            break;
        case 2:
            date = new Date("12/15/2025").toISOString().split('T')[0]
            break;
        case 3:
            date = new Date("04/27/2026").toISOString().split('T')[0]
            break;
    }

    dateInput.value = date
    console.log(date)
}